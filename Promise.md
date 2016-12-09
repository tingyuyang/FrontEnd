* The promise constructor takes one argument, a callback with two parameters, resolve and reject. Do something within the callback, perhaps async, then call resolve if everything worked, otherwise call reject.
```javascript
//Simple Promise file
var promise = new Promise(function(resolve, reject) {
	var a = 2;
  if (a==1) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});
```
* then() takes two arguments, a callback for a success case, and another for the failure case. Both are optional, so you can add a callback for the success or failure case only.
```javascript
//you will need the code below to print
promise.then(function(result) {
  console.log(result); // "Stuff worked!"
}, function(err) {
  console.log(err); // Error: "It broke"  //this case, we will print err.
});
```

