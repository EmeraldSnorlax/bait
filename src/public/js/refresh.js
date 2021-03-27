const colorPicker = document.getElementById('color');
const imagePreview = document.getElementById('image-preview');
const imageLink = document.getElementById('image');
const embed = document.getElementById('embed');

function refresh() {
  imagePreview.src = imageLink.value;
  embed.style.borderColor = colorPicker.value;
}

refresh()