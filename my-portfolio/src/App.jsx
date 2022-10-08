import React from 'react';
import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";
import HomeComponent from './components/HomePage';
import AboutComponent from './components/AboutPage';
import profilepic from './images/profile pic.jpg';

function App() {
  return (
    <>
    <div className='vertical-menu'>
      <div className='about-card'>
        <br></br>
        <div className='about-box'>
          <img className='thumbnail' src={profilepic} alt='profile pic of Pratik Patel' />
        </div>
        <div className='intro-box'>
          <h5> Pratik Patel</h5>
          <p>
            A passionate software developer and a computer science graduate with keen interest in coding. I enjoy designing systems and writing software to solve problems. Some of my areas of interest are: Web Applications, Networking and Computer systems. 
          </p>
          <NavLink to='/about'>Learn More</NavLink>
        </div>
      </div>
    </div>
    <div className='wrapper'>

    </div>
    <Routes>
      <Route exact  path='/' element={<HomeComponent/>} />
      <Route path='/about' element={<AboutComponent/>} />
    </Routes>
    </>
    
  );
}

export default App;
