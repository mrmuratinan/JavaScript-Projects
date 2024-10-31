var glbVar = 20;
var glbAllowed;
function Add_1() {
	var Y = 30;
	Result = glbVar + Y;
	console.log('Y defined:' + Result);
}
function Add_2() {
	Result = glbVar + Y;
	console.log('Y NOT defined:' + Result);
}
function getDate() {
	if (new Date().getHours < 12) {
		document.getElementById('Greetings').innerHTML = 'Good morning';
	} else {
		document.getElementById('Greetings').innerHTML = 'Good afternoon';
	}
}
function canVote() {
	glbAllowed = '';
	Age = document.getElementById('Age').value;
	if (Age < 1) {
		document.getElementById('VotingAllowance').innerHTML =
			'The age must be grater than zero';
		//window.alert('Age must be grater than zero');
	} else {
		if (Age >= 18) {
			glbAllowed = 'You can vote';
		} else {
			glbAllowed = "You can't vote";
		}
		document.getElementById('VotingAllowance').innerHTML = glbAllowed;
	}
}
function canVote_2() {
	glbAllowed = '';
	Age = document.getElementById('Age_2').value;
	if (Age < 1) {
		document.getElementById('VotingAllowance_2').innerHTML =
			'The age must be grater than zero';
		//window.alert('Age must be grater than zero');
	} else if (Age >= 18) {
		glbAllowed = 'You can vote';
	} else {
		glbAllowed = "You can't vote";
	}
	document.getElementById('VotingAllowance_2').innerHTML = glbAllowed;
}
