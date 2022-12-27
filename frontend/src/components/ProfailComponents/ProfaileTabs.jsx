import React from 'react'

const ProfaileTabs = () => {
  return (
    <div className="user_information">
            <div className="user_iformation-wrraper">
              <div className="colum">
                <div className="colum-1flor">
                  <h4>username</h4>
                  <input type="text" />
                </div>
                <div className="colum-2flor">
                  <h4>new password</h4>
                  <input type="password" placeholder="Enter new password" />
                </div>
              </div>
              <div className="colum">
                <div className="colum-1flor">
                  <h4>e-mail address</h4>
                  <input type="e-mail" />
                </div>
                <div className="colum-2flor">
                  <h4>confirm password</h4>
                  <input type="password" placeholder="confirm new password" />
                </div>
              </div>
            </div>
            <button>update profail</button>
          </div>
  )
}

export default ProfaileTabs