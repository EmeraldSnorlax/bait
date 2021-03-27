var title = document.getElementById('title');
var description = document.getElementById('description');
var destination = document.getElementById('message-box');

function post() {
	const link = {
		content: {
			title: title.value,
			description: description.value,
			image: imageLink.value,
			color: colorPicker.value,
		},
		destination: destination.value.replace('www.', ''),
	};
	// Validate:
	if (!title.value) {
		alert('The title can\'t be empty!');
	} else if (!destination.value) {
		alert('The destination can\'t be empty!');
	} else if (!valid) {
		alert('That site isn\'t allowed!');
	} else {
		fetch(window.location.href + 'api/v1/create', {
			method: 'POST',
			body: JSON.stringify(link),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(res => res.json())
		.then(res => {
			console.log(res)
			prompt('Here is your link!', window.location.href + 'view/' + res.id)
		});
	}
}