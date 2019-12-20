import React from 'react';
import './FormFr.css';

function Formulaire() {
return (
  <div class="container">
    <div className="formulaire">
      <form id="contact" action="" method="post">
        <h3 className="getintouch">Contactez nous</h3>
        <p className="components-form">
          <input placeholder="Nom" type="text" />
        </p>
        <p className="components-form">
          <input placeholder="Prénom" type="text" />
        </p>
        <p className="components-form">
          <input placeholder="Email" type="email" />
        </p>
        <p className="components-form">
          <textarea placeholder="Message"></textarea>
        </p>
        <p className="components-form">
          <button name="submit" type="submit" id="contact-submit">Envoyer</button>
        </p>
      </form>
    </div> 
  </div>
)
}
export default Formulaire;

