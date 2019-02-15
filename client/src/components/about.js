import React from 'react'
import FadeIn from 'react-fade-in'
import portrait from '../images/about-pic.jpg'

export default function About(props) {
	return (
		<FadeIn delay={400}>
			<div aria-labelledby="ABOUT">
			<p><img id="portrait" src={portrait} align="left" />Welcome! My name is Erin, and I'm a fullstack web and mobile application developer. 
			Although I've worked on both front and back end projects, my focus is 
		on front-end JavaScript, as well as mobile application development with React Native 
		and Redux. I'm fluent in JavaScript, Python, PHP, and HTML, conversant in Ruby 
		and C, and have worked with the following libraries and frameworks, among others: 
		Node, Laravel, Flask, Django, Express, MySQL, MongoDB, React/React Native, Redux, CSS/Sass, Bootstrap, jQuery, and Jest.</p>

		<p>One of my favorite things about programming is the way it lets me combine skill, creativity and problem-solving 
			to build helpful tools that other people can use. When my partner, Dr. Andy Weisenfeld, 
			had an idea for an application that could make his job as a veterinarian easier by abstracting away some tedious 
			and cumbersome calculations, I was more than happy to help out. Together we founded <a target="_blank" href="https://monotremestudios.com">Montreme Studios, 
		LLC</a>, which currently has two mobile applications for veterinarians in development and another in the brainstorming stages. On the web development side, the project I've built that I'm most excited about is a meditation app called 
		 <a href="https://dhammahelper.com" target="_blank">Dhamma Helper</a>. It uses a Laravel backend and several JavaScript libraries on the frontend
		to deliver a meditation app with text and audio diaries, account metrics, and social sharing, among other features. For more technical information about it, 
		please see the project's <a target="_blank" href="#">README page on GitHub</a>. I'm currently developing this project as a React Native mobile application, as well.</p>

		<p>One of my other favorite things about programming is the sheer number and quality of 
		open-source resources available, which have been particularly helpful for a
		self-taught programmer like me. Some of my favorite sources of coding knowledge are 
		Harvard CS50's
		series on <a target="_blank" href="https://www.edx.org">www.edx.org</a>, which covers 
		everything from the 
		fundamentals of Computer Science to web and app development and even game development.
		UPenn's
		Introduction to Web Development, also on <a target="_blank" href="https://www.edx.org">www.edx.org</a>, 
		is another course from which I learned a lot. I've also worked my way through the 
		curriculum at <a target="_blank" href="https://www.freecodecamp.org">www.freecodecamp.org</a>, and 
		there are few things I enjoy more than keeping my coding chops fresh with the puzzles at <a target="_blank" href="https://www.codewars.com">www.codewars.com</a></p>

		<p>In my previous life, I was a chemistry teacher in the New York City public schools 
		and earned a MA in German Literature from Columbia University (go figure). In my free time, 
		I enjoy computer games, especially 4X games, and hanging out with 
		my human and feline friends. I'm also a blue belt in jiu jitsu 
		and maintain a daily meditation practice.</p>

		<p>While you're here, please check out my projects and/or drop me a line through my contact tab. 
		Otherwise, you can find me on LinkedIn <a href="https://www.linkedin.com/in/erin-moir-834413a5/" target="_blank">here</a> and on GitHub <a href="https://github.com/eemoir" target="_blank">here</a>.
		</p>
		</div>
		</FadeIn>
		)
}