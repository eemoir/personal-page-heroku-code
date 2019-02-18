import React from 'react'
import projectInfo from './data/constants'
import Projects from './project'
import FadeIn from 'react-fade-in'
import Copyright from './copyright'


export default function Portfolio(props) {
	return (
		<FadeIn delay={400}>
		<div className='portfolio-container' aria-labelledby="PORTFOLIO">
			<h1 className='project-category'><b>Fullstack Web Development Projects</b></h1>
				<Projects projects={projectInfo.Fullstack}/>
			<h1 className='project-category'><b>React Native Projects</b></h1>
				<Projects projects={projectInfo.ReactNative}/>
			<h1 className='project-category'><b>Front End/JavaScript Projects</b></h1>
				<Projects projects={projectInfo.FrontEnd}/>
			{/*<h1 className='project-category'><b>Back End/API Projects</b></h1>
				<Projects projects={projectInfo.API}/>*/}
		</div>
		</FadeIn>
		)
}