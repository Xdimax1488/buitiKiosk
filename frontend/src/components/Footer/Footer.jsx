import React from 'react';

import { BsFillTelephoneFill, BsMailbox } from 'react-icons/bs';
import { GiPositionMarker } from 'react-icons/gi';

import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_wraper">
        <div className="footer_box">
          <div className="icon">
            <BsFillTelephoneFill
              size={25}
              style={{ color: '#2879fe', border: '2px solip #2879fe' }}
            />
          </div>
          <div className="title">Call us 24x7</div>
          <div className="info">555 555 555</div>
        </div>
        <div className="footer_box">
          <div className="icon">
            <BsMailbox size={25} style={{ color: '#2879fe' }} />
          </div>
          <div className="title">E-mail</div>
          <div className="info">mail@mail.com</div>
        </div>
        <div className="footer_box">
          <div className="icon">
            <GiPositionMarker size={25} style={{ color: '#2879fe' }} />
          </div>
          <div className="title">Shoop</div>
          <div className="info">ul.Boston </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
