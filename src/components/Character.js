import React, { Component } from 'react';
import styles from './Character.css';
import PropTypes from 'prop-types';


export default class Character extends Component{
static propTypes = { 
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired 
}

render() {
  const { name, status, species, gender, origin, location, image } = this.props; 

  return (

    <>
      {Character.name}
      {Character.status}
      {Character.species}
      {Character.gender}
      {Character.origin}
      {Character.location}
      {Character.image}
    </>
    
  );
} 
}
