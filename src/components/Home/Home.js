import React, { Component } from 'react';
import runningManGif from './onlyguy.gif';
import styles from './styles'

import MovingModule from '../MovingModule';

class Home extends Component {
  state = {
    show: false,
  }

  onClickHandler = () => {
    const { show } = this.state;

    this.setState({ show: !show });
  }
  render () {
    const { show } = this.state;

    return (
      <div>
        <span className={styles.title}>This is the Home Module</span>
        <br />
        <img src={runningManGif} className={styles.runningMan}/>
    { show && <MovingModule /> }
        <button className={styles.buttonClick} onClick={this.onClickHandler}>CLICK ME</button>
      </div>
    );
  }
};

export default Home;
