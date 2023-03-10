import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import Toast from '../LoadingError/Toast';
import TabSkeleton from './TabsSkeleton';

const ProfaileTabs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const toastId= useRef(null)

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const skeleton = <TabSkeleton />;

const Toastobjects = {
    pauseOnFocusLoss : false,
    draggable : false,
    pauseOnHover:false,
    autoClose :2000

  }

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [dispatch, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toastId.current = toast.error('password does not match',Toastobjects);
    } else {
      alert('is correct');
    }
  };

  return (
    <>
      <Toast />
      {error && { error }}
      <div className="user_information">
        <form onSubmit={submitHandler}>
          {loading ? (
            skeleton
          ) : (
            <div className="user_iformation-wrraper">
              <div className="colum">
                <div className="colum-1flor">
                  <label>e-mail address</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="colum-2flor">
                  <label>new password</label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="colum">
                <div className="colum-1flor">
                  <label>username</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="colum-2flor">
                  <label>confirm password</label>
                  <input
                    type="password"
                    placeholder="confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          <button>update profile</button>
        </form>
      </div>
    </>
  );
};

export default ProfaileTabs;
