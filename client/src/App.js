import React, { Component } from 'react';
import Particles from 'react-particles-js';

class App extends Component {
  render() {
    return (
      <div className="App">
		<header>
			<h2><a href="#">robt</a></h2>
			<nav>
			  <li><a href="#">About</a></li>
			  <li><a href="#">Work</a></li>
			  <li><a href="#">Blog</a></li>
			  <li><a href="#">Contact</a></li>
			</nav>
		  </header>
		  <section className="hero">
			<Particles
				className="hero-gradient"
				params={{
					"particles": {
						"number": {
							"value": 60,
							"density": {
								"enable": true,
								"value_area": 1500
							}
						},
						"line_linked": {
							"enable": true,
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
			  <a href="#" className="btn">My Work</a>
			  <a href="#" className="btn clear">Contact Me</a>
			</div>
		  </section>
      </div>
    );
  }
}

export default App;
