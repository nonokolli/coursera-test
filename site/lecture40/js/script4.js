//COPY BY REFERENCE VS. BY VALUE
var a = 7;
var b = a;
console.log ("a = "+a);
console.log ("b = "+b);

b=5;
console.log ("after b is updated");
console.log ("a = "+a);
console.log ("b = "+b);


//by reference: object
var a = {x:7};
var b = a;
console.log(a);
console.log(b);

b.x = 5;
console.log ("after b.x is updated");
console.log (a);
console.log (b);
console.log ("a = "+ a.x);


//PASS BY REFEREBCE VS. BY VALUE
function changeprimitive(primvalue){
	console.log("in changeprimitive...");
	console.log("before:");
	console.log(primvalue);

	primvalue = 5; 
	console.log("after:");
	console.log(primvalue);
}

var value = 7;
changeprimitive(value); //primvalue = value
console.log("after changeprimitive, orig value:")
console.log(value);


//

function changeObject (objvalue){
	console.log("in changeobject...");
	console.log("before:");
	console.log(objvalue);

	objvalue.x=11;
	console.log("after:");
	console.log(objvalue);
}
 value = {x:2.2};
 changeObject(value);//objvalue = value
 console.log("after changeObject, orig value:");
 console.log(value);





//lecture48

function test(){
	console.log(this);
	this.myname = "ellie";
}
test();
console.log (window.myname);


//function constructors with capital c
function Circle (radius){
	this.radius = radius;

	this.getArea = 
	function(){
		return Math.PI * Math.pow(this.radius,2);
	};
}

// var myCircle0 = new Circle(10); // new object
// console.log(myCircle0.getArea());
//why this runs with error by itself? while deleting the following code would make it not with error


//prototype

function Circle (radius){
	this.radius = radius;
	}

Circle.prototype.getArea = 
function (){
	return Math.PI * Math.pow (this.radius, 2);
}

var myCircle = new Circle(10); // new object
console.log(myCircle.getArea());

var myOtherCircle = new Circle(20);
console.log(myOtherCircle.getArea());


//*** object literals and "this"
var literalCircle ={ //new object()
	radius: 10,
	getArea:function(){
		var self = this;
		console.log(this);


		var increaseRadius = function (){
			self.radius = 20;
		};
		increaseRadius();
		console.log(this.radius);

		return Math.PI * Math.pow(self.radius, 2);
	}
};


console.log(literalCircle.getArea());





function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + " likes barking! Bark!");
}

var max = new Dog("Max","aa","12");
max.bark();





