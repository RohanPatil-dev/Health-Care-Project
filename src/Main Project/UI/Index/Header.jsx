import React from "react"

import "../../CSS/Login.css"

export default function Header() {
  return (
   <>
      {/* header  */}
    <div id="containers">
      <div id="title">
        <p id="title_1" className="text-warning">Stay safe and Healthy</p>
        <p id="title_2" className="text-info">
          Happiness is the highest form of health
        </p>

        <a className="btn btn-light" id="btn" href="#" role="button">Contact Now</a>
      </div>
    </div>
   </>
  )
}