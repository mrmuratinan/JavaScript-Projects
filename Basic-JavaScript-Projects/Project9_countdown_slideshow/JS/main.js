function fCountdown() {
	let seconds = document.getElementById('seconds').value;
	function fTick() {
		seconds--;
		timer.innerHTML = seconds;
		let time = setTimeout(fTick, 1000);
		if (seconds == -1) {
			alert("Time's up!");
			clearTimeout(time);
			timer.innerHTML = '';
		}
	}
	fTick();
}
