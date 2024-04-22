import React from "react"

import "../../CSS/Login.css"

import { Link } from "react-router-dom"

export default function Signup() {
  return (
    <>
     <div className="body">
     <div class="container-2">
        <form>

          <h2 id="signup">Sign-Up</h2>

          <div class="row">
            <div class="form-group">
              <label for="fname" id="name">First Name</label>
              <input type="text" class="form-control" id="fname" aria-describedby="emailHelp" placeholder="Enter first name" />
            </div>

            <div class="form-group">
              <label for="lname" id="name">Last Name</label>
              <input type="text" class="form-control" id="lname" aria-describedby="emailHelp" placeholder="Enter last name" />
            </div>
          </div>

          <div class="row">
            <div class="form-group">
              <label for="email_1" id="name">Enter Email</label>
              <input type="email" class="form-control" id="email_1" placeholder="Enter email" />
            </div>
          </div>

          <div class="row">
            <div class="form-group">
              <label for="passwords" id="name">Enter Password</label>
              <input type="password" class="form-control" id="passwords" placeholder="Enter password" />
            </div>

            <div class="form-group">
              <label for="re-password" id="name">Enter Re-Password</label>
              <input type="password" class="form-control" id="re-password" placeholder="Enter Re-password" />
            </div>

          </div>

          <div class="form-check">
            <div id="gender">Select your gender</div>

            <div class="row check">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="male" />
                <label class="form-check-label" for="male" id="name">Male</label>
              </div>

              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="female" />
                <label class="form-check-label" for="female" id="name">Female</label>
              </div>
            </div>
          </div>
          <button type="submit" class="btn_2">Signup</button>

          <p id="redirect_1">Now you have account please <Link to="/">Sign In</Link></p>
        </form>
      </div>
     </div>
    </>
  )
}