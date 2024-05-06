import React from "react"
import Users_nav from "./User reusable components/Users_nav"
import Sidebar from "./User reusable components/Sidebar"
import User_Footer from "./User reusable components/User_Footer";

export default function User_Apointment() {
    return (
        <>
            <Users_nav />
            <Sidebar />


            {/* apply for appointment */}
            <div id="application">
                <h1 className="text-center text-primary">Apply for Appointment</h1>

                <form>
                    <div className="row">
                        <div className="form-group">
                            <label for="exampleInput1">Enter FullName : </label>
                            <input type="text" className="form-control " id="exampleInput1" placeholder="Enter name" />
                        </div>

                        <div className="form-group ml-4">
                            <label for="exampleInput2">Enter Email</label>
                            <input type="email" className="form-control " id="exampleInput2" aria-describedby="emailHelp"
                                placeholder="Enter email" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group">
                            <label for="exampleInput1">Enter Age</label>
                            <input type="number" className="form-control " id="exampleInput3" placeholder="Enter Age" />
                        </div>

                        <div className="form-group ml-4">
                            <label for="exampleInput1">Enter Contact Number</label>
                            <input type="text" className="form-control" id="exampleInput1" placeholder="Enter Contact Number" />
                        </div>

                    </div>
                    <div>
                        <label for="exampleFormControlSelect">Select blood group</label>
                        <select className="form-control w-75" id="exampleFormControlSelect">
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                            <option>O+</option>
                            <option>O-</option>
                        </select>

                    </div>

                    <div className="form-group mt-4">
                        <label for="exampleInput">Add Disease name</label>
                        <input type="password" className="form-control w-75" id="exampleInput" placeholder="Disease name" />
                    </div>

                    <div className="form-group mt-3">
                        <label for="exampleFormControlTextarea1">Add description</label>
                        <textarea className="form-control w-75" id="exampleFormControlTextarea1" rows="5" style={{resize: "none"}} placeholder="Write something here......"></textarea>
                    </div>


                    <button type="submit" className="btn btn-primary" id="appointment-btn">Submit</button>
                </form>

            </div>

            <User_Footer />
        </>
    )
}