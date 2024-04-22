
import React from "react"

import "../../CSS/Login.css"

export default function Availability() {
  return (
 <>
     {/* availability  */}
    <div id="grid">
      <div>
        <img src="./Images/Availability/doctor.png" alt="doctor" class="grid-img" />
        <p class="text-dark total">120+</p>
        <p class="facility">Doctors at work</p>
      </div>
      <div>
        <img src="./Images/Availability/patient.png" alt="patient" class="grid-img" />
        <p class="text-dark total">1040+</p>
        <p class="facility">Happy Patients</p>
      </div>
      <div>
        <img src="./Images/Availability/bed.png" alt="bed" class="grid-img" />
        <p class="text-dark total">500+</p>
        <p class="facility">Bed Facility</p>
      </div>
      <div>
        <img src="./Images/Availability/hospital.png" alt="hospital" class="grid-img" />
        <p class="text-dark total">80+</p>
        <p class="facility">Hospital Available</p>
      </div>
    </div>
 </>
  )
}