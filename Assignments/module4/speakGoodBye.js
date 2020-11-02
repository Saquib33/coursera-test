(function(){
	var speak='Good Bye';
	var goodByeSpeaker= function(name){
		console.log(speak + " " + name);
	}
	window.goodByeSpeaker=goodByeSpeaker;
})(window);
