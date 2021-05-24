function getUserName(){
    // 1. Display input box
    // 2. Prompt user to enter name
    var update = document.getElementById("edit-info"); // Get the edit window
    update.style.display = "flex"; // Display the window 
}

function updateUserName() {
    var newUsername = document.getElementById("my-input").value; // Accept user input
    document.getElementById("user-name").innerText = newUsername; // Set the new user name
    document.getElementById("edit-info").style.display = "none"; // Hide the popup
}

// Accept connection request and updated request block
function acceptConnection() {
    var getRequests = document.getElementById("connect-request-count"); // Get requests
    var numRequests = parseInt(getRequests.innerHTML); // Convert string to int
    getRequests.innerHTML = --numRequests; // Set the Connection Request count to the current count
    var addConnection = document.getElementById("connection-count"); // Get number of connections
    var numConnections = parseInt(addConnection.innerHTML); // Convert string to int
    addConnection.innerHTML = ++numConnections;

    //Delete request row
    var getRow = document.getElementsByClassName("request-row")[0]; //Get the first request-row class
    getRow.remove(); // Remove the element
}

// Reject connection request and updated request block
function rejectConnection() {
    var getRequests = document.getElementById("connect-request-count"); // Get requests
    var numRequests = parseInt(getRequests.innerHTML); // Convert string to int
    getRequests.innerHTML = numRequests-1; // Set the Connection Request count to the current count
    
    //Delete request row
    var getRow = document.getElementsByClassName("request-row")[0]; //Get the first request-row class
    getRow.remove(); // Remove the element
}