import React, { Component } from 'react';

class ReactCycle extends Component {
  constructor (props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
    console.log('---when constructed props are', props);
    this.state = {
      count: 0,
    }
  }
  onClickHandler() {
    console.log('--handing onclick')
    this.setState({
      count: this.state.count + 1
    })
  }
  componentDidMount() {
    console.log('---- componentDidMount')
  }
  componentWillReceiveProps(nextProps) {
    console.log('----componentWillReceiveProps nextprops are', nextProps);
  }
  componentWillMount() {
    console.log('---- component Will mount');
  }
  componentDidUpdate(prevProps) {
    console.log('---- state is',this.state)
    console.log('--- componentDidUpdate prevProps', prevProps);
  }
  componentWillUnMount() {
    console.log('--- componentWillUnMount');
  }
  render() {
    console.log('--- rendering')
    const { propsHandler } = this.props;
    return (
      <div>
        <button onClick={this.onClickHandler}>Click component onClick</button>
        <button onClick={propsHandler}>Click component props</button>
        'Hello'
      </div>
    )
  }
}

export default ReactCycle;
