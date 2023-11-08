import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/signup.css';
import { useState } from 'react';

function Signup() {

    const [email, setEmail] = useState('');//Décomposition
    const [password, setPassword] = useState ('');
    
    const onSubmit = (e) => {
        e.preventdefault ();
        console.log (email);
        console.log (password);
    }

  return (
    <> 
     <section id="hero">
       <div className="signup-image">
         <div className="container">
           <h1 className="hero-title text-uppercase text-white"> </h1>
         </div>
       </div>
     </section>
     <div className="container formulaire">
       <div className="head text-center">
          <h2>Inscription</h2>
          <p>
           Vous avez déjà un compte?
           <Link to='/login'>Connectez-vous ici!</Link>
          </p>
       </div>
       <div className="form-body">
       <form onSubmit={onSubmit}>
          <div className="mb-3">
             <label for="name" className="form-label">Nom</label>
             <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Nom'/>
          </div>
          <div className="mb-3">
             <label for="lastname" className="form-label">Prénom</label>
             <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Prénom'/>
          </div>
          <div className="mb-3">
             <label for="exampleInputEmail1" className="form-label">Identifiant</label>
             <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'/>
             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Mot de passe</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" id="exampleInputPassword1" placeholder='Mot de passe'/>
          </div>
          <div className="mb-3">
            <label for="ConfirmPassword1" className="form-label">Confirmer votre mot de passe</label>
            <input type="password" className="form-control" id="confirmPassword1" placeholder='Confirmation du mot de passe'/>
          </div>
          <button type="submit" className="btn btn-primary w-100">Valider</button>
       </form>
       </div>
       
     </div>
   </>
  )
}

export default Signup
