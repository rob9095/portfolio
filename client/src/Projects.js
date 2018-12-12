import React, { Component } from 'react';
import posed from 'react-pose';
import {projects} from './projectsJson';

const Gallery = posed.ul({
  enter: { 
    opacity: 1,
    x: 0,
    delayChildren: 200,
    staggerChildren: 50
  },
  exit: {
    opacity: 1,
    x: 0,
    delayChildren: 200,
    staggerChildren: 50,
  },
});


const Item = posed.li({
  enter: { opacity: 1, x: 0, },
  exit: {
    opacity: 0,
    x: ({ selectedItemId, id }) =>
      id === selectedItemId ? 200 : -200
  },
});

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
      items: [...projects.sort((a,b)=>a.position - b.position)],
    }
  }

  componentDidMount () {
    this.setState({
      isVisible: true,
    })
  }
  render() {
    const { items, isVisible } = this.state;
    return(
      <section className="centered full-height" style={{overflow: !isVisible ? 'hidden' : 'auto'}}>
        <Gallery pose={isVisible ? 'enter' : 'exit'} className="projects">
          {items.slice(0,3).map(item =>
            <Item key={item.id}>
              <div className="project-item">
                <i className={`fa fa-3x ${item.icon} icon-fill gradient-${item.iconColor}`} />
                <div className={`underline gradient-${item.iconColor}`} />
                <h2>{item.name}</h2>
                <p>{item.skills.map((s,i,a) => a.length-1 === i ? s : s + ', ')}</p>
                <a className={`btn gradient-${item.iconColor}`}>View Project</a>
              </div>        
            </Item>
          )}
        </Gallery>
      </section>
    )
  }
}

export default Projects;