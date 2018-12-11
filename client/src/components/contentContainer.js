import React from 'react'
import About from './about'
import Portfolio from './portfolio'
import Resume from './resume'
import Contact from './contact'
import FadeIn from 'react-fade-in'

export default function contentContainer(props) {
	return (
		<div className='contentContainer'>
			{props.currentPage === 'ABOUT' && <FadeIn delay={500}><About /></FadeIn>}
			{props.currentPage === 'PORTFOLIO' && <FadeIn delay={500}><Portfolio /></FadeIn>}
			{props.currentPage === 'RESUME' && <FadeIn delay={500}><Resume /></FadeIn>}
			{props.currentPage === 'CONTACT' && <FadeIn delay={500}><Contact /></FadeIn>}
		</div>
		)
}