import React from 'react';
import styles from './styles.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  const buttons = [
    { name: 'Home', route: '/' }, { name: 'Counter', route: '/counter' },
    { name: 'About', route: '/about'}, { name: 'React Cycle', route: '/react_cycle' }
  ]

  return (
  <div className={styles.navModule}>
    {
      buttons.map(button => {
        return (
          <Link key={button.name} className={styles.button} to={button.route}>
            {button.name}
          </Link>
        )
      })
    }
  </div>
  )
}

export default Nav;
