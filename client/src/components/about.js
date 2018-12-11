import React from 'react'
import FadeIn from 'react-fade-in'
import portrait from '../images/about-pic.jpg'

export default function About(props) {
	return (
		<FadeIn delay={400}>
			<div aria-labelledby="ABOUT">
			<p><img id="portrait" src={portrait} align="left" />Welcome! My name is Erin, and I'm a web and mobile app developer. 
		I've worked on both front and back end web development projects, with a focus 
		on front-end JavaScript in a Node or Django context, as well as mobile application 
		development with React Native 
		and Redux. I'm fluent in JavaScript ES6, Python, and HTML, conversant in Ruby 
		and C, and have worked with the following libraries and frameworks, among others: 
		Node, 
		Django, Flask, Express, SQL, MongoDB, React/React Native, Redux, CSS/Sass, 
		jQuery, Ajax, and Jest.</p>

		<p>One of my favorite things about programming is the sheer number and quality of 
		open-source resources available, which have been particularly helpful for a
		self-taught programmer like me. Some of my favorite sources of coding knowledge are 
		Harvard CS50's
		series on <a target="_blank" href="www.edx.org">www.edx.org</a>, which covers 
		everything from the 
		fundamentals of Computer Science to web and app development and even game development.
		UPenn's
		Introduction to Web Development, also on <a target="_blank" href="www.edx.org">www.edx.org</a>, 
		is another course from which I learned a lot. I've also worked my way through the 
		curriculum at <a target="_blank" href="www.freecodecamp.org">www.freecodecamp.org</a>, and 
		there are few things I enjoy more than keeping my coding chops fresh with Kata 
		at <a target="_blank" href="www.codewars.com">www.codewars.com</a></p>

		<p>In my previous life, I was a chemistry teacher in the New York City public schools 
		and earned a MA in German Literature from Columbia University (go figure). In my free time, 
		I enjoy computer games, especially 4X games, and hanging out with 
		my cat friends. I'm also a blue belt in jiu jitsu 
		and maintain a daily meditation practice. 
		While you're here, please check out my projects and/or drop me a line through my contact tab. 
		Otherwise, you can find me on LinkedIn here, on CodeWars here, and on GitHub here.
		</p>
		</div>
		</FadeIn>
		)
}