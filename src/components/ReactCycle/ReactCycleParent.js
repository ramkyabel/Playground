import React, { Component } from 'react';
import ReactCycle from './ReactCycle';

class ReactCycleParent extends Component {
  constructor() {
    super();
    this.propsHandler = this.propsHandler.bind(this);
    this.state = {
      resultProp: 0
    }
  }
  propsHandler() {
    this.setState({
      resultProp: Math.random() * 100
    })
  }
  render() {
    const { resultProp } = this.state;
    return (
      <ReactCycle propsHandler={this.propsHandler} resultProp={resultProp} />
    )
  }
}


export default ReactCycleParent;
