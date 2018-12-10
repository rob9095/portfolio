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
          {items.map(item =>
            <Item key={item.id}>
              {/* <div className="thumbnail">
                <img alt="project screenshot" src={item.image_url} />
              </div>
              <div className="info">
                <h2>{item.name}</h2>
                <div className="tech-used">
                </div>
                {item.description}
              </div> */}
              <div className="project-item">
                <h2>{item.name}</h2>
                <div>
                  <i className={`fa fa-3x ${item.icon} icon-gradient-${item.iconColor}`} />
                </div>
              </div>        
            </Item>
          )}
        </Gallery>
      </section>
    )
  }
}

export default Projects;