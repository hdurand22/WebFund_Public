function myAlert() {
    alert("Loading weather report...");
}

function closeAd() {
    let cookiePolicy = document.getElementsByClassName("cookie-policy")[0]; // Get the first part of the cookie policy div
    cookiePolicy.remove(); // Remove the div
}

function convertTemp(units) {
    if (units == "Celsius") { // Convert to Celsius
        let highTemp = document.getElementsByClassName("high-temp"); // Get all high temps
        for (let i in highTemp) { // Look through the class and convert
            let convertedTemp = highTemp[i]; // Get single temp
            convertedTemp = parseInt(convertedTemp.innerHTML);
            convertedTemp = Math.round(((convertedTemp - 32)* (5/9)));
            highTemp[i].innerHTML = convertedTemp+"&#176";
        }
        let lowTemp = document.getElementsByClassName("low-temp"); // Get all high temps
        for (let i in lowTemp) { // Look through the class and convert
            let convertedTemp = lowTemp[i]; // Get single temp
            convertedTemp = parseInt(convertedTemp.innerHTML);
            convertedTemp = Math.round(((convertedTemp - 32)* (5/9)));
            lowTemp[i].innerHTML = convertedTemp+"&#176";
        }
    }
    if (units == "Fahrenheit") { // Convert to Fahrenheit
        let highTemp = document.getElementsByClassName("high-temp"); // Get all high temps
        for (let i in highTemp) { // Look through the class and convert
            let convertedTemp = highTemp[i]; // Get single temp
            convertedTemp = parseInt(convertedTemp.innerHTML);
            convertedTemp = Math.round(((convertedTemp * (9/5))+32));
            highTemp[i].innerHTML = convertedTemp+"&#176";
        }
        let lowTemp = document.getElementsByClassName("low-temp"); // Get all high temps
        for (let i in lowTemp) { // Look through the class and convert
            let convertedTemp = lowTemp[i]; // Get single temp
            convertedTemp = parseInt(convertedTemp.innerHTML);
            convertedTemp = Math.round(((convertedTemp * (9/5))+32));
            lowTemp[i].innerHTML = convertedTemp+"&#176";
        }
    }
}