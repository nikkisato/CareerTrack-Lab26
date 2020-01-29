import React, { Component } from 'react';
import styles from './Character.css';
import PropTypes from 'prop-types';


export default class Character extends Component{

  static propTypes = { 
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired 
    
  }

  render() {
    const  { name, species, image, origin, location } = this.props;
    return (
      <>
       
        <div className={styles.card}>
          <img src={image}></img>
          <h1>Name: {name}</h1>
          <h2>Species: {species}</h2>
          <h2>Origin: {origin}</h2>
          <h2>Location: {location}</h2>
        </div>
      </>
    );
  } 
}

