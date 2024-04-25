import React from "react"

import "../../CSS/Login.css"
import { Link } from "react-router-dom"

export default function About() {
  return (
    <>
         {/* About US  */}
    <h1 className="text-center" id="about_title">
      ABOUT <span className="text-info">US</span>
    </h1>
    <div id="about">
      <div>
        <div>
          <div className="card" style={{width: "35rem",height: "32rem"}}>
            <img src="./Images/About US/about.png" alt="Card image cap" />
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="card" style={{width: "40rem",height: "32rem"}}>
            <div className="card-body">
              <h1 className="about-name text-dark">
                We Take Care Of Your Healthy Life
              </h1>
              <p className="about-description">
                Total patient care is a model of care overseen by a registered
                nurse who provides one-on-one care to patients. These RNs work
                with you to create a personalized, whole-person care plan for
                your loved one & We will always stands for our patients at any
                cost.We will do our best to provide the best services to our
                patients with the quality of our services.
              </p>
              <Link to={"/contact_us"} className="btn read-about">Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>    
    </>
  )
}