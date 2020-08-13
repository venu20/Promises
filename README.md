# js-4zoq5e

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-4zoq5e)

<h2>Promise</h2>

<article>In a real world scenario, 
for example when you call your friend they might ‘Oh sorry buddy i'm little busy right now , can i call you back ?’ this kind of messages we get on a daily basis.
<section>
Here your friend promised you something (calling you back). 
So the, 
Promise can be fulfilled(meaning he called you back)
Promise can be rejected (he informed you that he won't call you back)
Promise can be in pending state (he didn’t call you).

The above 3 scenarios will apply in programming too.
</section>
<section>
<h3> Let's discuss ‘asynchronous’ first.</h3> 
Asynchronous means running 2 or more things parallel.

Javascript is single threaded (meaning it executes your program one line at a time) in nature. Which means it executes your program in a synchronous fashion. Javascript used `callbacks` to run code parallel (asynchronously)  
</section>
</article>
<section>
‘Promise’ in javascript is like a normal constructor function.  

Promise function has below methods to reuse:
1) then
  - handles when the promise is fulfilled. (Returns a promise)
2) catch
  - handles when the promise is rejected. Returns a promise
3) finally 
  - handles both fulfilled and rejected states. Returns a promise
</section>

<article>
Lets create our own promise which should have all the above methods.
For Creating our own Promise , 
lets follow below steps:
1) Create a constructor function which accepts a callback
2) constructor function should return a chainable promises
3) capability to resolve or reject

```
function MyPromise(cb) {
  let successHandler;
  let failureHandler;

  // 'this' contains chainable promise
  this.then = function (fulfilled, rejected) {
    successHandler = fulfilled;
    failureHandler = rejected || null;
    return this;
  }

  const onFulfilled = function (value) {
    successHandler(value);
  };

  const onRejected = function (reason) {
    failureHandler(Error(`${reason}`));
  };

  setTimeout(() => {cb(onFulfilled, onRejected)}, 0);
}
```
Instance should have access to ’then’ method to deal with success or failure scenarios
‘then’ method should accept 
Let's start by creating a function for our own promise as ‘MyPromise’ which accepts a callback function and in the below code randomNumber has an instance of MyPromise function

function MyPromise(cb) {

}
</article>
const randomNumber = new MyPromise(callbackFn);

randomNumber should access a ‘then’ method so let's create a `then` method  for our MyPromise
which accepts 2 callback functions 
onFulfilled
onRejected
function MyPromise(cb) {
  this.then = function (fulfilled, rejected) {
    
  }
}
const randomNumber = new MyPromise(executor);
// {then: function}




the constructor should return a ‘then’ method because we have to process the resolved and rejected values
















function MyPromise(cb) {
  let successCb;
  let failureCb;

  let that = this;
  this.then = function (fulfilled, rejected) {
    successCb = fulfilled;
    failureCb = rejected || null;
  }

  const onFulfilled = function (value) {
    successCb(value);
  };

  const onRejected = function (reason) {
    failureCb(Error(`${reason}`));

  };

  setTimeout(() => {cb(onFulfilled, onRejected)}, 0);
}



Promise will be used for asynchronous operations such as API calls, event handling etc.
Promise constructor will have static methods and instance methods
Static methods such as .all, .race, .allSettled, .

A promise will have below 4 states
onFulfilled
onRejected
Pending


We can create a promise instance using Promise constructor function like below


const callback = (resolve, reject) => {
resolve(50)
};

// example variable will have access to `Promise` prototype methods
// such as `then`, `finally`, `catch`
const example = new Promise(callback);
Promise is a constructor which takes 1 callback method where it has support for 2 parameters such as resolve, reject
resolve and reject both are callback methods 
On resolve 

On resolve, it deals with  success/fulfill of the promise and reject method will deal with failure/reject of the callback function.

When you return something from a then() callback, it's a bit magic. If you return a value, the next then() is called with that value. However, if you return something promise-like, the next then() waits on it, and is only called when that promise settles (succeeds/fails).

