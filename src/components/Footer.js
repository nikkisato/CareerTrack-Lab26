import React, { Component } from 'react';
import styles from './Footer.css';


export default class Footer extends Component{
  render() {
    return (
      <footer className ={styles.Footer}>
        <section className={styles.stats}>
          <p>Character: 1</p>
          <p>Locations: 5</p>
          <p>Episodes: 8</p>
        </section>
        <section className={styles.acknowledgement}>
          <p>❮❯ by <a href="#">Nikki Sato</a> 2020</p>
        </section>
      </footer>
    );
  } 
}
