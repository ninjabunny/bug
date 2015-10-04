(function(window){
	var myFirebaseRef = new Firebase("https://glaring-heat-9883.firebaseio.com/");
	
	//writing example
	myFirebaseRef.set({
	  title: "Hello World!",
	  author: "Firebase",
	  location: {
	    city: "San Francisco",
	    state: "California",
	    zip: 94103
	  }
	});	
	
	// reading example
	var firebaseObj;
	myFirebaseRef.on("value", function(snapshot) {
		firebaseObj = snapshot.val();
	});
	console.log(firebaseObj.title + " " +firebaseObj.location.zip);
})(window);
