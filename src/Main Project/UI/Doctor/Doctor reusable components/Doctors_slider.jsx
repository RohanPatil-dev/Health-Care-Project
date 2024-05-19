import React from "react"
import { Link } from "react-router-dom"

import "../../../CSS/Doctor.css"
import "../../../CSS/Doctor_media.css"

import { IconContext } from "react-icons"

export default function Doctors_slider(props) {

  return(
<IconContext.Provider value={{color : "white"}}>

<div className={`${props.sidebar ? "nav-menu active" : "nav-menu"} sidebar `} > 
        <div className="nav-menu-items logo" onClick={props.showSidebar}> 
          <div className="logo_content">
            <div id="dashboard_name">Central Care Hospital</div>

            <div id="user_pic">
              <div>
                <img src="./Images/doctor1.png" alt="" height="70px" id="user_image" />
              </div>
              <div>
                <p id="User_name">Rohan Patil</p>
              </div>
              <div>
                <p id="role_type">DOCTOR</p>
              </div>
            </div>
          </div>

        </div>
        <ul className="nav_list">
          <li>
            <Link to="/doctor_dashboard">
              <img src="./Images/Admin/dashboard.png" alt="" className="icons" />
              <span className="links_name">Dashboard</span>
            </Link>
          </li>

          <li>
            <Link to="/doctor_dailySheet">
              <img src="./Images/Doctor/calender.png" alt="" className="icons" />
              <span className="links_name">Day Sheet</span>
            </Link>
          </li>

          <li>
            <Link to="/Doctor_Settings">
              <img src="./Images/Admin/settings.png" alt="" className="icons" />
              <span className="links_name">Settings</span>
            </Link>
          </li>
        </ul>
      </div>

  {/* <nav className={props.sidebar ? "nav-menu active" : "nav-menu"}>
    <ul className="nav-menu-items" onClick={props.showSidebar}>
        <li className="navbar-toggle">
          <Link to="#" className="menu-bars">
              <AiOutlineClose/>
          </Link>
        </li>
        {
          Sidebar_data.map((value,index)=>{
            return(
              <>
                  <li key={index} className={value.c_Name}><Link to={value.path}>{value.icon} <span>{value.title}</span></Link></li>
              </>
            )
          })
        }
    </ul>
  </nav> */}
  </IconContext.Provider>
  )
}