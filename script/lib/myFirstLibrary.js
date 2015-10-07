(function($, window){
	'use strict';
	function define_library(){
		var Library = {};
		var el = $('body');
		var bodyState;
		var myFirebaseRef = new Firebase("https://glaring-heat-9883.firebaseio.com/");

		Library.addGameObj = function(){

			el.append("<div class=\"gameObj draggable rotatable resizable\">");
			$('.gameObj').uniqueId();
			$('.draggable').draggable();

			el.append("<div class=\"gameObj draggable rotatable resizable\">");
			$('.gameObj').uniqueId();
			$('.draggable').draggable();

			el.append("<div class=\"gameObj draggable rotatable resizable\">");
			$('.gameObj').uniqueId();
			$('.draggable').draggable();

			// $('.resizable').resizable({
			//     aspectRatio: true,
			//     handles: 'ne, se, sw, nw'
			// });	
			
		};
		Library.save = function(){
			bodyState = $('body').clone();
			var json_text = JSON.stringify(bodyState, null, 2);
			myFirebaseRef.set(json_text);
		};

		Library.restore = function(){
			var tempRestoredState;
			myFirebaseRef.on("value", function(snapshot) {
				tempRestoredState = snapshot.val();
			});
			var your_object = JSON.parse(tempRestoredState);

			$('body').empty().prepend($(your_object));
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