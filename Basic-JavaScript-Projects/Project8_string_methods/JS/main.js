function fConcat() {
	let v1 = 'Hello';
	let v2 = 'World';
	let result = v1.concat(' ', v2);
	document.getElementById('Concat').innerHTML = result;
}
function fSlice() {
	let v1 = 'The slice method extracts a section of a string';
	let result = v1.slice(28, 35); // section
	document.getElementById('Slice').innerHTML = result.toUpperCase;
}
function fSearch() {
	let v1 = 'Successfully write and execute the search method';
	let result = v1.search('write');
	document.getElementById('Search').innerHTML = result;
}
function fToString() {
	let v1 = 123.123456789;
	v1 = Math.trunc(v1);
	document.getElementById('ToString').innerHTML = v1.toString();
}
function fToPrecision() {
	let v1 = 123.126456789;
	let v2 = 132;
	document.getElementById('ToPrecision').innerHTML =
		v1.toPrecision(7) + '<br>' + v1.toFixed(2) + '<br>' + v2.valueOf();
}
//****************
// OTHER METHODS
//****************
function fOtherMethods() {
	let Text0 = 'Please visit Microsoft!';
	let Text1 = Text0.replace(/MICROSOFT/i, 'W3Schools'); // To replace case insensitive, use a regular expression with an /i flag (insensitive):
	let Text2 = Text0.replace(/Microsoft/g, 'W3Schools'); //To replace all matches, use a regular expression with a /g flag (global match)
	let Text3 = Text0.replaceAll('Cats', 'Dogs');
	document.getElementById('demo').innerHTML = newText;
}
