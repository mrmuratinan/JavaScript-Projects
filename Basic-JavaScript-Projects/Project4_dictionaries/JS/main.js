// defining dictionary function
function myDictionary() {
	var person = {
		firstName: 'John',
		lastName: 'Doe',
		age: 50,
		status: 'marketing contact',
		hobby: 'reading book',
	};
	delete person.status; //delete an element of dictionary
	document.getElementById('dictionary').innerHTML = person.status;
	document.write('10' + 5);
}
