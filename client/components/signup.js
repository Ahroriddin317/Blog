import React from 'react'
import sendIcon from '../assets/images/send-icon.png'

const SignUp = () => {
  return (
    <div className="sign-up">
      <div className="sign-up-item">
        <h1>Sign up for our newsletter!</h1>
        <input type="text" placeholder="Enter a valid email address" />
        <button type="button" className="sign-up-button">
          <img src={sendIcon} alt="img" />
        </button>
      </div>
    </div>
  )
}

export default SignUp