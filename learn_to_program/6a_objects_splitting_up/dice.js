var die = {
	size: 6,
	totalRolls: 0,
	roll: function() {
		var result = Math.ceil(this.size * Math.random());
  		this.totalRolls++;
  		return result;
	}
};

exports.game = die;
exports.name = "My dice exports";
//I have to tell node which properties, functions I am prepared to make public to other files to be able to use...
//I can use the 'exports' keyword for this.