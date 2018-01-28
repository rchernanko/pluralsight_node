//Let's now do something a little more advanced...
//We've extracted the dice object into its own .js file 'dice.js'.

var dice = require("./dice"); 
// ./ means look in the same directory as i'm currently in

//Just using 'require' doesn't give me access to the dice object...
//Node has found the dice.js file BUT we still don't have access to dice.
//Instead, I have to assign the require to a new variable. 
//The variable 'dice' above has access to everything declared in the 'exports' in dice.js

console.log(dice);
console.log("Printing the dice name that was exported : " + dice.name);

var die = dice.game;

die.size = 10;

console.log("Rolling the dice: " + die.roll());
console.log("Rolling the dice: " + die.roll());
console.log("Rolling the dice: " + die.roll());
console.log('Total rolls is: ' + die.totalRolls);