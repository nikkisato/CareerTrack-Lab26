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
    const  { image, location } = this.props;
    return (
      <>
       

        <div className={styles.container}>
          <div className={styles.card}>
            <img src="./assets/baby-yoda1.jpeg"></img>
            <dd>Location: Dessert</dd>
          </div>

          <div className={styles.card}>
            <img className= "image" src="./assets/baby-yoda-walk.jpg"></img>
            <dd>Location: board walk</dd>
          </div>

          <div className={styles.card}>
            <img className= "image" src="./assets/baby-yoda-tea.jpeg"></img>
            <dd>Location: cuppa tea</dd>
          </div>
          
          <div>
            <img className= "image" src="./assets/baby-yoda-stick.jpg"></img>
            <dd>Location: Spaceship</dd>
          </div>

          <div>
            <img className= "image" src="./assets/baby-yoda-saber.jpg"></img>
            <dd>Location: Unknown</dd>
          </div>

          <div>
            <img className= "image" src="./assets/baby-yoda-guy.jpg"></img>
            <dd>Location: Diners Drive-ins and dives</dd>
          </div>


          <div>
            <img className= "image" src="./assets/baby-yoda-gear.jpg"></img>
            <dd>Location: Spaceship</dd>
          </div>

          <div>
            <img className= "image" src="./assets/baby-yoda-force.png"></img>
            <dd>Location: Egg</dd>
          </div>

        </div>
      </>
    );
  } 
}

