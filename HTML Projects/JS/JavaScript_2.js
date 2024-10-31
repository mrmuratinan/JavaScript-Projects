function validateForm() {
	let x = document.forms['MyForm']['fname'].value;
	if (x == '') {
		alert('First name must be filled out');
		return false;
	}
	x = document.forms['myForm']['lname'].value;
	if (x == '') {
		alert('Last name must be filled out');
		return false;
	}
}
