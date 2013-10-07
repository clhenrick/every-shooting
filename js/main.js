$(".hook").on('click', function(event){
	console.log("cliked!");
	loadImage();
});

var changed = false;

function loadImage(){

	if (changed == false) {

		$(".hook p").remove();
		$(".hook").append("<p>Stuff happened</p>");

		changed = true;
	
	} else {

		$(".hook p").remove();
		$(".hook").append("<p>Back Again</p>");

		changed = false;
	}
}

