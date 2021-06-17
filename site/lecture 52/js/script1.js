(function (window){

	var yaakovGreeter ={};
	yaakovGreeter.name ="yaakov";
	var greeting = "hello ";
	yaakovGreeter.sayHello = function (){
		console.log ("hello " + yaakovGreeter.name);
	}
window.yaakovGreeter = yaakovGreeter;

})(window);



(function(global) {

 var obj = {};
 obj.dreamOn = function () {
 console.log("I want to see the global scope! Let me out!");

};
global.doer = obj;
 
 })(window);

doer.dreamOn();