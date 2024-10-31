function rideFunction() {
	var Height, canRide;
	Height = document.getElementById('Height').value;
	canRide = Height < 52 ? 'You are too short' : 'You are tall enough';
	document.getElementById('ride').innerHTML = canRide + ' to ride.';
}
function Vehicle(Make, Model, Year, Color) {
	this.VehicleMake = Make;
	this.VehicleModel = Model;
	this.VehicleYear = Year;
	this.VehicleColor = Color;
}
var Jack = new Vehicle('Dodge', 'Viper', 2020, 'Red');
var Emily = new Vehicle('Jeep', 'Hawk', 2019, 'Black');
var Erik = new Vehicle('Ford', 'Pinto', 1971, 'Mustard');
function myFunction() {
	document.getElementById('KeywordsAndConstructors').innerHTML =
		'Erik drives a ' +
		Erik.VehicleColor +
		' colored ' +
		Erik.VehicleModel +
		' manufactured in ' +
		Erik.VehicleYear;
}
function count_Function() {
	document.getElementById('Nested_Function').innerHTML =
		'The result is ' + Count();
	function Count() {
		var starting_Point = 9;
		function plus_One() {
			starting_Point += 1;
		}
		plus_One();
		return starting_Point;
	}
}
