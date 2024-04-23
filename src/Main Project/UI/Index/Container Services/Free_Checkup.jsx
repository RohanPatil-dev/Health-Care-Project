import React from "react"
import Contact from "../Contact"
import Footer from "../Footer"

export default function Free_Checkup() {
  return (
    <>
        {/* grid free checkup */}
    <div id="free-checkup">
        <div id="checkup-img"></div>
        <div id="checkup-text">
            <p>Central Health Care are unique because they can help identify potential health problems or
                risk factors for certain diseases early on. It allows for earlier treatment and management of these
                conditions, improving outcomes and overall health.</p>

            <p>Blood tests are often a part of health check-ups because they can provide valuable information about a
                person's overall health and help to detect a wide range of conditions, including infections, anaemia,
                and diabetes. Blood tests can also be used to monitor specific treatments' effectiveness and check for
                medical procedures for the fastest recovery.</p>

            <p>It is important to follow the recommendations of a healthcare provider for the timing and frequency of
                health check-ups and blood tests, as these can vary depending on factors such as age, gender, and
                personal and family medical history.</p>


            <p>There are many options for lab testing near you, including pathological labs that offer specialised tests
                such as Vitamin D and Vitamin B12, Thyroid Function Test, HbA1c Test, Lipid Test, Kidney Function Test,
                Liver Function Test, and CBC Test. We at Lupin Diagnostics provide a complete range of blood tests and
                Preventive Health Check-ups with FREE Home Sample Collection services for those who prefer the
                convenience of getting a blood test at home.</p>

            <p>Central Health Care also provides Full Body Check-ups at various locations where we have a diagnostic
                centres near you in cities like Mumbai, Pune, Kolhapur, Nagpur, Nashik, Indore, Bhopal, Raipur, Solapur,
                Ahmednagar, Latur, Jalna, Kolkata, Guwahati, Patna, Ranchi, Siliguri, Bankura, Burdwan, Dhanbad,
                Varanasi, Prayagraj, Bengaluru, Hyderabad, Chennai and Vijayawada.</p>

            <p>Our laboratories follow guidelines as laid down by the National Accreditation Board for Testing and
                Calibration Laboratories (NABL), an accreditation body governed by the Quality Council of India. Many of
                our laboratories are accredited by the National Accreditation Board for Testing and Calibration
                Laboratories (NABL), the highest accreditation level in India.</p>

            <p>Central Health Care have won Best Pathology Lab (National Category) at the Economic Times ET Healthcare
                Awards 2022.</p>
        </div>

        
    {/* check-list  */}
    <div id="check-list">
        <div>
          <img src="../Images/Services/blood.png" alt="doctor" class="grid-img" />
          <p class="test">BLOOD TEST</p>
        </div>
        <div>
          <img src="../Images/Services/sugar.jpeg" alt="patient" class="grid-img" />
          <p class="test">SUGAR TEST</p>
        </div>
        <div>
          <img src="../Images/Services/urine.jpeg" alt="bed" class="grid-img" />
          <p class="test">URINE TEST</p>
        </div>
        <div>
          <img src="../Images/Services/thyroid.jpeg" alt="hospital" class="grid-img" />
          <p class="test">THYROID TEST</p>
        </div>
        <div>
            <img src="../Images/Services/x-ray.png" alt="hospital" class="grid-img" />
            <p class="test">X-RAY TEST</p>
          </div>
      </div>
    </div>

    <Contact />
    <Footer/>
    </>
  )
}