import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import './App.css';
import About from './components/about'
import Portfolio from './components/portfolio'
import Resume from './components/resume'
import Copyright from './components/copyright'
import Contact from './components/contact'
import leftCat from './images/cat(left).jpg'
import rightCat from './images/cat(right).jpg'

const sections = {
      'ABOUT': '/',
      'PORTFOLIO': '/portfolio',
      'RESUME': '/resume', 
      'CONTACT': '/contact'
    }

export default class App extends React.Component {
  
  render() {
    return (
      <HashRouter>
        <div>
          <header>
            <div className="container-fluid">
              <img className="col-xs-3 bannerimage" alt="" id="leftcat" src={leftCat}/>
              <div className="col-xs-6 bannertext">
              <h1 id="title">E R I N &ensp; M O I R</h1>
              <h3 id="subtitle"><i>Web Developer</i></h3>
              <ul id="navbar" role="tablist" aria-label="Site Navigation">
                {Object.keys(sections).map((item, index) => (<li className="plain-list" key={index}><NavLink 
                    className="navbar-item"
                    role="tab"
                    id={item}
                    exact to={sections[item]}
                    >{item}</NavLink></li>)
                )}
              </ul>
            </div>
          <img className="col-xs-3 bannerimage" alt="" id="rightcat" src={rightCat}/>
        </div>
      </header> 
      <main>
          <div className='contentContainer'>
            <Route exact path='/' component={About}/>
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/resume' component={Resume} />
            <Route path='/contact' component={Contact} />
          </div>
          </main>
          <br />
        <br />
        <Copyright />
        </div>
      </HashRouter>
    );
  }
}