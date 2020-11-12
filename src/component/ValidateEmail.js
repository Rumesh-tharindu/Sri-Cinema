import React from 'react'
import './validateEmail.css'
import email from './email.png'

const ValidateEmail =()=>{
  return(
    <div>
      <div className="head-line">
      <h1>  Thank you for Signing up! </h1>
      <div className="container">
       <div className="image-container">
        <img  style={{width:"100px",height:"100px"}}src={email} />
        </div>
        <div className="info-text container p-5">
         <p>
         We've sent you an email with a link to verify your account.please click on the verification link to finish your registration.
          If you don't see it within an hour, please chack your spam folder for message <span>noreply@SriCinema.org</span>
         </p>
        </div>
        </div>

      </div>
    </div>
  )
}
export default ValidateEmail
