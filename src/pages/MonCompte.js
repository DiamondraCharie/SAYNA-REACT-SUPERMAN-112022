import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/moncompte.css';
import facebook from '../assets/icones/facebook.png';
import instagram from '../assets/icones/instagram.png';
import twitter from '../assets/icones/twitter.png';

const MonCompte = () => {
  return (
     
    <> 
    <section id="hero">
      <div className="compte-image">
        <div className="container">
          <h1 className="hero-title text-uppercase text-white">
          SERIEZ-VOUS KRYPTONIEN ?   <br/>
          DITES NOUS EN PLUS
          </h1>
       </div>
     </div>
     <div className='scroll'>
        <img className='s-med' src={facebook} alt='fb'/>
        <img className='s-med' src={instagram} alt='insta'/>
        <img className='s-med' src={twitter} alt='tw'/>
     </div> 
   </section>
   <section>
     <div className="container">
        <div className="d-flex justify-content-around mt-5">
          <div className="aside-menu">
           <nav>
             <ul className="d-flex flex-column">
               <Link className='a' href="">Mes informations</Link>
               <Link className='a' href="">Historique des commandes</Link>
               <Link className='a' href="">Mes avis</Link>
               <Link className='a' href="">Mes favoris</Link>
               <div className='mt-5'>
                 <button className="btn-valider">DECONNEXION</button>
               </div>
             </ul>
           </nav>
         </div>
        <div className="compte-info my-5">
        <div className="info-perso">
          <h1 className="my-4">Informations personnelles</h1>
          <div className="content">
            <p>Nom: Lorem ipsum dolor sit amet,</p>
            <p>Prenom : Lorem ipsum dolor sit amet,</p>
            <p>Mot de passe: Lorem ipsum dolor sit amet,</p>
            <p>Email: Lorem ipsum dolor sit amet,</p>
            <p>Numero de téléphone: Lorem ipsum dolor sit amet,</p>
            <p>Adresse de Livraison : Lorem ipsum dolor sit amet,</p>
            <p>
              Adresse de facturation : Lorem ipsum dolor sit amet,
            </p>
          </div>
          <div className='mt-5'>
            <button className="btn-valider">MODIFIER</button>
          </div>
        </div>
        <div className="info-newsletter">
          <h1 className="my-4">Newsletter</h1>
          <div className="content">
            <p>
              Abonnez vous à la newsletter ! Ne ratez pas nos offres
              exceptionnels sur votre article préféré !
            </p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" for="flexRadioDefault1">
                OUI
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label className="form-check-label" for="flexRadioDefault2">
                Non
              </label>
            </div>
          </div>
          <div className='mt-5'>
             <button className="btn-valider">ENREGISTRER</button>
          </div>
        </div>
      </div>
      <div className="newsletter"></div>
    </div>
  </div>
</section>

</>
  )
}

export default MonCompte