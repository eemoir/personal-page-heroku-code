document.addEventListener('click', (event) => {
	if (event.target.id === "form-submit") {
		event.preventDefault()
			let name = document.querySelector("#name").value
			let email = document.querySelector("#email").value
			let phone = document.querySelector("#phone").value
			let message = document.querySelector("#message").value
			let data = {
				"name": name,
				"email": email,
				"phone": phone,
				"message": message
			}
			fetch('/contact', {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json'
				}
			}).then(res => res.json())
			.then(res => {
				if (res['success']) {
					document.querySelector("#error").innerHTML = ""
					document.querySelector("#contact-form").innerHTML = "Your form has been successfully submitted!"
					return false
				} else {
					document.querySelector("#error").innerHTML = "There was an error submitting your form."
				}
			})
			/*const request = new XMLHttpRequest()
			let name = document.querySelector("#name").value
			let email = document.querySelector("#email").value
			let phone = document.querySelector("#phone").value
			let message = document.querySelector("#message").value
			request.open("POST", "/contact")
			request.setRequestHeader("Accept", "application/json")
			request.onload = () => {
				let data = request.responseText
				console.log(typeof data)
				console.log(JSON.parse(data))
				if (JSON.parse(data)['success']) {
					console.log('this worked')
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
			return false*/
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