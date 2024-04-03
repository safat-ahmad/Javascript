const myFunction = new Function ("a", "b", "return a * b");
console.log(myFunction(10, 5));


const myFunctions= function(a, b){return a * b};
console.log(myFunctions(2, 4));