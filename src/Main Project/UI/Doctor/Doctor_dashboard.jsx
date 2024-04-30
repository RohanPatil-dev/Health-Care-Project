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
    <div id="container-grid" class="mt-3">
      <div><img src="./Images/User/clipboard.png" alt="" class="content"/>
        <p class="names">Total Appointment</p>
      </div>
      <div class="totals">3</div>
    </div>

    <div id="container-grid" class="mt-3">
      <div><img src="./Images/User/message.png" alt="" class="content"/>
        <p class="names">Total Patients</p>
      </div>
      <div class="totals">1</div>
    </div>

    <div id="container-grid" class="mt-3">
      <div><img src="./Images/Doctor/calender.png" alt="" class="content"/>
        <p class="names">Total day sheets</p>
      </div>
      <div class="totals">1</div>
    </div>

  </div>

 <Footer/>


        </>
    )
}
