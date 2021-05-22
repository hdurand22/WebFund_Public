// Always Hungry
// 1. Function takes array [x]
// 2. Loop throu array and look for "food" [x]
// 3. If "food" is found, console.log "yummy" [x]
// 4. if "food" isn't found, console.log "I'm hungry" [x]

function alwaysHungry(arr) {
    var foodCount = 0; // Need this to track if there were any occurrences of "food"
    for (var i=0; i<arr.length; i++) {
        if (arr[i] == "food") {
            foodCount++;
            console.log("yummy");
        }
    }
    if (foodCount == 0) {
        console.log("I'm hungry");
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);

// High Pass Filter
// 1. Create function that accepts array and a cutoff value
// 2. Loop through array
// 3. If values in array are larger than cutoff, add to new array
// 4. return new array

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i=0; i<arr.length; i++) { // Loop through arr
        if (arr[i] > cutoff) { // check and see if value is larger than cutoff
            filteredArr.push(arr[i]); // add value to new array
        }
    }
    return filteredArr;
}

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

//Better Than Average
// 1. Create function that takes array
// 2. Loop through array
// 3. Calculate average of values in array
// 4. Loop through array
// 5. Find number of values in array that are larger than average
// 6. Return the count of larger-than-average values

function betterThanAverage(arr) {
    var sum = 0;
    for (var i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    var avg = sum/arr.length;
    var count =0;
    for (var j=0; j<arr.length; j++) {
        if (arr[j] > avg) {
            count++;
        }
    }
    return count;
}

var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);

// Array Reverse
// 1. Create function that takes in an array
// 2. Reverse values of array
// 3. Return reversed array

function reverse(arr) {
    for (var i=0; i<(arr.length/2); i++) {
        var temp = arr[i]; // Store values that may get lost
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);

// Fibonacci Array
// 1. Create function that takes in an array length
// 2. Add next Fibonacci number to array
// 3. do this until array length is met
// 4. return new array of Fibonacci numbers

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for (var i=2; i<(n); i++) {
        fibArr.push(fibArr[i-2]+fibArr[i-1]);
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

