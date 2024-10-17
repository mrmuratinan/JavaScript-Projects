/* ------------------------------------ 
   Basic JavaScript Projects Assignment 
   ------------------------------------ */

window.alert('window alert'); // Displaying an alert */
document.write('hello world <br><br>'); /* Displaying a text on screen */

var Sent1 = 'This is the beginning of the string',
	Sent2 = 'and this is the end of the string'; // Defining two variables and assigning values to them

document.write(Sent1 + ' ' + Sent2 + '<br><br>'); // Displaying variables by concatenating them

// an javascript expression
document.write('The result is : ' + 12 * 34);

/* ------------------------------------ 
   END Basic JavaScript Projects Assignment 
   ------------------------------------ */

document.write('<br><br>');

var A = 'variable A for document.write';

/* Writing some text examples to display*/
document.write(A);
document.write(`<br>I want to say \" hello\".<br>`);
document.write(`This is a ` + `concatenation example<br>`);
/* set variable examples */
var A = 12,
	B = 25,
	C = 42;
document.write('B= ' + B);
document.write('<br><br>');
/* function definition example */
function myFirstFunction() {
	var str = 'This is the button text';
	document.getElementById('Button_Text').innerHTML = str;
}
