(function (window){


	var Greeter = {};
	Greeter.name ="mark";
	var greeting = "hola ";
	Greeter.sayHi = function(){
		console.log (greeting + Greeter.name);
	}

window.Greeter = Greeter;

})(window);

