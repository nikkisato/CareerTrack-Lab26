import React, { Component } from "react";
import styles from "./App.css";

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
          <h1>The Rick and Morty API</h1>
          <h2>Hey, Did you ever want to hold a Terry fold?</h2>
        </section>
      </header>
    );
  }
}
