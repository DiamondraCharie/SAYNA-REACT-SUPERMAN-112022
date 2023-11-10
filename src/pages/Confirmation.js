import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/confirmation.css';

function Confirmation() {
  return (
    <>
     <ng-container >
        <div class="container container-largeur">
          <div class="row">
            <div class="d-flex justify-content-between">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><Link to="/eshop">Eshop</Link></li>
                  <li class="breadcrumb-item active"><Link to="/cart">Panier</Link></li>
                  <li class="breadcrumb-item active"><Link to="/cart">Récapitulatif de la commande</Link></li>
                  <li class="breadcrumb-item active"><Link to="/cart">Authentification</Link></li>
                  <li class="breadcrumb-item active"><Link to="/cart">Livraison et Paiement</Link></li>
                  <li class="breadcrumb-item active"><Link to="/confirmation">Achat confirmé</Link></li>
                </ol>
              </nav>
            </div>
          </div>
          <section class="container container-largeur d-flex mx-auto my-5">
             <button class="mx-2"  routerLink="/eshop">RETOURNER AU CATALOGUE</button>
             <button class="mx-2" routerLink="commande">REVENIR A L’ACCUEIL</button>
          </section>
        </div>
        <div className='congrats'>
          <h3>Merci pour votre commande !</h3>
          <p>Superman se charge de livrer votre commande ! Ce sera fait à la vitesse de l’éclair tant que Lex Luthor
             se tiendra tranquille ou que Batman ne cherche pas des noises à notre journaliste préféré !
             Retrouvez le détail de votre commande ci-dessous et dans le mail de confirmation envoyé à l’adresse 
             mail renseignée. Vous n’avez pas reçu le mail ? Renvoyer la confirmation d’achat.
          </p>
        </div>
        
     </ng-container>

    </>
  )
}

export default Confirmation