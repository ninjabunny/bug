(function(window){
	'use strict';
	function define_library(){
		var Library = {};
		var name = "Timmy";
		Library.greet = function(){
			console.log("hello, this is " + name + ".");
		};
		return Library;
	}

	if(typeof(Library) === "undefined"){
		window.Library = define_library();
	} else {
		console.log("Library is alaredy define.");
	}
})(window);