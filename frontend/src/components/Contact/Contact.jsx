import React from 'react';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Contact.scss';
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-info">
        <div className="contact-title">For questions, write to us:</div>
        <div className="contact-form">
          <input type="text" placeholder="Enter you e-mail..." />
          <button>send</button>
        </div>
        <div className="icons">
          <Link to='/'>
            <BsFacebook style={{color:'#fff'}} size={25}/>
          </Link>
          <Link to='/'>
            <BsInstagram style={{color:'#fff'}} size={25}/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
