import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className='about-container'>
        <div classNAme='container'>
        <h1 className='about-main-title text-center'>Welcome to About</h1>
        </div>


          <Link to="/">
            <button className='btn btn-primary'>Home!</button>
          </Link>
      </div>
      )
  }
}

export default About;