
import React from "react"

import "../../CSS/Login.css"

export default function Availability() {
  return (
 <>
     {/* availability  */}
    <div id="grid">
      <div>
        <img src="./Images/Availability/doctor.png" alt="doctor" className="grid-img" />
        <p className="text-dark total">120+</p>
        <p className="facility">Doctors at work</p>
      </div>
      <div>
        <img src="./Images/Availability/patient.png" alt="patient" className="grid-img" />
        <p className="text-dark total">1040+</p>
        <p className="facility">Happy Patients</p>
      </div>
      <div>
        <img src="./Images/Availability/bed.png" alt="bed" className="grid-img" />
        <p className="text-dark total">500+</p>
        <p className="facility">Bed Facility</p>
      </div>
      <div>
        <img src="./Images/Availability/hospital.png" alt="hospital" className="grid-img" />
        <p className="text-dark total">80+</p>
        <p className="facility">Hospital Available</p>
      </div>
    </div>
 </>
  )
}