import React from "react"
import Users_nav from "./User reusable components/Users_nav"
import Sidebar from "./User reusable components/Sidebar"
import User_Footer from "./User reusable components/User_Footer"


export default function Messages() {
    return (
        <>
            <Users_nav />
            <Sidebar />


            {/* messages  */}
            <div id="grid-message">
                <div className="message-container bg-dark">
                    <p>To : <span>Rohan Patil</span></p>
                    <p>From : <span>Admin</span></p>
                    <p>Subject : <span>Hello user,i want to inform</span></p>

                    <button type="button" className="bg-danger p-3">Read Message</button>
                </div>

                <div className="message-container bg-dark">
                    <p>To : <span>Rohan Patil</span></p>
                    <p>From : <span>Admin</span></p>
                    <p>Subject : <span>Hello user,i want to inform</span></p>

                    <button type="button" className="bg-danger p-3">Read Message</button>
                </div>

                <div className="message-container bg-dark">
                    <p>To : <span>Rohan Patil</span></p>
                    <p>From : <span>Admin</span></p>
                    <p>Subject : <span>Hello user,i want to inform</span></p>

                    <button type="button" className="bg-danger p-3">Read Message</button>
                </div>

                <div className="message-container bg-dark">
                    <p>To : <span>Rohan Patil</span></p>
                    <p>From : <span>Admin</span></p>
                    <p>Subject : <span>Hello user,i want to inform</span></p>

                    <button type="button" className="bg-danger p-3">Read Message</button>
                </div>

                <div className="message-container bg-dark">
                    <p>To : <span>Rohan Patil</span></p>
                    <p>From : <span>Admin</span></p>
                    <p>Subject : <span>Hello user,i want to inform</span></p>

                    <button type="button" className="bg-danger p-3">Read Message</button>
                </div>

                <div className="message-container bg-dark">
                    <p>To : <span>Rohan Patil</span></p>
                    <p>From : <span>Admin</span></p>
                    <p>Subject : <span>Hello user,i want to inform</span></p>

                    <button type="button" className="bg-danger p-3">Read Message</button>
                </div>


                <div className="message-container bg-dark">
                    <p>To : <span>Rohan Patil</span></p>
                    <p>From : <span>Admin</span></p>
                    <p>Subject : <span>Hello user,i want to inform</span></p>

                    <button type="button" className="bg-danger p-3">Read Message</button>
                </div>

                <div className="message-container bg-dark">
                    <p>To : <span>Rohan Patil</span></p>
                    <p>From : <span>Admin</span></p>
                    <p>Subject : <span>Hello user,i want to inform</span></p>

                    <button type="button" className="bg-danger p-3">Read Message</button>
                </div>

                <div className="message-container bg-dark">
                    <p>To : <span>Rohan Patil</span></p>
                    <p>From : <span>Admin</span></p>
                    <p>Subject : <span>Hello user,i want to inform</span></p>

                    <button type="button" className="bg-danger p-3">Read Message</button>
                </div>

                <div className="message-container bg-dark">
                    <p>To : <span>Rohan Patil</span></p>
                    <p>From : <span>Admin</span></p>
                    <p>Subject : <span>Hello user,i want to inform</span></p>

                    <button type="button" className="bg-danger p-3">Read Message</button>
                </div>

                <div className="message-container bg-dark">
                    <p>To : <span>Rohan Patil</span></p>
                    <p>From : <span>Admin</span></p>
                    <p>Subject : <span>Hello user,i want to inform</span></p>

                    <button type="button" className="bg-danger p-3">Read Message</button>
                </div>
            </div>

            <User_Footer />
        </>
    )
}