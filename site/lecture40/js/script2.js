//***string concatenation
var string = "hello";
string += "world";
// which is equal to string = string + "world";
console.log(string+"!")
//5 is concatenation & 3 is concatenate string with another string


//***regular math operators:+ - * /
console.log((5+15)/4);
console.log(undefined/3);
//showing NaN= meaning not a number
function test1 (a){
	console.log(a / 5);
}
test1(15);


//***equality
var x=4, y=4;
if(x==y){
	console.log('x= 4 is equal to y=4');
}

x ="4";
//x is not 4 as number but 4 as a string
if(x==y){
	console.log("x='4' is equal to y=4");
}
// this is type coercion= they are converted to same type


//***strict equality
if(x===y){
	console.log("x='4' is equal to y=4");
}
else{
	console.log("strict x='4' is not equaly to y=4");
}
//*****false - if statement
if (false||null||NaN||0||""||undefined){
	console.log("this would never be displayed");
}
else{
	console.log("all false");
}


//****all true - if statement
if (true&&"hello"&&1&&-1&&"false"){
	console.log("all true");
}

//***curly braces as a style or structure?
function a ()
{
	return
	{
		name:"Ellie"
	};
}
function b (){
	return{
		name:"Ellie"
	};
}

console.log(a());
console.log(b());

//***for loop
//i++  equals to i = i+1

var sum = 0;
for (var i =0; i<10; i++){
	console.log(i);
	sum = sum+i;
}

console.log("sum of 0 - 9 equals to "+ sum);


//default values
function orderlambwith (sidedish){

	sidedish = sidedish || "whatever!!!";
	//if (sidedish===undefined){
	//	sidedish ="whatever!";
	//}
	
	console.log("lamb with "+ sidedish);
}

orderlambwith("mayonaise");
orderlambwith();
console.log (orderlambwith(123));

var p = 10;
if ((null) || (console.log("Hello")) || p > 5 ) {
  console.log("Hello");
}


//**Incorrect
// Since we are using an OR operator, the 'if' statement will stop evaluating conditions after it encounters the very first clause that evaluates to true.

// null is false, so we continue

// console.log("Hello"), prints "Hello" to the console and returns nothing, so it's 'undefined' and 'undefined' is false, so we continue

// x > 5 is true, so we execute the body of the 'if' statement and print another "Hello". 

// So, the answer is that "Hello" will be printed to the console 2 times.










