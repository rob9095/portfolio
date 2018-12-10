import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Particles from 'react-particles-js';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Projects from './Projects';

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{
          overflow: 'auto',
          maxHeight: '100vh',
        }}>
        <Particles
          className="App"
          params={{
            "particles": {
              "number": {
                "value": 100,
                "density": {
                  "enable": true,
                  "value_area": 1500
                }
              },
              "line_linked": {
                "enable": false,
                "opacity": 0.02
              },
              "move": {
                "direction": "right",
                "speed": 0.05
              },
              "size": {
                "value": 1
              },
              "opacity": {
                "anim": {
                  "enable": true,
                  "speed": 1,
                  "opacity_min": 0.05
                }
              }
            },
            "interactivity": {
              "events": {
                "onclick": {
                  "enable": true,
                  "mode": "push"
                }
              },
              "modes": {
                "push": {
                  "particles_nb": 1
                }
              }
            },
            "retina_detect": true
          }}
        />
          <Navbar 

          />
          <Switch>
            <Route exact path="/" render={props => (
              <Homepage
                
              />
            )} />
            <Route exact path="/work" render={props => (
              <Projects
                
              />
            )} />          
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
