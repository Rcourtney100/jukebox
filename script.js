// You will build a music player that will end up playing any mp3 you can find online. 
// Think about what functionality you might need for this to work. Encapsulate all of 
// this functionality in a JavaScript object so that starting a song is as simple as 
// calling Jukebox.play() You need an array of song objects and the ability to play, 
// stop and pause a song. How would you switch songs? Can you shuffle songs? Focus on getting 
// the JavaScript to work and keep the HTML/CSS minimal, make it work before you make it look good!
// Grading Criteria:

// JS throws no errors
// Pause, Play, and Stop functions work (and do not use built in functionality)
// JukeBox is object-oriented
// Page has at least one song on load and can play a different song based on title
// Allow a user to load one of their own songs

var playList = ["music/03 ProtoVision.m4a","music/08 Nightcall.m4a","music/indie.mp3","music/house.mp3"];
var jukeBox = new Jukebox();


// var songList = [indie, house];

// jukeBox.addSong(music/03 ProtoVision.m4a);
// jukeBox.addSong(music/08 Nightcall.m4a);
// jukeBox.addSong(music/indie.mp3);
// jukeBox.addSong(music/house.mp3);


function Jukebox(){
		
	this.play = function(){
		document.getElementById("music").play();
	}
	
	this.pause = function(){
		document.getElementById("music").pause();
	}	
	this.stop = function(){
		document.getElementById("music").stop();
	}
}

var jukeBox = new Jukebox();

document.getElementById("Play").addEventListener("click", Jukebox.play);
document.getElementById("Pause").addEventListener("click", Jukebox.pause);
document.getElementById("Stop").addEventListener("click", Jukebox.stop);