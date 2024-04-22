import React from "react"
import "../../CSS/Login.css"


export default function Services() {
  return (
    <>
     {/* services  */}
    <div id="service">
      <h1 className="text-dark text-center mt-4" id="service_tag">
        OUR <span id="service" className="text-info">SERVICES</span>
      </h1>
    </div>


    <div id="services">
      <div>
        <div className="card">
          <img
            src="./Images/Services/first-aid.png"
            alt="Card image cap"
            className="img-services"
          />
          <div className="card-body">
            <h5 className="service-name">Free Checkup</h5>
            <p className="card-text">
              First aid refers to medical attention that is usually administered
              immediately after the injury occurs and at the location where it
              occurred. It often consists of a one-time, short-term treatment
              and requires little technology or training to administer.
            </p>
            <a href="../HTML/Free checkup.html" className="btn service-read" >Read More</a>
          </div>
        </div>
      </div>

      <div>
        <div className="card">
          <img
            src="./Images/Services/ambulance.png"
            alt="Card image cap"
            className="img-services"
          />
          <div className="card-body">
            <h5 className="service-name">24/7 Ambulance</h5>
            <p className="card-text">
              Central Health Care's Ambulance Services in all over India is one
              of the leading businesses in the Ambulance Services. Also known
              for Ambulance Services, Domestic Ambulance Services, Dead Body
              Ambulance Services, Ventilator Ambulance Services.
            </p>
            <a href="../HTML/Ambulance.html" className="btn service-read">Read More</a>
          </div>
        </div>
      </div>

      <div>
        <div className="card">
          <img
            src="./Images/Services/doctor-2.png"
            alt="Card image cap"
            className="img-services"
          />
          <div className="card-body">
            <h5 className="service-name">Experts Consultancy</h5>
            <p className="card-text">
              Doctors diagnose disease, provide treatment, counsel patients with
              injuries, diseases or illnesses. The specific duties depend upon
              the speciality you pursue in your MBBS. Some doctors work in
              cardiology, whereas others may work in surgery , neurology,
              pulmonology or rheumatology.
            </p>
            <a href="../HTML/Doctors.html" className="btn service-read">Read More</a>
          </div>
        </div>
      </div>

      <div>
        <div className="card">
          <img
            src="./Images/Services/medicine.png"
            alt="Card image cap"
            className="img-services"
          />
          <div className="card-body">
            <h5 className="service-name">Medicines</h5>
            <p className="card-text">
              Prevention is better than cure", "A stitch in time saves nine" are
              well-known adages. Today more emphasis is placed on the prevention
              of diseases and promoting health awareness.
            </p>
            <a href="../HTML/medicines.html" className="btn service-read"  >Read More</a>
          </div>
        </div>
      </div>

      <div>
        <div className="card">
          <img
            src="./Images/Services/bed-2.png"
            alt="Card image cap"
            className="img-services"
          />
          <div className="card-body">
            <h5 className="service-name">Bed Facility</h5>
            <p className="card-text">
              Practically every function and piece of the bed will be checked in
              a service. This is to ensure that the hospital bed is still
              performing as well as it should be, and to make sure that patients
              and staff are safe to use it. The service engineer will carry out
              some visual checks on the bed first.
            </p>
            <a href="../HTML/Beds.html" className="btn service-read" >Read More</a>
          </div>
        </div>
      </div>

      <div>
        <div className="card">
          <img
            src="./Images/Services/heartbeat.png"
            alt="Card image cap"
            className="img-services"
          />
          <div className="card-body">
            <h5 className="service-name">Total Care</h5>
            <p className="card-text">
              Total patient care is a model of care overseen by a registered
              nurse who provides one-on-one care to patients. These RNs work
              with you to create a personalized, whole-person care plan for your
              loved one.
            </p>
            <a href="../HTML/Total care.html" className="btn service-read"  >Read More</a>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}