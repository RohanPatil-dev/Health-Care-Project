import React from "react"

import "../../../CSS/Doctor.css"
import "../../../CSS/Doctor_media.css"

export default function Doctor_dashboard_left() {
  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <div className="logo_content">
            <div id="dashboard_name">Central Care Hospital</div>

            <div id="user_pic">
              <div>
                <img src="../../Images/doctor1.png" alt="" height="70px" id="user_image" />
              </div>
              <div>
                <p id="User_name">Rohan Patil</p>
              </div>
              <div>
                <p id="name_type">DOCTOR</p>
              </div>
            </div>
          </div>

        </div>
        <ul className="nav_list">
          <li>
            <a href="../../HTML/DOCTOR/Dashboard.html">
              <img src="../../Images/Admin/dashboard.png" alt="" className="icons" />
              <span className="links_name">Dashboard</span>
            </a>
          </li>

          <li>
            <a href="../DOCTOR/daily sheet.html">
              <img src="../../Images/Doctor/calender.png" alt="" className="icons" />
              <span className="links_name">Day Sheet</span>
            </a>
          </li>

          <li>
            <a href="../DOCTOR/settings.html">
              <img src="../../Images/Admin/settings.png" alt="" className="icons" />
              <span className="links_name">Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}