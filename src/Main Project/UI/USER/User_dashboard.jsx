import React from "react";
import Users_nav from "./User reusable components/Users_nav";
import Sidebar from "./User reusable components/Sidebar";
import User_Footer from "./User reusable components/User_Footer";

export default function User_dashboard() {
    return (
        <>
            <Users_nav img={"./Images/Navbar/green_user.png"} title={"Users Dashboard"} subtitle={"Dashboard"}/>

            <div id="user_dashboard">
                <div id="container-grid" className="mt-3">
                    <div>
                        <img src="./Images/User/clipboard.png" alt="" className="content" />
                        <p className="names">Appointments</p>
                    </div>
                    <div className="totals">3</div>
                </div>
                <div id="container-grid" className="mt-3">
                    <div>
                        <img src="./Images/User/message.png" alt="" className="content" />
                        <p className="names">Messages</p>
                    </div>
                    <div className="totals">1</div>
                </div>
            </div>

            <User_Footer />
        </>
    );
}
