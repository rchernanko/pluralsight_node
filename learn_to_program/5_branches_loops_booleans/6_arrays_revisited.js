var getDieRoll = function(dieSize) {
  var result = Math.ceil(dieSize * Math.random());
  return result;
};

//All types can go into a JavaScript array
var things = [1, 2, 3, 'pizza'];

//"Length" is a "property" of an array (just like .log() is a function of the Console object)
for(var i = 0; i < things.length; i++) {
	console.log(things[i]);
}