import React, { Component } from 'react';
import styles from './styles';

class MovingModule extends Component {
  constructor() {
    super()
    this.handleMouseMove = this.handleMouseMove.bind(this);
    // this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.state = {
      touchingContainer: false,
      gradientChange: {
        // background: 'linear-gradient(45deg, red, black)'
      }
    }
  }

  handleMouseMove({pageX: x, pageY: y}) {
    this.setState({
      touchingContainer: true,
      gradientChange: {
        background: `linear-gradient(${x}deg, red, black)`
      }
    })
    console.log(x, y)
  }
  handleMouseLeave(){
    this.setState({ touchingContainer: false})
  }

  render () {
    const { touchingContainer, gradientChange } = this.state;
    return (
      <div className={styles.movingContainer} style={gradientChange}
       onMouseMove={this.handleMouseMove}
       onMouseLeave={this.handleMouseLeave.bind(this)}
      >
      'Test'
      </div>
    )
  }
}

export default MovingModule;
