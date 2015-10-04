(function($, window){
	'use strict';
	function define_library(){
		var Library = {};
		var el = $('body');
		Library.addGameObj = function(){

			el.append("<div class=\"gameObj draggable rotatable resizable\">");
			$('.gameObj').uniqueId();
			$('.draggable').draggable();

			// $('.resizable').resizable({
			//     aspectRatio: true,
			//     handles: 'ne, se, sw, nw'
			// });	
			
		};
		return Library;
	}

	if(typeof(Library) === "undefined"){
		window.Library = define_library();
		// $.fn.extend(define_library());
	} else {
		console.log("Library is alaredy define.");
	}
})($, window);