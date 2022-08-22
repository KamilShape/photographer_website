import './styles/contact.css'

import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fas)

function Contact() {
  return (
    <div className="contact">
      <p className="title">Contact</p>
      <form className="contact_form">
        <div className="contact_input_container">
            <p className="contact_input_label">Name:</p>
            <input type="text" className="contact_input" />
        </div>
        <div className="contact_input_container">
            <p className="contact_input_label">Surname:</p>
            <input type="text" className="contact_input" />
        </div>
        <div className="contact_input_container">
            <p className="contact_input_label">E-mail:</p>
            <input type="text" className="contact_input" />
        </div>
        <p className="contact_title title">Message</p>
        <textarea className="contact_message"></textarea>
      </form>
      <div className="contact_socials">
        <i class="fab fa-instagram contact_socials-icon"></i>
        <i class="fab fa-facebook-square contact_socials-icon"></i>
        <i  class="fab fa-linkedin contact_socials-icon"></i>
      </div>
    </div>
  );
}

export default Contact;
