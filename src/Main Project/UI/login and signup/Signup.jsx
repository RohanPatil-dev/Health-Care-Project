import React from "react"

import "../../CSS/Login.css"
import "../../CSS/Login_media.css"

import { Link } from "react-router-dom"

export default function Signup() {
  return (
    <>
     <div className="body">
     <div className="container-2">
        <form>

          <h2 id="signup">Sign-Up</h2>

          <div className="row">
            <div className="form-group">
              <label htmlFor="fname" id="name">First Name</label>
              <input type="text" className="form-control" id="fname" aria-describedby="emailHelp" placeholder="Enter first name" />
            </div>

            <div className="form-group">
              <label htmlFor="lname" id="name">Last Name</label>
              <input type="text" className="form-control" id="lname" aria-describedby="emailHelp" placeholder="Enter last name" />
            </div>
          </div>

          <div className="row">
            <div className="form-group">
              <label htmlFor="email_1" id="name">Enter Email</label>
              <input type="email" className="form-control" id="email_1" placeholder="Enter email" />
            </div>
          </div>

          <div className="row">
            <div className="form-group">
              <label htmlFor="passwords" id="name">Enter Password</label>
              <input type="password" className="form-control" id="passwords" placeholder="Enter password" />
            </div>

            <div className="form-group">
              <label htmlFor="re-password" id="name">Enter Re-Password</label>
              <input type="password" className="form-control" id="re-password" placeholder="Enter Re-password" />
            </div>

          </div>

          <div className="form-check">
            <div id="gender">Select your gender</div>

            <div className="row check">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="male" />
                <label className="form-check-label" htmlFor="male" id="name">Male</label>
              </div>

              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="female" />
                <label className="form-check-label" htmlFor="female" id="name">Female</label>
              </div>
            </div>
          </div>
          <Link to={"/"} className="btn btn_2">Signup</Link>

          <p id="redirect_1">Now you have account please <Link to="/">Sign In</Link></p>
        </form>
      </div>
     </div>
    </>
  )
}