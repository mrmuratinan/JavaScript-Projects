function validateForm() {
	let x = document.forms['myForm']['phonenumber'].value;
	if (x == '') {
		alert('Phone number must be filled out');
		return false;
	}

	const phoneRegex = /^(\+?\d{1,3})?[-.\s]?(\(?\d{3}\)?)[-.\s]?(\d{3})[-.\s]?(\d{4})$/;
	if (phoneRegex.test(x)) {
		return true;
	} else {
		alert('Phone number is not valid');
		return false;
	}
}
