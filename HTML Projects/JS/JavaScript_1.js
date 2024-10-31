function TheFunction() {
	var A = document.getElementsByClassName('Click');
	A[0].innerHTML = 'It is changed';
}
var c = document.getElementById('Canvas1');
var ctx = c.getContext('2d');

ctx.moveTo(0, 0);
ctx.lineTo(300, 300);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(75, 50);
ctx.lineTo(100, 75);
ctx.lineTo(100, 25);
ctx.fill();

ctx.beginPath();
ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
ctx.moveTo(110, 75);
ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
ctx.moveTo(65, 65);
ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
ctx.moveTo(95, 65);
ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
ctx.stroke();
ctx.beginPath();
ctx.moveTo(120, 120);
ctx.bezierCurveTo(120, 150, 180, 150, 180, 120);
ctx.stroke();
// Create a Gradient
const grd = ctx.createLinearGradient(50, 150, 300, 300);
grd.addColorStop(0, 'yellow');
grd.addColorStop(0.2, 'orange');
grd.addColorStop(1, 'red');
// Draw a filled Rectangle
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 300, 100);
ctx.fillRect(0, 100, 300, 100);
ctx.fillRect(0, 200, 300, 300);
