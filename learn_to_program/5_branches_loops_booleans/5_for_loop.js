var getDieRoll = function(dieSize) {
  var result = Math.ceil(dieSize * Math.random());
  return result;
};

var roll = getDieRoll(6);

//Few different ways to use for loops (just like java / php). Here's one:
for(var i = 0; i < roll; i++) {
	console.log("*");
};