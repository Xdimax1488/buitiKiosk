import React, { useState } from 'react';

import icon from '../../asets/icon.jpg';
import { Orders, ProfaileTabs } from '../../components';
import './Profail.scss';

const Profail = () => {
  const [showTabs, setShowTabs] = useState(true);
  const [showOrders, setShowOrders] = useState(false);

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
            <button
              className={showTabs === true ? 'active ' : ''}
              onClick={() => setShowTabs(true)(setShowOrders(false))}>
              Profail settings
            </button>
            <button
              className={showOrders === true ? 'active btn-order' : 'btn-order'}
              onClick={() => setShowTabs(false)(setShowOrders(true))}>
              <span>orders list</span>
              <span className="order-num">1</span>
            </button>
          </div>
        </div>

        <div className="profail_tabls">
          {showTabs && <ProfaileTabs />}

          <div className="user_orders">{showOrders && <Orders />}</div>
        </div>
      </div>
    </div>
  );
};

export default Profail;
