import React from "react"

export default function Contact() {
  return (
    <>
       
      {/* grid-contact  */}
    <div id="grid-contact-type">
      <div id="grid-one">
        <h1 className="text-light">Central Health Care</h1>
        <p className="text-light">
          An innovative Healthcare IT Solution,Featuring a web-based Hospital
          Management System,Designed to Streamline Opertations,Enhance Patient
          Care and Improve Overall Efficiency.
        </p>
      </div>

      <div id="grid-two">
        <h4 className="text-light">Contact Info</h4>
        <p><a href=""><img src="../Images/footer/phone.png" alt="phone"/>+123-456-7890</a></p>
        <p><a href=""><img src="../Images/footer/phone.png" alt="phone"/>+111-222-3333</a></p>
        <p><a href=""><img src="../Images/footer/mail.png" alt="mail"/>Central Care@gamail.com</a></p>
        <p><a href=""><img src="../Images/footer/mail.png" alt="mail"/>Health Care@gamail.com</a></p>
        <p><a href=""><img src="../Images/footer/map.png" alt="map" style={{height: "32px;"}}/>Mumbai,india - 400104</a></p>
      </div>

   
      <div id="grid-three">
        <h4 className="text-light">Follows Us</h4>
        <p><a href=""><img src="../Images/footer/facebook.png" alt="Facebook" />FaceBook</a></p>
        <p><a href=""><img src="../Images/footer/twitter.png" alt="Twitter" />Twitter</a></p>
        <p><a href=""><img src="../Images/footer/insta.png" alt="Instagram" />Instagram</a></p>
        <p><a href=""><img src="../Images/footer/linkedin.png" alt="Linkedin" />Linkedin</a></p>
      </div>
    </div>

    </>
  )
}