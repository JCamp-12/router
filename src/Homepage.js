import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {
  render() {
    return (
      <div className='about-container'>
        <div classNAme='container'>
          <h1 className='about-main-title text-center'>
            Homepage
          </h1>
        </div>


          <Link to="/about">
            <button className='btn btn-primary'>About!</button>
          </Link>
      </div>
      )
  }
}

export default Homepage;

