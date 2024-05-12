import React from "react"
import Doctor_Nav from "./Doctor reusable components/Doctor_Nav"
import Footer from "../Index/Footer"

export default function Doctor_checkup() {
    return (
        <>

            <Doctor_Nav />
            <div>
                <div className="container doc_container">

                    <form action="" method="post">
                        <div className="doc_checkup">
                            <div class="form-group">
                                <label for="names">Name</label>
                                <input type="text" class="form-control" id="names" aria-describedby="emailHelp" placeholder="Enter name" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail">Email</label>
                                <input type="email" class="form-control" id="exampleInputEmail" placeholder="Enter Email" />
                            </div>

                            <div class="form-group">
                                <label for="appointment">Next appointment</label>
                                <input type="datetime-local" class="form-control" id="appointment" placeholder="Enter Next Appointment" />
                            </div>

                            <div>
                                <label htmlFor="">Select ward</label>
                                <select className="custom-select select_doc">
                                    <option selected value={"none"}>Select Ward</option>
                                    <option value="General">General</option>
                                    <option value="General">General</option>
                                    <option value="Emergency">Emergency</option>
                                    <option value="ICU">ICU</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="beds">Select Bed Number</label>
                                <input type="number" className="form-control" id="beds" maxLength={1} minLength={100} placeholder="Select Bed" />
                            </div>
                        </div>

                        <div class="form-group" id="doc_textarea">
                            <label for="exampleFormControlTextarea1">Prescriptions for Patients</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Write something here......"></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary doc_btn">Submit</button>
                    </form>

                </div>

            </div>
            <Footer />
        </>
    )
}