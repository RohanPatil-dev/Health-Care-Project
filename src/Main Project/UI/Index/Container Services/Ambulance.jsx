import React from "react"
import Contact from "../Contact"
import Footer from "../Footer"

export default function Ambulance() {
    return (
        <>
            {/* grid ambulance  */}
            <div id="ambulance">
                <div id="ambulance-img"></div>
                <div id="ambulance-text">
                    <p class="text-danger">Ambulance Service & Its Importance in Society</p>

                    <p>Increase in medical ailments has led to the rise in hospitals and emergency medical services assisting patients who require emergency medical assistance at critical moments helping them to reach the hospital on time thus saving their life.</p>
                    <p>Private and public ambulance transport services are operating in more numbers today as an inevitable service servicing the critical patients at crucial moments.</p>
                    <p>Ambulance operating centres are set up at every hospital and private EMS. These Ambulance operating centres function with adequate ambulance transport services to offer immediate medical care for patients. Private ambulance transport services depict a consistent rise in the growth curve each year offering non-emergency services unlike hospital ambulance transport services which primarily functions for emergency needs.</p>
                    <p>Some of the non-emergency services include shifting patients from one hospital to another, transporting patients for any scanning or laboratory services to the relevant facilities or patients with any travelling disabilities in normal vehicles to hospitals for treatments.</p>


                    <p class="text-danger">Let us discuss few points about paramedics who are the spine of ambulance transport services.</p>

                    <ol type="1" id="ambulance-list">
                        <li>Paramedics or para medical professionals are first gods treating patients even before doctors (pre-hospital care) thus saving patients through immediate medical procedures ensuring the vitals stable before reaching hospitals for further treatments.</li>

                        <li>Paramedics are trained healthcare professionals sometimes equivalent to doctors, authorized to attend patients with required medications and procedures.</li>

                        <li>Paramedics role were established before World War I and their service was mostly rendered to soldiers at battle field. In those days their function was closely associated with military. Later, ambulance services with paramedics were put into function to offer immediate medical care for civilians as well.</li>

                        <li>Education level, standards, functions and skills of paramedics varies with countries.</li>

                        <li>However. certain standard functionalities remain common such as being trained to practice CPR procedures for cardiac arrest patients, usage of defibrillators, certain analgesic, paralytics and sedative medications for pain control, first aid to treat burns, fractures, child birth complications, spine injury, airway management, blood control etc.,</li>

                        <li>Paramedical council of India was established in 2005, motivating youngsters to get enrolled in many of their affiliated para medical colleges and institutes to serve the nation offering immediate medical care to patients especially to reach out rural India.</li>

                        <li>It is one of the noble professions gaining awareness in India. Earlier physiotherapy did not gain much recognition as today where physiotherapists are looked as saviours offering treatments as an alternate to surgical procedures in most of the cases and post surgery maintenance for quick recovery to normal life style.</li>

                        <li>One should respect the noble service of paramedics who form an integral part of ambulance services.</li>

                        <li>Youth of our nation should involve themselves in such noble service and careers rather wasting their resource and potential indulging in unwise activities.</li>

                        <li>Moreover, the government should take initiatives to improvise the standards, importance, skills, training and pay scale of paramedics which not only lures young India into this profession but also increases adequate emergency medical assistance to the needy, thus propelling its importance in society.</li>

                    </ol>
                </div>
            </div>

            <Contact />
            <Footer />
        </>
    )
}