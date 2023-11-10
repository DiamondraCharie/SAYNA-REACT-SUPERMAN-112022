import React from 'react';
import '../styles/heroshop.css';
import facebook from '../assets/icones/facebook.png';
import instagram from '../assets/icones/instagram.png';
import twitter from '../assets/icones/twitter.png';
import flèche_down_header from '../assets/icones/flèche_down_header.png';


function heroshop() {
  return (
    <section className='hero'>
      <div class="hero-image">
          <div class="container">
          <h1 class="hero-title text-uppercase">ENVIE D’UN SLIP JAUNE ?</h1>
       </div>
     </div>
     <div className='scroll'>
        <img className='s-med' src={facebook} alt='fb'/>
        <img className='s-med' src={instagram} alt='insta'/>
        <img className='s-med' src={twitter} alt='tw'/>
     </div> 
     <div className='fleche'>
        <img src={flèche_down_header} alt=''/>
     </div>
    </section>

  )
}
 
export default heroshop