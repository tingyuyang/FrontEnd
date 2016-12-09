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

//you will need the code below to print
promise.then(function(result) {
  console.log(result); // "Stuff worked!"
}, function(err) {
  console.log(err); // Error: "It broke"  //this case, we will print err.
});
