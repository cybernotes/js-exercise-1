var text = 'The sum is ';
var myClass = "You are all great!";
function addIt(numA, numB){
	var total = numA + numB;
	console.log(text + total);
}
function multiply(numA, numB){
	var total = numA*numB;
	return total;
	console.log('this is never goig to happen');
}
console.log(multiply(29, 4));
// addIt(8, 8);
// addIt(10,10);
// console.log(text);

var kurt = {
	arms: 2,
	bigNose: true,
	hairColor: 'black',
	slogan: function(what){
		console.log(what + ' is awesome')
	}
}
kurt.slogan('You all ');
kurt.hairColor ='grey';
console.log(kurt.hairColor);
console.log(myClass);