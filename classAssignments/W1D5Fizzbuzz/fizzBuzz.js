// 1. go through numbers 1 to 100 [x]
// 2. If number is multiple of 3, print "Fizz" [x]
// 3. If number is multiple of 5, pring "Buzz" [x]
// 4. If number is multiple of 3 AND 5, pring "FizzBuzz" [x]
// 5. All other numbers print normally [x]

function fizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        if (i%3 == 0 && i%5 != 0) { //Check if i is multiple of 3
            console.log("Fizz");
        }
        else if (i%5 == 0 && i%3 != 0) { //Check if i is multiple of 5
            console.log("Buzz");
        }
        else if (i%3 == 0 && i%5 == 0) { //Check if i is multiple of 3 AND 5
            console.log("FizzBuzz");
        }
        else {
            console.log(i);
        }
    }
}

fizzBuzz();