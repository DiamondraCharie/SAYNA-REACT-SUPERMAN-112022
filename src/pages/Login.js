import React from 'react';
import '../styles/login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <> 
    <section id="hero">
    <div className="login-image">
      <div className="container">
        <h1 className="hero-title text-uppercase text-white"> </h1>
      </div>
    </div>
  </section>
  <section className="inscription">
    <div className="container formulaire">
      <div className="head text-center">
        <h2>Connection</h2>
        <p>
          Vous n'avez pas encore un compte?
          <Link to='/signup'>Inscrivez-vous ici!</Link>
        </p>
      </div>
      <div className="form-body">
        <form className="form">
          <div className="mb-3">
            <label for="email" className="form-label">Identifiant</label>
            <input formControlName="email"
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="email"
            />
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">Mot de passe</label>
            <input formControlName="password"
              type="password"
              className="form-control"
              id="password"
              placeholder="mot de passe"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Valider</button>
        </form>
      </div>
    </div>
  </section>
  </>
  )
}

export default Login