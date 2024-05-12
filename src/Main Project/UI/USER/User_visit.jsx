import React from "react"
import Users_nav from "./User reusable components/Users_nav"

import { visits } from "../../Data/User_visits"
import Footer from "../Index/Footer"

export default function User_visit() {
    return (
        <>
            <Users_nav />

            <div className="container mt-5  visit_table">
                <table className="table bg-dark text-light text-center">
                    <thead>
                        <tr className="visit-head">
                            <th scope="col">Id</th>
                            <th scope="col">Doctor Name</th>
                            <th scope="col">Department</th>
                            <th scope="col">Visit Date</th>
                            <th scope="col">Next Appointment Date</th>
                            <th scope="col">Health Problem</th>
                        </tr>
                    </thead>
                    <tbody>

                        {visits.map(data => {
                            return (
                                <>
                                    <tr className="visit_data">
                                        <th scope="row">{data.id}</th>
                                        <td>{data.doctor_name}</td>
                                        <td>{data.Department}</td>
                                        <td>{data.Visit_Date}</td>
                                        <td>{data.Next_visit}</td>
                                        <td>{data.problem}</td>
                                    </tr>
                                </>
                            )
                        })}


                    </tbody>
                </table>
            </div>
            <Footer/>
        </>
    )
}