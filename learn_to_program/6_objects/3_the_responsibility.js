//Let's give our object some responsibilities, e.g. remembering the size of the die

var die = {
	size: 6,
	totalRolls: 0,
	roll: function() {
		var result = Math.ceil(this.size * Math.random());
  		this.totalRolls++;
  		return result;
	}
};

//'this' in the above is referencing the size property of the die object

die.size = 10;

console.log(die.roll());
console.log(die.roll());
console.log(die.roll());
console.log('total rolls is: ' + die.totalRolls);

console.log(die);

//When you try to access a property on an object that doesn't exist, 'undefined' will be returned.