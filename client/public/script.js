document.addEventListener('DOMContentLoaded', () => {
	document.querySelector("#form-submit").onsubmit = (event) => {
		event.preventDefault()
		const xhr = new XMLHttpRequest()
		let name = document.querySelector("#name").value
		let email = document.querySelector("#email").value
		let phone = document.querySelector("#phone").value
		let message = document.querySelector("#message").value
		request.open("POST", "/", true)
		const data = new FormData()
		data.append('name', name)
		data.append('email', email)
		data.append('phone', phone)
		data.append('message', message)
		request.send(data)
	}

})