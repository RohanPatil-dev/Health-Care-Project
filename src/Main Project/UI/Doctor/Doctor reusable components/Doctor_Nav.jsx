import React from "react"

export default function Doctor_Nav() {
  return (
    <>
      <div>
        <div id="patient_titles">
          <div id="title_image_patient">
            <img src="./Images/Navbar/green_user.png" alt="" />
          </div>
          <div className="text-info">
            <p id="dash_title_patient_main">Doctor Dashboard</p>
          </div>
          <div className="mt-2">
            <p id="dash-title_patient">Dashboard</p>
          </div>
        </div>

        <button type="button" className="btn btn-info" id="pop_up">
          <img src="./Images/Navbar/menu-line.png" alt="" />
        </button>
      </div>

    </>
  )
}