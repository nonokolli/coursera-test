// //OBJECT CREATION
// var company = new Object();
// company.name = "youknowwhat?";
// company.ceo = new Object();
// company.ceo.lastname = "AZUKI";
// company.ceo.favcolour = "yellow";

// //** dot notation or []bracket notation
// console.log(company);
// console.log("company's name is "+company.ceo.lastname);
// console.log(company["name"]);

// company.$stock = 1111;
// // company.$stock of company = 1111;
// // company[$stock of company] = 1111;

// // company["stock of company"] = 1111;
// var stockpropname = "stock of company";
// company[stockpropname] = 1111;

// console.log(company);
// console.log("stock of company is " + company[stockpropname]);



// ***object literal: a better way
var facebook = {
	name:"facebook",
	ceo:{
		firstname:"mark",
		favcolour:"bleuuuu"
	},
	//object literal notation
	"$stock of property":110
}

console.log(facebook.ceo.firstname)










//**function are first-class data type
// functions are objects
function multiply (x,y){
	return x * y;
}
// console.log (multiply (109,23));
multiply.version="v.1.1.2";
console.log(multiply);
//47==49
console.log(multiply.toString());
console.log(multiply.version);

//***function factory
function makemultiplier(multiplier){
	var myfunc = function (x){
	return multiplier * x;
};
return myfunc;
}

var multiplyby3 = makemultiplier (3);
console.log(multiplyby3(10));

var doubleall= makemultiplier (2);
console.log(doubleall(100));




function division(divideme){
	var myfunction = function (y){
		return y/divideme +5;
	};
	return myfunction;
}

var divideby3 = division(3);
console.log(divideby3(15));



//*** passing fuctions as  arguments
function doperation (x,operation){
	return operation(x);
}

var result = doperation (18,multiplyby3);
console.log(result);
result = doperation (55.5,doubleall);
console.log(result);




