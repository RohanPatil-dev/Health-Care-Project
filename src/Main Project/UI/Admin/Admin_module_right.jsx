import React from "react"
import Admin_Nav from "./Admin Reusable components/Admin_Nav"
import Admin_TitleBar from "./Admin Reusable components/Admin_TitleBar"
import Footer from "../Index/Footer"
import { modules } from "../../Data/Admin_module"



export default function Admin_module_right() {
    return (
        <>
            {/* right nav  */}
            <div style={{ border: "2px solid black" }} id="grid-right">
                {/* this code is use for dashboard page  */}
                <Admin_Nav />
                <Admin_TitleBar img={"./Images/Navbar/green-clipboard.png"} title={"Appointments"} subName={"Appointment List"} />


                <div id="tables" className="text-center">
                    <table className="table bg-dark text-light">
                        <thead>
                            <tr className="appointment_id">
                                <th scope="col">ID</th>
                                <th scope="col">Profile</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            { modules.map((data) => {
                               return(
                                <>
                                    <tr key={data.id}>
                                    <th scope="row" className="appointment_id">{data.id}</th>
                                    <td>
                                        <img src={data.profile} alt="profile" className="td-image" />
                                    </td>
                                    <td className="td-font">{data.name}</td>
                                    <td className="td-font">{data.email}</td>
                                    <td className="td-font">{data.date}</td>
                                    <td>
                                        <button className="file">
                                            <img src="../../Images/Admin/file.png" alt="" />
                                        </button>
                                    </td>
                                </tr>
                                </>
                               )

                            })}
                            

                        </tbody>
                    </table>
                </div>
                <Footer />
            </div>



        </>
    )
}