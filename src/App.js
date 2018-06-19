import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Homepage from './Homepage';
import About from './About';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1 color='white'>Header</h1>
            {/* <Footer /> */}
          </header>

          <Route path='/' exact component={Homepage} />
          <Route path='/about' component={About} />

          {/* <Footer /> */}
        </div>
      </div>
    );
  }
}

export default App;
