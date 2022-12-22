import React from 'react';

import icon from '../../asets/icon.jpg';
import './Profail.scss';

const Profail = () => {
  return (
    <div className="profail">
      <div className="profail_wrraper">
        <div className="profail_info">
          <div className="profail_info-person">
            <img src={icon} alt="" />
            <div className="person-desc">
              <h4>admin doe</h4>
              <h4 className="data">joined dec 12 2022</h4>
            </div>
          </div>
          <div className="profail_button">
            <button>Profail settings</button>
            <button className="btn-order">
              <span>orders list</span>
              <span className="order-num">1</span>
            </button>
          </div>
        </div>
        <div className="profail_tabls"></div>
      </div>
    </div>
  );
};

export default Profail;
