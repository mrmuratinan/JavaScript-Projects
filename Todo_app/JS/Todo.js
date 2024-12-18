document.getElementById('footer').innerHTML = formatAMPM();

function formatAMPM() {
	var d = new Date(),
		minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(),
		hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(),
		ampm = d.getHours() >= 12 ? 'pm' : 'am',
		months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	strRtn = days[d.getDay()] + ' ' + months[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear() + ' ' + hours + ':' + minutes + ampm;
	strRtn = strRtn + '&nbsp;&nbsp;&nbsp;&nbsp;Murat Inan&nbsp;&nbsp;&nbsp;ToDoApp\xa9';
	return strRtn;
}

/* this function gets the task from input*/
function get_todos() {
	/*This creates an array of task that are inputed*/
	var todos = new Array();
	/*this pulls the task that was saved in the web browser memory*/
	var todos_str = localStorage.getItem('todo');
	/*If the input is not null then JSON.parse will communitcate with the web browser to make the task a JavaScript object.*/
	if (todos_str !== null) {
		todos = JSON.parse(todos_str);
	}
	return todos;
}
/*This function adds the inputed task to the get_todos function array*/
function add() {
	/*This takes the inputed task and creates a variable of it*/
	var task = document.getElementById('task').value;
	var todos = get_todos();
	/*This adds a new task the end of the array*/
	todos.push(task);
	/* this converts the task input to a JSON string*/
	localStorage.setItem('todo', JSON.stringify(todos));
	document.getElementById('task').value = '';
	show();
	return false;
}

/*this function keeps the tasks permanetly displayed on the screen*/
function show() {
	/* this sets the task that was retrieved as a variable*/
	var todos = get_todos();
	/*This this sets up each task as an unordered list*/
	var html = '<ul>';
	/*This displays a task to the list in the order that it is inputed*/
	for (var i = 0; i < todos.length; i++) {
		/*this also displays the task as a list and creates the button with the "x"*/
		html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
	}
	html += '</ul>';
	/*This displays the task as a list*/
	document.getElementById('todos').innerHTML = html;
	/* if item removed */
	var button = document.getElementsByClassName('remove');
	for (var i = 0; i < buttons.length; i++) {
		button[i].addEventListener('click', remove);
	}
}
/*This displays the inputed task when the 'Add Item' button is clicked*/
document.getElementById('add').addEventListener('click', add);

/*this will keep the inputs displayed permantaly on the screen*/
show();

function remove() {
	var id = this.getAttribute('id');
	var todos = get_todos();
	todos.splice(id, 1);
	localStorage.setItem('todo', JSON.stringify(todos));
	show();
	return false;
}
