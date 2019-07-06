window.onload = function() {

	function sendData(url = '', data = {}, method = 'POST') {

		return fetch(url, {
			method,
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
			},
			redirect: 'follow',
			referrer: 'no-referrer',
			body: JSON.stringify(data),
		})
		.then(response => response.json());
	}

	fetch('http://localhost:3000/api/list')
	.then(res => res.json())
	.then(res => {
		renderTodos(res);
	});


	let addItem = (elem) => {
		let taskItem = document.createElement("div");
		let taskBody = document.getElementById("task-body");
		let taskItemP = document.createElement("p");
		let button = document.createElement("button");
		button.innerHTML = 'Delete';
		button.className = 'btn-del';
		taskItemP.setAttribute('id', elem.id)
		let taskText = document.createTextNode(elem.title);

		taskItemP.appendChild(taskText);
		taskItem.appendChild(taskItemP);
		taskItem.appendChild(button);
		taskBody.appendChild(taskItem);

		taskItemP.onclick = function() {
			strikeText();
		}

		function strikeText() {
			if(strikedText) { 
				taskItemP.style.textDecoration = ""; 
			} else { 
				taskItemP.style.textDecoration = "line-through"; 
			} 
			strikedText = !strikedText;
		}

		button.onclick = function() {
			removeTask();
			sendData(`http://localhost:3000/api/list/${taskItemP.getAttribute('id')}`, {}, "DELETE")
			.then(data => console.log(JSON.stringify(data)))
			.catch(error => console.error(error));
		}

		function removeTask() {
			taskItem.remove();

		}
	}

	let renderTodos = (arr) => {
		arr.forEach((elem) => {
			addItem(elem);
		});
	}

	let taskCall = document.getElementById('task');
	taskCall.onclick = function() {
		addTask();
	}

	function addTask() {

		task = document.querySelector("input").value;

		if(task != "") {
			taskText = document.createTextNode(task);
			let strikedText = false;

			sendData('http://localhost:3000/api/list', {title: task})
			.then(data => addItem(data))
			.catch(error => console.error(error));
		} else {
			alert('Please write your task');
		}
		
		document.querySelector("input").value = "";

	}

}