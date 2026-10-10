var songNames = ["Rush", "Bounce", "Sparcle", "Fly", "Burst"];
var songCounts = [320, 390, 100, 450, 280];
var newSongCounts = "";

function sortA_Z(){
    songNames.sort();
    document.getElementById("songList").innerHTML = "songs: " + songNames.join(", ");
}
function sortZ_A(){
    songNames.sort().reverse();
    document.getElementById("songList").innerHTML = "songs: " + songNames.join(", ");
}
function sortByCount(){
    songCounts.sort(function(a, b){return a - b});
    document.getElementById("songCounts").innerHTML = "song counts: " + songCounts.join(", ");
}
function sortByCountDesc(){
    songCounts.sort(function(a, b){return b - a});
    document.getElementById("songCounts").innerHTML = "song counts: " + songCounts.join(", ");
}
function displaySongs(){
    newSongCounts = songCounts.map(function(c){return c+" plays"});
    document.getElementById("everyCountLabel").innerHTML = "song counts:  " + newSongCounts.join(", ");
}