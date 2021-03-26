fetch(window.location.href + 'api/v1/allowedSites')
	.then(res => res.json())
	.then(res => {
		console.log(res)
});
