//Defining my own object. 
//Many different ways to do this.
//Below is one simple example - is called the 'object literal' - creates objects on demand:

var die = {
	size: 4,
	count: 1,
	roll: function(dieSize) {
		var result = Math.ceil(dieSize * Math.random());
  		return result;
	}
};

console.log(die);

//We can also print the size 'property' of the die object
console.log(die.size);

//We can also set the value of the size property too:
die.size = 10;
console.log('Updated die size: ' + die.size);
console.log(die);

//Going back to the die object, let's add a function to it - roll
console.log('Die roll is : ' + die.roll(6));