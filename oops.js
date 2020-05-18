// // Javascript allows to create object without defining the class

// // One way of creating a Javascript Obeject (JSON) - Javascript Object Notation

// var bird = {
// 	x:100,
// 	y:20,
// 	color:"blue",
// 	eggs:["one", "two", "three"],
// 	fly:function(){
// 		console.log("Bird is flying", this.x, this.y);
// 	}
// };


// // For Loop

// for(let i = 0; i < bird.eggs.length; i++){
// 	console.log(bird.eggs[i]);
// }

// //For each Loop

// bird.eggs.forEach(function(val, idx){
// 	console.log(idx, val);
// })


// Another way of creating object
// Class Keyword was introduced(ECMAScript 2015)

// Class Decleration
class FruitClass{
	constructor(taste, color){
		this.color = color;
		this.taste = taste;
	}
}

// Class Expression
let FruitClass2 = class{
	constructor(taste, color){
		this.color = color;
		this.taste = taste;
	}
}

let mango = new FruitClass("sweet", "yellow");

let orange = new FruitClass2("sour", "orange");

var apple = {
	taste:"sweet",
	color:"red",
}