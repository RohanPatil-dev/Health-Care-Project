import React from "react"
import Footer from "../Index/Footer"
import Admin_Nav from "./Admin Reusable components/Admin_Nav"

export default function Admin_Right() {
    return (
        <>
            {/* right nav  */}
            <div style={{ border: "2px solid black" }} id="grid-right">

                {/* this code is use for dashboard page  */}
                <Admin_Nav />

                <div id="dashboard_container">
                    <div id="container-grid" className="mt-3">
                        <div><img src="./Images/Admin/department.png" alt="" className="content" />
                            <p className="names">Total Department</p>
                        </div>
                        <div className="totals">3</div>
                    </div>
                    <div id="container-grid" className="mt-3">
                        <div><img src="./Images/Admin/beds.png" alt="" className="content" />
                            <p className="names">Total Beds</p>
                        </div>
                        <div className="totals">1</div>
                    </div>
                    <div id="container-grid" className="mt-3">
                        <div><img src="./Images/Admin/medicines.png" alt="" className="content" />
                            <p className="names">Total Medicines</p>
                        </div>
                        <div className="totals">1</div>
                    </div>
                    <div id="container-grid" className="mt-3">
                        <div><img src="./Images/Admin/doctor.png" alt="" className="content" />
                            <p className="names">Total Doctors</p>
                        </div>
                        <div className="totals">2</div>
                    </div>
                    <div id="container-grid" className="mt-3">
                        <div><img src="./Images/Admin/user.png" alt="" className="content" />
                            <p className="names">Total Patients</p>
                        </div>
                        <div className="totals">5</div>
                    </div>
                    <div id="container-grid" className="mt-3">
                        <div><img src="./Images/Admin/board.png" alt="" className="content" />
                            <p className="names">Total Appointments</p>
                        </div>
                        <div className="totals">17</div>
                    </div>
                </div>
                <Footer />
            </div>



        </>
    )
}