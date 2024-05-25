import React from "react"
import { Link } from "react-router-dom"

import "../../../CSS/User.css"
import "../../../CSS/user_media.css"

import { IconContext } from "react-icons"

export default function User_slider(props) {

    return (
        <>
            <IconContext.Provider value={{ color: "white" }}>
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
                                    <p id="role_type">USER</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <ul className="nav_list">
                        <li>
                            <Link to="/user_dashboard">
                                <img src="./Images/Admin/dashboard.png" alt="" class="icons" />
                                <span class="links_name">Dashboard</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/user_messages">
                                <img src="./Images/User/message.png" alt="" class="icons" />
                                <span class="links_name">Messages</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/User_visits">
                                <img src="./Images/User/visits.png" alt="" class="icons" />
                                <span class="links_name">Total Visits</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/user_appointment">
                                <img src="./Images/Admin/file.png" alt="" class="icons" />
                                <span class="links_name">Appointment</span>
                            </Link>
                        </li>


                        <li>
                            <Link to="/user_settings">
                                <img src="./Images/Admin/settings.png" alt="" class="icons" />
                                <span class="links_name">Settings</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </IconContext.Provider>
        </>
    )
}