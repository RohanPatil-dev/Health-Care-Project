import React from "react"

import "../../CSS/Login.css"

export default function About() {
  return (
    <>
         {/* About US  */}
    <h1 class="text-center" id="about_title">
      ABOUT <span class="text-info">US</span>
    </h1>
    <div id="about">
      <div>
        <div>
          <div class="card" style={{width: "35rem",height: "32rem"}}>
            <img src="./Images/About US/about.png" alt="Card image cap" />
          </div>
        </div>
      </div>

      <div>
        <div>
          <div class="card" style={{width: "40rem",height: "32rem"}}>
            <div class="card-body">
              <h1 class="about-name text-dark">
                We Take Care Of Your Healthy Life
              </h1>
              <p class="about-description">
                Total patient care is a model of care overseen by a registered
                nurse who provides one-on-one care to patients. These RNs work
                with you to create a personalized, whole-person care plan for
                your loved one & We will always stands for our patients at any
                cost.We will do our best to provide the best services to our
                patients with the quality of our services.
              </p>
              <a href="../HTML/About US.html" class="btn read-about">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>    
    </>
  )
}