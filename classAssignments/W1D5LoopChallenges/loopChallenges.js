// Print odds 1-20
// 1. loop through numbers 1 to 20
// 2. determine if number is odd
// 3. If number is odd, console.log it

for (var i =1; i <= 20; i++) {
    if (i%2 != 0) { // Check for odd number
        console.log(i);
    }
}

// Decreasing Multiples of 3
// 1. loop through 100 to 0
// 2. determine if number is divisible by 3
// 3. if divisible by 3, console.log it

for (var i=100; i >= 0; i--) {
    if (i%3 == 0) { // Check for divisibility by 3
        console.log(i); // Does 0 count? If not, would need to check that in the conditional
    }
}

// Print the sequence
// 1. loop through sequence
// 2. console.log each number

var arr = [4, 2.5, 1, -0.5, -2, -3.5]; // Declare sequence

for (var i=0; i<arr.length; i++) {
    console.log(arr[i]);
}

// Sigma
// 1. Loop through 1 to 100
// 2. add value to sum
// 3. console.log sum

var sum = 0; 

for (var i=1; i <= 100; i++) {
    sum += i; // Add each number to previous sum
}

console.log(sum); // Print it

// Factorial
// 1. loop through 1 to 12
// 2. multiply first number by next number
// 3. console.log the product

var product = 1;

for (var i=1; i <= 12; i++) {
    product = product*i;
}

console.log(product);