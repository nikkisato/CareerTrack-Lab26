import React, { Component } from 'react';
import styles from './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className={styles.Header}>
        <nav>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
          </ul>
        </nav>
        <section>
          <h1>Baby Yoda</h1>
          <h2>Use the force</h2>
        </section>
      </header>
    );
  }
}
