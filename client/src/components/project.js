import React from 'react'

export default function Projects(props) {
	return (
		<div className='project-container'>
		{props.projects.map((obj) => {
			return (
				<div className='project-cell'>
					<h3><b>{obj.Name}</b></h3>
					<p><b>Frameworks/libraries/languages: </b>{obj.Technologies}</p>
					<p dangerouslySetInnerHTML={{__html: obj.Info}}></p>
					{ obj.URL &&
					<a target="_blank" href={obj.URL}>View on {obj.Platform}</a>
					}
				</div>
				)
		})}
		</div>
		)
}

