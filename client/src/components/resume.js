import React from 'react'
import FadeIn from 'react-fade-in'
import Copyright from './copyright'

export default function Resume(props) {
	return (
		<FadeIn delay={400}>
		<div>
		<div aria-labelledby="RESUME">
		<h1>Software Development</h1>
		<h2>Lead Software Engineer and Co-Owner, Monotreme Studios, LLC, Jan. 2019 - present</h2>
		<ul>
		<li>•	Collaborating with a veterinarian/entrepreneur to develop point-of-care veterinary reference apps for mobile devices that are currently in development.</li>
		<ul>
			<li>•	Company specializes in applications designed to streamline calculations and reference lookup in the exam room.</li>
		</ul>
		</ul>
		<h2>Expertise</h2>
		<ul>
		<li>Languages: JavaScript, Python, and PHP.</li>
		<li>Proficient in building progressive, accessible, high-performing web and mobile applications with responsive design.</li>
		<li>•	Proficient in the following technologies: Node, Django, Flask, Laravel, React/React Native, Redux, Expo, Express, SQL, Postgres, MongoDB, Jest, Git.</li>
		</ul>
		<h1>Other Work Experience</h1>
		<h2>Chemistry Teacher, NYC Dept. of Education, New York, NY, June 2016 - Jan. 2018</h2>
		<ul>
		<li>Working collaboratively with a grade team, developed curriculum and taught four sections of 11th grade chemistry at South Bronx Preparatory.</li>
		<li>Increased number of students taking the Regents Exam from one to seven, with six passing, and received a “Highly Effective” rating from the Board of Education.
</li>
		</ul>
		<h2>Union Organizer, UAW (Graduate Workers of Columbia), New York, NY, Jan. 2016 - June 2016</h2>
		<ul>
		<li>Conducted surveys on benefits usage and professional development for graduate student TAs and RAs; publicized union events. </li>
		</ul>
		<h2>Teaching Fellow, Columbia University, New York, NY, Aug. 2013 - Dec. 2015
</h2>
		<ul>
		<li>Developed curriculum for German 101 and 102 courses, including quizzes, activities and discussion topics.</li>
		<li>Independently taught three beginning German courses, receiving outstanding evaluations from students and from supervisor.</li>
		</ul>
		<h2>AmeriCorps VISTA Volunteer at High Plains Library District, Greeley, CO, Aug. 2012 - Aug. 2013</h2>
		<ul>
		<li>Developed curriculum for and taught adult citizenship courses.</li>
		<li>Successfully secured capital grants of $20,000 from the Boettcher Foundation and $25,000 from the El Pomar Foundation to fund the building of a new library in Evans, CO.</li>
		</ul>
		<h2>Fulbright English Teaching Assistant, Fulbright Commission, Germany, Sep. 2011 - June 2012</h2>
		<ul>
		<li>Developed curriculum for public secondary school English classes in Norderstedt, Germany, using a focus on young adult novels.</li>
		<li>Co-taught English classes in grades 6, 10 and 13 alongside tenured faculty.</li>
		</ul>
		<h1>Education</h1>
		<h2>Columbia University in the City of New York</h2>
		<ul>
		<li className="plain-list">Master of Arts in Germanic Languages and Literatures, May 2015</li>
		</ul>
		<h2>Oberlin College</h2>
		<ul>
		<li className="plain-list">Bachelor of Arts in German Studies with a minor in History, May 2011</li>
		<li className="plain-list">Honors:</li>
		<ul>
		<li>John F. Oberlin Scholar (renewed annually).</li>
		<li>Federation of German-American Clubs Exchange Scholar (competitive Scholarship to fund year abroad in Germany).</li>
		<li>National Merit Scholar.</li>
		</ul>
		</ul>
		<h1>Other Skills</h1>
		<ul>
		<li>Fluent in German (written and conversational), translation proficiency in Spanish and Dutch.</li>
		<li>Award-winning classical cellist and pianist with extensive knowledge of music theory.</li>
		</ul>
		</div>
		<br />
        <br />
        <Copyright />
		</div>
		</FadeIn>
		)
}