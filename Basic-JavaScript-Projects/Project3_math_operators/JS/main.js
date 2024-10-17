function myMathFunction() {
	var mult = 23 * 56;
	mult -= 35;
	mult += 5;
	mult /= 82;
	document.getElementById('Math').innerHTML = 'The result is ' + mult;
}

// Multiple Operators Assignment
function myMathMultOpration() {
	var rslt = ((2 + 6) * 23) / 12 - 3;
	rslt--;
	document.getElementById('Math').innerHTML = 'The result is ' + rslt;
}

// modulus operator example
function modulus_operator() {
	var mod = 25 % 6;
	mod = -mod;
	mod++;
	document.getElementById('Math').innerHTML =
		'When you divide 25 by 6 the remainder is  ' + mod;
}

function myRandom(xstr, x) {
	var rnd = Math.random() * x;
	rnd = Math.floor(rnd);
	document.getElementById(xstr).innerHTML = rnd;
}
