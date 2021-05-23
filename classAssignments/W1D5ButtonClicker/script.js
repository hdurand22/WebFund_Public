var partyCounter = 0; // For counting clicks

function gifOn () {
    var gif = document.getElementById("surprise");
    gif.style.display = "inherit";
    partyCounter++;
    console.log("Party times: " + partyCounter);
}