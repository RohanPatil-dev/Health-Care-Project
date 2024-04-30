import React from "react";
import Users_nav from "./User reusable components/Users_nav";
import Sidebar from "./User reusable components/Sidebar";
import User_Footer from "./User reusable components/User_Footer";

export default function User_dashboard() {
    return (
        <>
            <Users_nav />
            <Sidebar />

            <div id="user_dashboard">
                <div id="container-grid" class="mt-3">
                    <div>
                        <img src="../../Images/User/clipboard.png" alt="" class="content" />
                        <p class="names">Appointments</p>
                    </div>
                    <div class="totals">3</div>
                </div>
                <div id="container-grid" class="mt-3">
                    <div>
                        <img src="../../Images/User/message.png" alt="" class="content" />
                        <p class="names">Messages</p>
                    </div>
                    <div class="totals">1</div>
                </div>
            </div>

            <User_Footer />
        </>
    );
}
