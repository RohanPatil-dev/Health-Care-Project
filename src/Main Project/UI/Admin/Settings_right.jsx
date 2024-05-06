import React from "react"
import Admin_Nav from "./Admin Reusable components/Admin_Nav"
import Admin_TitleBar from "./Admin Reusable components/Admin_TitleBar"
import Admin_footer from "./Admin Reusable components/Admin_footer"

export default function Settings_right() {
    return (
        <>
            {/* right nav  */}
            <div style={{ border: "2px solid black" }} id="grid-right">

                {/* this code is use for dashboard page  */}
                <Admin_Nav />

                <Admin_TitleBar title={"Settings"} />

                {/* Change profile image : */}
                <div id="user_settings">

                    <h1 id="setting-heading">Settings</h1>

                    <div id="profile-image">
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

                    <a href="" className="btn" id="add">Submit</a>
                </div>


              <Admin_footer/>
            </div>
        </>
    )
}