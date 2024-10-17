// changing the element innerHTML by clicking the button
function myFirstFunction() {
	var strP = 'This is the changed text after clicking';
	var str = 'This is the button text';
	document.getElementById('Button_Text').innerHTML = str;
	document.getElementById('paragraph').innerHTML = strP;
}

// Change the element innerHTML by concatenating the strings
function myConcatenate() {
	var str1 = 'I am learning';
	str1 += ' a lot from this book!';
	document.getElementById('Concatenate').innerHTML = str1;
}
