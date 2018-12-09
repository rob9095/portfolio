import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return(
      <header>
        <h2><a href="/">robt</a></h2>
        <nav>
          <li><a href="/about">About</a></li>
          <li><a href="/work">Work</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </nav>
		  </header>
    )
  }
}

export default Navbar;