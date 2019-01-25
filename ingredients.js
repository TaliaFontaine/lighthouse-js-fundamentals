var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var list = 0;

while (list < ingredients.length) {
    console.log(ingredients[list]);
    list++;
}
console.log("while loop\n");

// Write a for loop that prints out the contents of ingredients:
for (var list = 0; list < ingredients.length; list++) {
    console.log(ingredients[list]);
}
console.log("for loop\n");

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var i = ingredients.length - 1; i >= 0; i--) {
    console.log(ingredients[i]);
}
console.log("list printed backwards");

