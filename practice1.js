let a = 10;

console.log(a);

let b = [1, 2, 3, 4, 5];

console.log(b);

console.log("Hello World");

c = 10; // Global variable
var d = 30; // Function Scope
let e = 50; // Block Scope

function fun() {

	let a = 5;

	if (a==5) {
		let b = 10;
		console.log("Inside", b);
	}

	console.log("Outside", b);
}

function squareRoot(n){

	console.log(Math.sqrt(n));
	return "I am the square root function!"
}

// Function Hoisting
// The funtions defined like this don't move up during code compiltion so to make a call to such
// functions we need to make a call below the function.
var sqrt_n = function () {
	console.log("In second sqrt function");
	return;
}

// ARRAYS IN JS

let arr = ["apple", "mango", "pineapple", "orange"];
console.log(arr);

// LOOPS

for(i = 0; i < arr.length; i++){
	console.log(arr[i]);
}

arr.push("Banana");// Insert at back
arr.pop();// Remove from back
arr.shift();// Remove from front
arr.unshift("Kiwi");// Insert at front
arr.indexOf("apple");// Find Element

var canvas = document.getElementById('mycanvas');
console.log(canvas);