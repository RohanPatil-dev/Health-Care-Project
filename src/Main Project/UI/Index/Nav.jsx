import React from "react"

import "../../CSS/Login.css"
import { Link,Outlet } from "react-router-dom"

export default function Nav() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav-border">
      <a className="navbar-brand text-dark" style={{fontWeight: "600"}} href="#">
        <img src="./Images/Navbar/Main logo.png"
          alt="main logo" id="main_logo" />Central Health Care</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
  
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/index">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to="services">Services</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="/about">About us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="/blogs">Blogs</a>
          </li>
        </ul>
      </div>
    </nav>

    <Outlet />
    </>
  )
}