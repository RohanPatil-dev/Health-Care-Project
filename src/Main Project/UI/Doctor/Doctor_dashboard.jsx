import React from "react"
import Doctor_dashboard_left from "./Doctor reusable components/Doctor_dashboard_left"
import Doctor_Nav from "./Doctor reusable components/Doctor_Nav"

import "../../CSS/Doctor.css"
import Footer from "../Doctor/Doctor reusable components/Footer"

export default function Doctor_dashboard() {
    return (
        <>

<Doctor_Nav/>
<Doctor_dashboard_left/>

  <div id="doctor_dashboard">
    <div id="container-grid" className="mt-3">
      <div><img src="./Images/User/clipboard.png" alt="" className="content"/>
        <p className="names">Total Appointment</p>
      </div>
      <div className="totals">3</div>
    </div>

    <div id="container-grid" className="mt-3">
      <div><img src="./Images/User/message.png" alt="" className="content"/>
        <p className="names">Total Patients</p>
      </div>
      <div className="totals">1</div>
    </div>

    <div id="container-grid" className="mt-3">
      <div><img src="./Images/Doctor/calender.png" alt="" className="content"/>
        <p className="names">Total day sheets</p>
      </div>
      <div className="totals">1</div>
    </div>

  </div>

 <Footer/>


        </>
    )
}
