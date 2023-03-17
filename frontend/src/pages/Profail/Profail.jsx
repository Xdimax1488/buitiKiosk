import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import icon from '../../asets/icon.jpg';
import { Orders, ProfaileTabs } from '../../components';
import { getUserDetails } from '../../Redux/Actions/UserActions';
import './Profail.scss';

const Profail = () => {
  const [showTabs, setShowTabs] = useState(true);
  const [showOrders, setShowOrders] = useState(false);

  const dispatch = useDispatch()
  const userLogin = useSelector((state)=>state.userLogin)
  const {userInfo} = userLogin

  useEffect(()=>{
    dispatch(getUserDetails('profile'))
  },[dispatch])

  return (
    <div className="profail">
      <div className="profail_wrraper">
        <div className="profail_info">
          <div className="profail_info-person">
            <img src={icon} alt="" />
            <div className="person-desc">
              <h4>{userInfo.name}</h4>
              <h4 className="data">joined {moment(userInfo.createdAt).format('LL')}</h4>
            </div>
          </div>
          <div className="profail_button">
            <button
              className={showTabs === true ? 'active ' : ''}
              onClick={() => setShowTabs(true)(setShowOrders(false))}>
              Profile settings
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
