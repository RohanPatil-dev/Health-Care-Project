import React from "react"
import Footer from "../Index/Footer"
import Admin_Nav from "./Admin Reusable components/Admin_Nav"
import Admin_TitleBar from "./Admin Reusable components/Admin_TitleBar"

export default function Admin_Right() {
    return (
        <>
            {/* right nav  */}
            <div style={{ border: "2px solid black" }} id="grid-right">

                {/* this code is use for dashboard page  */}
                <Admin_Nav />

                <Admin_TitleBar img={"./Images/Navbar/Hospital.png"} title={"Dashboard"} subName={"Dashboard Features"} />

                <div id="dashboard_container">
                    <div id="container-grid" class="mt-3">
                        <div><img src="./Images/Admin/department.png" alt="" class="content" />
                            <p class="names">Total Department</p>
                        </div>
                        <div class="totals">3</div>
                    </div>
                    <div id="container-grid" class="mt-3">
                        <div><img src="./Images/Admin/beds.png" alt="" class="content" />
                            <p class="names">Total Beds</p>
                        </div>
                        <div class="totals">1</div>
                    </div>
                    <div id="container-grid" class="mt-3">
                        <div><img src="./Images/Admin/first-aid.png" alt="" class="content" />
                            <p class="names">Total Treatments</p>
                        </div>
                        <div class="totals">1</div>
                    </div>
                    <div id="container-grid" class="mt-3">
                        <div><img src="./Images/Admin/medicines.png" alt="" class="content" />
                            <p class="names">Total Medicines</p>
                        </div>
                        <div class="totals">1</div>
                    </div>
                    <div id="container-grid" class="mt-3">
                        <div><img src="./Images/Admin/doctor.png" alt="" class="content" />
                            <p class="names">Total Doctors</p>
                        </div>
                        <div class="totals">2</div>
                    </div>
                    <div id="container-grid" class="mt-3">
                        <div><img src="./Images/Admin/user.png" alt="" class="content" />
                            <p class="names">Total Patients</p>
                        </div>
                        <div class="totals">5</div>
                    </div>
                    <div id="container-grid" class="mt-3">
                        <div><img src="./Images/Admin/board.png" alt="" class="content" />
                            <p class="names">Total Appointments</p>
                        </div>
                        <div class="totals">17</div>
                    </div>
                </div>
                <Footer />
            </div>



        </>
    )
}