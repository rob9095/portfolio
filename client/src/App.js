import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import Homepage from './Homepage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Navbar 

        />
        <Homepage

        />
      </div>
      </Router>
    );
  }
}

export default App;
