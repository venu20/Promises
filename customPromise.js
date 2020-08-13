import './style.css';
const DUMMY_API = 'https://jsonplaceholder.typicode.com/posts';
const DUMMY_API_USERS = 'https://reqres.in/api/users';



// Get api call using OLD way of doing
const get = (api) => new Promise((resolve, reject) => {
  const req = new XMLHttpRequest();

  req.open('GET', api);

  req.onload = () => {
    if (req.status === 200 || req.status === 202) {
      resolve(JSON.parse(req.response));
      // resolve(req.response)
    } else {
      reject(Error(req.responseText));
    }
  }

  req.onerror = () => {
    reject(Error(req.responseText));
  }


  req.send();
});

// get(DUMMY_API).then((re) => {
//   console.log(re);
// }, (err) => {
//   console.log('ERROR', err);
// });

// // How it handles array of promises
// let urls = [];
// for (let i = 0; i < 10; i++) {
//   urls.push(`${DUMMY_API_USERS}?page=${i}&per_page=20`);
// }

// Lets use our custom get method to make api calls to all the urls

// Loop through our chapter urls
// const sequence = Promise.resolve();

// urls.reduce((seq, url) => {
//   return seq.then(() => {
//     return get(url).then((res) => {
//       console.log(url, res, 'REPSONSE');
//     })
//   })
// }, sequence)

function MyPromise(cb) {
  this.then = function (fulfilled, rejected) {
    
  }
}
const randomNumber = new MyPromise(executor);
// MyPromise {then: function}
function MyPromise(cb) {
  let successCb;
  let failureCb;

  let that = this;
  this.then = function (fulfilled, rejected) {
    successCb = fulfilled;
    failureCb = rejected || null;
    console.log('local this', this);
    return this;
  }

  const onFulfilled = function (value) {
    successCb(value);
  };

  const onRejected = function (reason) {
    failureCb(Error(`${reason}`));

  };

  setTimeout(() => {cb(onFulfilled, onRejected)}, 0);
}

// This executor function will have access to onFulfilled and onRejected methods
// You can write your own names for onFulfilled and onRejected methods
const executor = (resolved, rejected) => {
  const num = Math.random() * 100;
  if (num > 50) {
    resolved(num);
  } else {
    rejected(num);
  }
};
const randomNumber = new MyPromise(executor);

console.log(randomNumber)

randomNumber.then((response) => {
  console.log('Resolved Number', response);
}, (rejection) => {
  console.error('Rejected Number', rejection);
})


console.log('lets see which one prints first')