import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Homepage from './Homepage';
import About from './About';
import Header from './header';
import './App.css';
import Navbar from './navigation';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Header />
          <Navbar />
      
          <Route path='/' exact component={Homepage} />
          <Route path='/about' component={About} />

          {/* <Footer /> */}
        </div>
      </div>
    );
  }
}

export default App;
