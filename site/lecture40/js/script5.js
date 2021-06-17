// // arrays
// var array = new Array(); 
// array [0] = "ellie";
// array [1] = 2;
// array [3] = function (name){
// 	console.log ("hello " + name);
// };
// array [4] = {course: "html,css & js"};

// console.log (array);

// console.log(array[2]);
// array [3]("mylove " + array [0]);
// console.log (array[4].course);


//***short hand array creation
var names = ["ellie" , "ella" , "elia"];
// console.log (names);

for(var i=0; i < names.length; i ++){
	console.log("hello" + names[i]);
}
console.log (i);

names[100] = "mark";
for(var i=0; i < names.length; i ++){
	console.log("hello" + names[i]);
}

//***2

var names2 = ["allie" , "alla" , "alia"];

// var myObj = {
// 	name:"ellie",
// 	mood:"bad",
// 	action:"be happy"

// };

// for (var prop in myObj){
// 	console.log(prop + ":" + myObj[prop]);
// }

for (var name in names2){
	console.log("hello "+names2[name]);
}

names2.greeting = "Ciao!"; //greeting becomes a property of array no different from 0/1/2

for (var name in names2){
	console.log("hello "+names2[name]);
}



//
var counter = 0;
var myArray = ["Yaakov", 2, {handle: "yaakovchaikin"}];
for (var i = 0; i < myArray.length; i++) {
  counter++;
}
console.log(counter);


//closures

function  makeMultiplier (multiplier){
	//var multiplier =2;
	function b (){
		console.log("multiplier is : " + multiplier);
	}
	b ();

	return(
		function(x){
			return multiplier * x;
		}
		);
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));//gets it own execution envi/context














