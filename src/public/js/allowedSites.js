let sites;
let valid;
var destination = document.getElementById('message-box');
var siteIconEl = document.getElementById('site-icon');
var allowedSiteList = '';

function validate() {
	// Correct the link before validating
	destination.value = destination.value.replace('www.', '').replace('http://', 'https://');
	if (!destination.value.startsWith('https://')) { destination.value = `https://${destination.value}`; }
	if (destination.value.charAt(destination.value.length - 1) !== '/') { destination.value += '/'; }
	let siteName;
	let siteIcon;
	let valid = false;
	sites.forEach((site) => {
		site.domains.forEach((domain) => {
			if (destination.value.startsWith(domain)) {
				siteName = site.name;
				siteIcon = site.icon;
				valid = true;
			}
		});
	});
			
	// Style the Icon
	if (!valid) { 
		siteIconEl.src = './icons/error.svg'
		siteIconEl.style = 'filter: invert(0.4) sepia(1) saturate(7) hue-rotate(320deg);';
	} else {
		siteIconEl.src = siteIcon;
		siteIconEl.style = 'filter: invert(1);';
	}
}

window.onload = () => {
	fetch(window.location.href + 'api/v1/allowedSites')
	.then(res => res.json())
	.then(res => {
		sites = res;
		sites.forEach((site) => {
			allowedSiteList += site.name + ', '
		});
		destination.addEventListener('focusout', validate);
		destination.addEventListener('keyup', (e) => { if (e.key === 'Enter') { validate(); } })
	});
}
