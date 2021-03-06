var title = document.getElementById('title');
var description = document.getElementById('description');
var destination = document.getElementById('message-box');

function post() {
	// Validate:
	let allowed = false;
	sites.forEach((site) => {
		site.domains.forEach((domain) => {
			if (destination.value.startsWith(domain)) { allowed = true }
		})
	})
	if (!title.value) {
		alert('The title can\'t be empty!');
	} else if (!destination.value) {
		alert('The destination can\'t be empty!');
	} else if (!allowed) {
		alert('That site isn\'t allowed!');
	} else if (decodeURI(destination.value).toLowerCase().includes('redirect') || destination.value.includes('%')) {
		alert('You aren\'t allowed to use redirect links!');
	} else if (image.value && !image.value.startsWith('https://i.imgur.com/')) {
		alert('You are only allowed to use https://i.imgur.com/ images!');
	} else {
		const link = {
			content: {
				title: title.value,
				description: description.value,
				image: imageLink.value,
				color: colorPicker.value,
			},
			destination: destination.value
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
}