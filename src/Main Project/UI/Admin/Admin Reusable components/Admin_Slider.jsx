import React from "react"
import { Link } from "react-router-dom"

import "../../../CSS/Admin_dashboard.css"
import "../../../CSS/Admin_media.css"

import { IconContext } from "react-icons"

export default function Admin_Slider(props) {

  return (
    <IconContext.Provider value={{ color: "white" }}>

      <div className={`${props.sidebar ? "nav-menu active" : "nav-menu"} sidebar `} >
        <div className="nav-menu-items logo" onClick={props.showSidebar}>
        <div id="grid-user" style={{height : props.height}}>
          <div className="logo_content">
            <div id="dashboard_name">Central Care Hospital</div>

            <div id="admin">
              <div>
                <img src="./Images/doctor1.png" alt="" height="70px" id="user_image" />
              </div>
              <div>
                <p id="User_name">Rohan Patil</p>
              </div>
              <div>
                <p id="role_type">ADMIN</p>
              </div>
            </div>
          </div>
        </div>
        
        <ul className="nav_list">
          <li>
            <Link to="/admin_dashboard"
            ><img
                src="./Images/Admin/dashboard.png"
                alt=""
                height={"20px"}
                className="mb-1"
              /><span className="ml-1">Dashboard</span></Link>
          </li>

          <li>
            <Link to="/admin_department"
            ><img
                src="./Images/Admin/department.png"
                alt=""
                height={"20px"}
                className="mb-1"
              /><span className="ml-1">Department Module</span></Link>
          </li>

          <li>
            <Link to=""
            ><img
                src="./Images/Admin/user-group.png"
                alt=""
                height={"20px"}
                className="mb-1"
              /><span className="ml-1">User Module</span></Link>
          </li>

          <li>
            <Link to=""
            ><img
                src="./Images/Admin/doctors.png"
                alt=""
                height="20px"
                className="mb-1"
              /><span className="ml-1">Doctor Module</span></Link>
          </li>

          <li>
            <Link to="/admin_patient_Module"
            ><img
                src="./Images/Admin/user.png"
                alt=""
                height="20px"
                className="mb-1"
              /><span className="ml-1">Patient Module</span></Link>
          </li>

          <li>
            <Link to="/admin_module"
            ><img
                src="./Images/Admin/board.png"
                alt=""
                height="20px"
                className="mb-1"
              /><span className="ml-1">Appointment Module</span></Link>
          </li>

          <li>
            <Link to=""
            ><img
                src="./Images/Admin/medicine.png"
                alt=""
                height="20px"
                className="mb-1"
              /><span className="ml-1">Medicine Module</span></Link>
          </li>

          <li>
            <Link to=""
            ><img
                src="./Images/Admin/beds.png"
                alt=""
                height="20px"
                className="mb-1"
              /><span className="ml-1">Bed Module</span></Link>
          </li>

          <li>
            <Link to="/admin_settings"
            ><img
                src="./Images/Admin/settings.png"
                alt=""
                height="20px"
                className="mb-1"
              /><span className="ml-1">Settings</span></Link>
          </li>
        </ul>
      </div>
      </div>
    </IconContext.Provider>
  )
}