import React from "react"
import Doctor_Nav from "./Doctor reusable components/Doctor_Nav"
import Doctor_dashboard_left from "./Doctor reusable components/Doctor_dashboard_left"
import Footer from "../Index/Footer"

import "../../CSS/Doctor.css"

export default function Doctor_Settings() {
    return (
        <>
    
    <Doctor_Nav img={"./Images/Navbar/settings.png"} title={"Settings"}/>
 

            {/* Change profile image : */}
            <div id="doctor_settings">

                <h1 id="doctor_setting-heading">Settings</h1>

                <div id="doctor_profile-image">
                    <label>Change profile image :</label>
                    <img src="./Images/doctor1.png" height="70px"
                        alt="" />

                    <input type="file" name="" id="" />
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

                <a href="" className="btn" id="doctor_add">Submit</a>
            </div>

            <Footer />

        </>
    )
}