import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  
  render() {
    return(
      <section className="hero hero-content full-height">
        <div className="hero-content-area">
          <h1>Hi, I'm Rob</h1>
          <h3>Full-stack <strong>web developer</strong> and lover of <strong>open source</strong></h3>
          <Link to="/work" className="btn">
            My Work
          </Link>
          <a href="/contact" className="btn clear">Contact Me</a>
        </div>
		  </section>
    )
  }
  
}

export default Homepage;