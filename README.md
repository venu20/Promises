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

When we create an `instance` from `MyPromise`, It should have access to ’then’ method to deal with success or failure scenarios
‘then’ method should accept a callback function.


The below code will create an `randomNumber` instance from `MyPromise` and resolved value will go into the first callback function in `then` and second callback function will deal with `Rejection`

```
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
```











ES2015 `Promise` constructor will have access to 
static methods and instance methods

### Static methods
- allSettled
- all
- race
- any

### Instance Methods
- then
- finally
- catch

### Important Notes
<section style="color: #184185">
When you return something from a then() callback, it's a bit magic. If you return a value, the next then() is called with that value. However, if you return something promise-like, the next then() waits on it, and is only called when that promise settles (succeeds/fails).
</section>
