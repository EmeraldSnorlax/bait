function gotoEmbed() {
	document.getElementById('landing').classList = 'hidden';
	document.getElementById('landing').setAttribute('aria-hidden', 'true');

	document.getElementById('messages').classList.remove('hidden');
	document.getElementById('messages').setAttribute('aria-hidden', 'false');
}
