// your code here
const nameInput = document.getElementById('name');
const yearInput = document.getElementById('year');
const submitBtn = document.getElementById('button');
const url = document.getElementById('url');

submitBtn.addEventListener('click', () => {
	const name = nameInput.value;
	const year = yearInput.value;
	if(name && year) {
		url.textContent = `https://localhost:8080/?name=${name}&year=${year}`;
	}
	else if(name) {
		url.textContent = `https://localhost:8080/?name=${name}`;
	}
	else if(year) {
		url.textContent = `https://localhost:8080/?year=${year}`
	}
	else {
		url.textContent = `https://localhost:8080/`;
	}
	nameInput.value = '';
	yearInput.value = '';
})