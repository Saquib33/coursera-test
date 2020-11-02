(function(){
	var speak='Good Bye';
	var goodByeSpeaker= function(name){
		console.log(goodByeSpeaker + " " + name);
	}
	window.goodByeSpeaker=goodByeSpeaker;
})(window);