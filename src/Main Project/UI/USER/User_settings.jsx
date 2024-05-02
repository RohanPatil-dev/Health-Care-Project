import React from "react"
import Users_nav from "./User reusable components/Users_nav"
import User_Footer from "./User reusable components/User_Footer"
import Sidebar from "./User reusable components/Sidebar"

export default function User_settings() {
    return (
        <>
            <Users_nav />
            <Sidebar />

            {/* Change profile image : */}
            <div id="user_settings">

                <h1 id="user_setting-heading">Settings</h1>

                <div id="user_profile-image">
                    <label>Change profile image :</label>
                    <img src="./Images/doctor1.png" height="70px"
                        alt="" />

                    <input type="file" name="" id="" style={{ marginLeft: "20px" }} />
                </div>

                <div id="setting-grid">
                    <div className="form-group setting-form">
                        <label for="exampleInputName">Enter FullName</label>
                        <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter Name......" />
                    </div>

                    <div className="form-group setting-form">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email......" />
                    </div>

                    <div className="form-group setting-form">
                        <label for="exampleInputPassword">Enter Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword" aria-describedby="emailHelp" placeholder="Enter Password........." />
                    </div>

                    <div className="form-group setting-form">
                        <label for="exampleInputC-Password">Enter Confirm Password</label>
                        <input type="password" className="form-control" id="exampleInputC-Password" aria-describedby="emailHelp" placeholder="Enter Confirm Password........" />
                    </div>
                </div>

                <a href="" className="btn" id="user_add">Submit</a>
            </div>

            <User_Footer />
        </>
    )
}