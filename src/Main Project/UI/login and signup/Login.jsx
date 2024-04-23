import React from "react"

import "../../CSS/Login.css"

import { Link } from "react-router-dom"

export default function Login() {
  return (
     <>
    <div className="body">
    <div className="container-1">
      <form>
        <h2 id="signin">Sign-In</h2>

        <div className="form-group form-div">
          <label for="email" id="name">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group form-div">
          <label for="password" id="name">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>

        <Link to={'/index'} className="btn btn_1">Signin</Link>

        <p id="redirect">
          Don't have account ? <Link to="/signup" id="link1">Sign Up</Link>
          <a href="#" id="link2">Forgot Password ?</a>
        </p>
      </form>
    </div>
    </div>
     </>
  )
}