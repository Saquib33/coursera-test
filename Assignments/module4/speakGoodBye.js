(function(){
	var speak='GoodBye';
	var goodByeSpeaker= function(name){
		console.log(speak + " " + name);
	}
	window.goodByeSpeaker=goodByeSpeaker;
})(window);

// for goodbye speakers
//usng IIFE

