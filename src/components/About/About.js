import React from 'react';
import styles from './styles.css'
import RotatingImage from '../RotatingImage';
import { Route, Switch } from 'react-router'

const About = (props) => {
  const { name } = props;
  return (
    <div className={styles.aboutModule}>
      <span className={styles.titleSpan}>
        <h2> Hello guys I'm {name} this is my playground, where I play around
            with different web technologies. This project is currently using
            NodeJS, React, Redux, Saga, React-Persist, React-Router, Webpack, CSS Modules, and others.
         </h2>
      </span>
      <RotatingImage />
    </div>
  )
}

export default About;
