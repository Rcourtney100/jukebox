// You will build a music player that will end up playing any mp3 you can find online. 
// Think about what functionality you might need for this to work. Encapsulate all of 
// this functionality in a JavaScript object so that starting a song is as simple as 
// calling Jukebox.play() You need an array of song objects and the ability to play, 
// stop and pause a song. How would you switch songs? Can you shuffle songs? Focus on getting 
// the JavaScript to work and keep the HTML/CSS minimal, make it work before you make it look good!

var jukeBox = new Jukebox();
var indie = new Song("Indie");
var house = new Song("House");

// var songList = [indie, house];

jukeBox.addSong(indie)
jukeBox.addSong(house)


function Jukebox(){
	this.addSong = function(song){
		this.songList.push(song);
	}
	this.songList = [];
}		

function Song(name){
	this.name = name;
}