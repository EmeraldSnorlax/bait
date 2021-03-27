var colorPicker = document.getElementById('color');
var imagePreview = document.getElementById('image-preview');
var imageLink = document.getElementById('image');
var embed = document.getElementById('embed');

function refresh() {
  imagePreview.src = imageLink.value;
  embed.style.borderColor = colorPicker.value;
}

colorPicker.oninput = () => {
  embed.style.borderColor = colorPicker.value;
}

refresh();