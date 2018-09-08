/*eslint-disable no-unused-vars */

import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import * as ACTIONS from './actions'
import * as SELECTORS from './selectors'
import styles from './styles.css'

class Counter extends Component {
  onPress() {
    window.location.href = 'https://google.com';
  }
    render () {
      const title = "This is my counter module.";
      const { value, onIncrementAsync, onIncrement, onDecrement } = this.props;
      const buttons = [
        {text: 'Increment Async', action: onIncrementAsync},
        {text: 'Increment', action: onIncrement},
        {text: 'Decrement', action: onDecrement}
      ]
      return (
        <div className={styles.counterModule}>
          <p className={styles.title}>Juan es un loco</p>
          <div className={styles.buttonGroup}>
          {
            buttons.map((button) =>
            (<span key={button.text} className={styles.button} onClick={button.action}> {button.text}</span>))
          }
          <button onClick={this.onPress}></button>
          </div>
          <p className={styles.counterValue}>
            {value} times
          </p>
        </div>
    );
  }

}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    value: SELECTORS.valueSelector(state)
  }
}

export default connect (mapStateToProps, ACTIONS) (Counter);
