import React, { Component } from 'react';
import Particles from 'react-particles-js';

class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  
  render() {
    return(
      <section className="hero">
        <Particles
          className="hero-gradient"
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
        <div className="hero-content-area">
          <h1>Hi, I'm Rob</h1>
          <h3>Full-stack <strong>web developer</strong> and lover of <strong>open source</strong></h3>
          <a href="/work" className="btn">My Work</a>
          <a href="/contact" className="btn clear">Contact Me</a>
        </div>
		  </section>
    )
  }
  
}

export default Homepage;