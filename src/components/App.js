import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Character from './Character.js';
import force from '../../assets/baby-yoda-force.png';
import gear from '../../assets/baby-yoda-gear.jpg';
import saber from '../../assets/baby-yoda-saber.jpg';
import guy from '../../assets/baby-yoda-guy.jpg';
import stick from '../../assets/baby-yoda-stick.jpg';
import tea from '../../assets/baby-yoda-tea.jpeg';
import walk from '../../assets/baby-yoda-walk.jpg';
import one from '../../assets/baby-yoda1.jpeg';
import basket from '../../assets/basket.jpg';
import frog from '../../assets/frog.jpg';
import happy from '../../assets/happy.jpg';

const App = () => (
  <React.Fragment>
    <Header />
    <Character name='Yoda' image={force} species='Yoda' origin='Yoda' location='Basket' />
    <Character name='Yoda' image={gear} species='Yoda' origin='Yoda' location='Space' />
    <Character name='Yoda' image={saber} species='Yoda' origin='Yoda' location='Unknown'  />
    <Character name='Yoda' image={guy} species='Human?' origin='Earth?' location='Earth' />
    <Character name='Yoda' image={stick} species='Yoda' origin='Yoda' location='Space' />
    <Character name='Yoda' image={tea} species='Yoda' origin='Yoda' location='village' />
    <Character name='Yoda' image={walk} species='Yoda' origin='Yoda' location='Village'  />
    <Character name='Yoda' image={one} species='Yoda' origin='Internet' location='ground' />
    <Character name='Yoda' image={basket} species='Yoda' origin='Yoda' location='Village'  />
    <Character name='Yoda' image={frog} species='Yoda' origin='Yoda' location='ground' />
    <Character name='Yoda' image={happy} species='Yoda' origin='Yoda' location='ground' />

    <Footer />
  </React.Fragment>
);

export default App;
