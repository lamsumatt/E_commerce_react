import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='your name' />
          <input type="email" name="" id="" placeholder='Email Address' />
          <input type="password" name="" id="" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By Continueing, I agree with the <span>Terms & Conditions</span> and <span>Privacy Policy</span></p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
