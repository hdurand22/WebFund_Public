// pizzaOven - returns JS Pizza object

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {}; // Create empty object
    // Define the pizza's properties
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza; // Return the pizza
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);
var pizza3 = pizzaOven("hand tossed", "marinara", ["mozzarella"], ["mushrooms", "pepperoni"]);
console.log(pizza3);
var pizza4 = pizzaOven("deep dish", "traditional", ["ricotta"], ["sausage", "tomatoes"]);
console.log(pizza4);

// randomPizza - populate each pizza with random ingredient
// 1. generate random number
// 2. select crustType with random number
// 3. generate random number
// 4. select sauceType with random number
// 5. generate random number
// 6. select cheeses with random number
// 7. generate random number
// 8. select toppings with random number

function randomPizza() {
    var pizza = {crust: "", sauce: "", cheese: "", topping: ""};
    var crustOptions = ["hand tossed", "deep dish", "gluten-free"];
    var sauceOptions = ["traditional", "white sauce", "marinara", "none"];
    var cheeseOptions = ["mozzarella", "feta", "ricotta"];
    var toppingOptions = ["pepperoni", "sausage", "bacon", "mushrooms", "olives", "onions", "peppers"];
    // Get crust
    var rand = Math.floor((Math.random()*(3)));
    pizza.crust = crustOptions[rand];
    rand = Math.floor((Math.random()*(4))); // Re-randomize
    pizza.sauce = sauceOptions[rand];
    rand = Math.floor((Math.random()*(3))); // Re-randomize
    pizza.cheese = cheeseOptions[rand];
    rand = Math.floor((Math.random()*(7))); // Re-randomize
    pizza.topping = toppingOptions[rand];
    
    return pizza;
}

var randPizza = randomPizza();
console.log(randPizza);
