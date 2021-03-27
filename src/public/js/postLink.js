const title = document.getElementById('title');
const description = document.getElementById('description');
const destination = document.getElementById('message-box');



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