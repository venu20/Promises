// Import stylesheets
import './style.css';
import { whenAllDone } from './customMethods';
import { MyPromise } from './customPromise';

const urls = [
  'https://jsonplaceholder.typicode.com/photos',
  'https://jsonplaceholder.typicode.com/albums',
  'https://jsonplaceholder.typicode.com/comment'
  ];

const details = urls.map((url) => fetch(url));

whenAllDone(details).then((response) => {
  console.log('On Response', response);
}, (reject) => {
  console.log('Rejected ALL', reject)
})

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

randomNumber.then((response) => {
  console.log('Resolved Number', response);
}, (rejection) => {
  console.error('Rejected Number', rejection);
});
