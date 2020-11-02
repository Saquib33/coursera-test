(function (){
	var names=["Saquib","Yaakov Sir","Jane","Rahul","James","Julie","Jason","jakob","Andrew"];

	for (var i = 0; i < names.length; i++) {
		var fletter = names[i].charAt(0).toLowerCase();

		if (fletter=== 'j') {
			goodByeSpeaker(names[i]);
		}
		else{
			helloSpeaker(names[i]);
		}
	}
})();