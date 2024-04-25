import React from "react"
import Contact from "../Contact";
import Footer from "../Footer";

export default function Doctors() {
    return (
        <>
            {/* grid doctors  */}
            <div id="doctor">
                <div id="doctor-img"></div>
                <div id="text">
                    <p className="text-danger">
                        Hospital doctors examine patients and diagnose and treat medical
                        conditions.
                    </p>

                    <p>
                        Hospital doctor:{" "}
                        <span className="text-primary">
                            Responsibilities | Specialities | Salaries | Employers |
                            Qualifications and training | Key skills
                        </span>
                    </p>

                    <p>
                        Hospital doctors treat people who have been admitted or referred to
                        hospital. Specific responsibilities vary greatly depending on the
                        area of specialism, but can include the following :
                    </p>

                    <ul id="points">
                        <li>
                            meeting patients, examining them and discussing their symptoms and
                            medical histories.
                        </li>

                        <li>referring patients to other medical specialists.</li>

                        <li>performing surgical procedures.</li>

                        <li>providing pre- and post-operative care.</li>

                        <li>monitoring and administering medication.</li>

                        <li>
                            liaising with colleagues including other doctors, non-medical
                            management staff and healthcare professionals.
                        </li>

                        <li>keeping patient's records up to date.</li>

                        <li>promoting health education.</li>

                        <li>managing a department and supervising junior doctors.</li>

                        <li>leading a medical team.</li>
                    </ul>

                    <p style={{ marginTop: "70px;" }}>
                        Hospital doctors can work in a number of specialties, including the
                        following :
                    </p>

                    <ul id="points">
                        <li>anaesthetics.</li>

                        <li>emergency medicine.</li>

                        <li>general medicine.</li>

                        <li>obstetrics and gynaecology.</li>

                        <li>pathology.</li>

                        <li>paediatrics.</li>

                        <li>psychiatry.</li>

                        <li>surgery.</li>

                        <li>trauma and orthopaedics.</li>
                    </ul>
                </div>
            </div>

            <Contact/>
            <Footer/>
        </>
    );
}