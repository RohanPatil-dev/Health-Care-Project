import React from "react"

import "../../CSS/Login.css"

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
            <a className="nav-link text-dark" href="../HTML/Home.html#containers">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="../HTML/Home.html#service">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="../HTML/Home.html#about_title">About us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="../HTML/Home.html#blog">Blogs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="../HTML/Home.html#footer">Contact Info</a>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}