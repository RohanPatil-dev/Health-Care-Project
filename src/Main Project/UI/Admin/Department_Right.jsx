import React from "react"
import Department_Modal from "./Department_Modal"
import Admin_Nav from "./Admin Reusable components/Admin_Nav"
import Footer from "../Index/Footer"

import { department } from "../../Data/Department"

export default function Department_Right() {
    return (
        <>
            <Department_Modal />

            {/* right nav  */}
            <div style={{ border: "2px solid black" }} id="grid-right">

                <Admin_Nav />

                <div id="staff-container">
                    <button
                        type="button"
                        id="staff"
                        data-toggle="modal"
                        data-target="#exampleModal"
                    >
                        Add new staff
                    </button>
                </div>

                <div id="department">
                    {
                        department.map((data) => {
                            return (
                                <>
                                    <div className="department-doc" key={data.id}>
                                        <img src={data.img} alt="" />
                                        <p>{data.dep_name}</p>
                                        <button type="button">See our doctors</button>
                                    </div>
                                </>
                            )
                        })
                    }



                </div>

                <Footer />
            </div>
        </>
    )
}