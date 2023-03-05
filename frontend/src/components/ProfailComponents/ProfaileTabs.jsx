import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProfaileTabs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [dispatch, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword){
      alert("password is incorrect")
    }else{
      
    }

  }

  return (
    <div className="user_information">
      <form className="user_iformation-wrraper" onSubmit={submitHandler}>
        <div className="colum">
          <div className="colum-1flor">
            <label>e-mail address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="colum-2flor">
            <label>new password</label>
            <input type="password" placeholder="Enter new password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
        </div>
        <div className="colum">
          <div className="colum-1flor">
            <label>username</label>
            <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="colum-2flor">
            <label>confirm password</label>
            <input type="password" placeholder="confirm new password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
        </div>
        <button>update profail</button>
      </form>
    </div>
  );
};

export default ProfaileTabs;
