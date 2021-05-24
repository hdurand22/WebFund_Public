

var likes = [9, 12, 9];
function addLike(index) {
    if (index == 0) {
        var neilLikes = (likes[0])+1;
        likes[0] = neilLikes;
        var countElement = document.querySelector("#neil");
        countElement.innerText = neilLikes + " like(s)";
    }
    else if (index == 1) {
        var nicholeLikes = (likes[1])+1;
        likes[1] = nicholeLikes;
        var countElement = document.querySelector("#nichole");
        countElement.innerText = nicholeLikes + " like(s)";
    }
    else if (index == 2) {
        var jimLikes = (likes[2])+1;
        likes[2] = jimLikes;
        var countElement = document.querySelector("#jim");
        countElement.innerText = jimLikes + " like(s)";
    }
}