document.addEventListener('click', (event) => {
	if (event.target.id === "form-submit") {
		event.preventDefault()
			const request = new XMLHttpRequest()
			let name = document.querySelector("#name").value
			let email = document.querySelector("#email").value
			let phone = document.querySelector("#phone").value
			let message = document.querySelector("#message").value
			request.open("POST", "/")
			request.onload = () => {
				let data = request.responseText
				console.log(typeof data)
				console.log(data)
				if (data['success']) {
					console.log('this worked')
					document.location.reload()
					document.querySelector("#contact-form").innerHTML = "Your form has been successfully submitted!"
					return false
				}
			}
			const data = new FormData()
			data.append('name', name)
			data.append('email', email)
			data.append('phone', phone)
			data.append('message', message)
			request.send(data)
			return false
	}
})

/*function configureFormSubmission() {
	let button = document.querySelector("#form-submit")
	if (button) {
		button.onclick = (event) => {
			event.preventDefault()
			const request = new XMLHttpRequest()
			let name = document.querySelector("#name").value
			let email = document.querySelector("#email").value
			let phone = document.querySelector("#phone").value
			let message = document.querySelector("#message").value
			request.open("POST", "/")
			request.onload = () => {
				let data = request.responseText
				console.log(typeof data)
				if (data['success']) {
					console.log('this worked')
					document.location.reload()
					document.querySelector("#contact-form").innerHTML = "Your form has been successfully submitted!"
					return false
				}
			}
			const data = new FormData()
			data.append('name', name)
			data.append('email', email)
			data.append('phone', phone)
			data.append('message', message)
			request.send(data)
			return false
		}
	}
}*/