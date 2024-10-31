function fLoop() {
	let vDigit = '';
	let vX = 1;
	while (vX < 11) {
		vDigit += '<br>' + vX;
		vX++;
	}
	document.getElementById('Loop').innerHTML = vDigit;
}
var Instruments = [
	'Guitar',
	'Drums',
	'Piano',
	'Bass',
	'Violin',
	'Trumpet',
	'Flute',
];
var Content = '';
var Y;
function for_Loop() {
	for (Y = 0; Y < Instruments.length; Y++) {
		Content += Instruments[Y] + '<br>';
	}

	document.getElementById('List_of_Instruments').innerHTML = Content;
}
var cars = [];
cars[0] = 'Saab';
cars[1] = 'Volvo';
cars[2] = 'BMW';
var cars_2 = new Array('Saab2', 'Volvo2', 'BMW2');
var numberArr = Array.of(10, 20, 30, 40, 50);
let str = Array.from('Hello'); // [ 'H', 'e', 'l', 'l', 'o' ]
console.log(cars);
console.log(cars_2);
console.log(numberArr);
console.log(str);
const cMusic = { type: 'guitar', brand: 'Fender', color: 'black' };

cMusic.price = '$900';

console.log(
	'The cost of ' +
		cMusic.type +
		' was ' +
		cMusic.price +
		' the color was: ' +
		cMusic.color
);
let X = 82;
console.log(X);
{
	let X = 33;
	console.log(X);
}
console.log(X);
console.log('**************');
var Y = 82;
console.log(Y);
{
	var Y = 33;
	console.log(Y);
}
console.log(Y);
