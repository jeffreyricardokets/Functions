let pizzaAmount = 2;
let sushiAmount = 3;



const makePizza = function () {
    console.log("mix flour with water,sugar,salt and yeast")
    console.log("let it rest for two hours")
    console.log("work on the dough")
    console.log("Make your favorite Spaghetti sauce")
    console.log("Make the dough in a pizza form")
    console.log("put the sauce and the toppings on the pizza")
    console.log("put it in the oven for 15 minutes")
}

const makeSushi = function () {
    console.log("Get the fish")
    console.log("don't cook it")
    console.log("make it look nice")
}

for (i = 0; i < pizzaAmount; i++) {
    makePizza();
}
for (i = 0; i < sushiAmount; i++) {
    makeSushi();
}