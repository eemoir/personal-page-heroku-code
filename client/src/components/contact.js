import React from 'react'
import FadeIn from 'react-fade-in'

const GoogleForm = "<iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLScOnzgKoqpq0uvErW7EuYMT-IzA10TAhNqspKjGV1tY1qFLNw/viewform?embedded=true\" width=\"640\" height=\"893\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading...</iframe>"
export default function Contact(props) {
	return (
		<FadeIn delay={400}>
		<form aria-labelledby="CONTACT" id="contact-form" method="POST">
			<div className='form-row'>
				<label htmlFor="name" className='form-label'>Name:</label><input id="name" name="name" className='input' type='text' autoComplete="on" required/>
			</div>
			<div className='form-row'>
				<label htmlFor="phone" className='form-label'>Phone:</label><input id="phone" name="phone" className='input' type='tel' autoComplete="on"/>
			</div>
			<div className='form-row'>
				<label htmlFor="email" className='form-label'>Email:</label><input id="email" name="email" className='input' type='email' autoComplete="on" required/>
			</div>
			<div className='form-row'>
				<label htmlFor="message" className='form-label'>Message:</label><textarea id="message" name="message" className='input' rows={4} cols={50} required/>
			</div>
			<div className='form-row'>
			<div className="button-div"></div>
			<div className='button-div'>
			<button type="button" id="form-submit">Submit</button>
			</div>
			</div>
			<p id="error"></p>
		</form>
		</FadeIn>
		)
}