import React from "react"

import "../../../CSS/User.css"
import "../../../CSS/user_media.css"

export default function Sidebar() {
  return(
    <>
       
<div class="sidebar">
  <div class="logo">
  <div class="logo_content">
    <div id="dashboard_name">Central Care Hospital</div>

    <div id="user_pic">
      <div>
        <img
          src="../../Images/doctor1.png"
          alt=""
          height="70px"
          id="user_image"
        />
      </div>
      <div>
        <p id="User_name">Rohan Patil</p>
      </div>
      <div>
        <p id="name_type">USER</p>
      </div>
    </div>
  </div>
  
</div>
  <ul class="nav_list">
   <li>
      <a href="../../HTML/USER/home.html">
        <img src="../../Images/Admin/dashboard.png" alt="" class="icons"/>
          <span class="links_name">Dashboard</span>
        </a>
   </li>

   <li>
      <a href="../../HTML/USER/messages.html">
        <img src="../../Images/User/message.png" alt="" class="icons"/>
          <span class="links_name">Messages</span>
        </a>
   </li>

   <li>
      <a href="../USER/settings.html">
        <img src="../../Images/Admin/settings.png" alt="" class="icons"/>
          <span class="links_name">Settings</span>
        </a>
   </li>

   <li>
    <a href="../USER/write Appointment.html">
      <img src="../../Images/Admin/file.png" alt="" class="icons" />
      <span class="links_name">Appointment</span>
    </a>
  </li>

  </ul>
</div>
    </>
  )
}