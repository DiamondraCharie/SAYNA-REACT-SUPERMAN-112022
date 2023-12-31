import React from 'react';
import '../styles/cart.css';
import {Link} from 'react-router-dom';

function cart() {
  return (
    <>
      <ng-container >
  <div class="container container-largeur">
    <div class="row">
      <div class="d-flex justify-content-between">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><Link to="/eshop">Eshop</Link></li>
            <li class="breadcrumb-item active"><Link to="/cart"> Panier</Link></li>
          </ol>
        </nav>
        <div class="cart">
            <Link to="/cart"><i class="fa-solid fa-2x fa-cart-plus"></i></Link>
        </div>
      </div>
    </div>
    <div class="recap">
      <p>Récapitulatif du panier</p>
    </div>
    <ng-container>
      <div class="d-flex justify-content-between align-items-center border-product">
        <div class="product d-flex align-items-center">
          <img width="30%" src='' alt="" />
          <div class="mx-4">
            <h5> </h5>
            <span>Numéro de produit X000</span>
          </div>
        </div>
        <div class="price">
          <p> </p>
        </div>
        <div class="qte bg-secondary">
          <i class="fa-solid fa-minus mx-4"></i><span class="fs-4">1</span>
          <i class="fa-regular fa-2x fa-plus mx-4"
          ></i>
        </div>
        <div class="delete">
          <i class="fa-solid fa-2x fa-xmark"></i>
        </div>
      </div>
    </ng-container>
    <div class="sous-total container-largeur">
      <h4 class="float-end">
        <strong> Sous Total : 58,99£ </strong>
      </h4>
    </div>
  </div>
  <section class="container container-largeur d-flex mx-auto my-5">
    <button class="mx-2"  routerLink="/eshop">Continuer mes achats</button>
    <button class="mx-2" routerLink="commande">Passer la commande</button>
  </section>
</ng-container>

    </>
  )
}

export default cart