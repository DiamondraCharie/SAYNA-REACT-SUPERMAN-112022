import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import logo_blanc from '../assets/logos/logo_blanc.png'

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg transparent">
  <div class="container">
    <Link class="navbar-brand" routerLink="">
      <img src={logo_blanc} alt=""/>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" routerLink="" routerLinkActive="active">HOME</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" routerLink="game" routerLinkActive="active" >GAME</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" routerLink="eshop" routerLinkActive="active" >ESHOP</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" routerLink="compte" routerLinkActive="active" >MON COMPTE</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default NavBar