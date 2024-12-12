function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

const form = document.querySelector(`#entryform`);


form.addEventListener(`submit`, handleSubmit);

function handleSubmit(event) {
	event.preventDefault();
	const form = event.target;
	const formData = new FormData(form); // <-- pass in the form element
    for (let keyValue of formData.entries()) {
		console.log(keyValue);
	}
}