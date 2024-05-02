import React from "react"

import "../../../CSS/Admin_dashboard.css"

export default function Admin_Left(props) {
    return (
    <>
                {/* left inline-block  */}
                <div id="grid-user" style={{height : props.height}}>
                    <div id="dashboard_name">Central Care Hospital</div>

                    <div id="user_pic" style={{border: "2px solid black"}}>
                          <div>
                          <img
                                src="./Images/doctor1.png"
                                alt=""
                                height={"70px"}
                                id="admin_image"
                            />
                          </div>

                          <div>
                            <p id="admin_name">Rohan Patil</p>
                        </div>

                        <div>
                            <p id="admin_title">ADMIN</p>
                        </div>
                    </div>

                    <div className="text-left text-light ml-2" id="elements">
                        <div>
                            <a href=""
                            ><img
                                    src="../../Images/Admin/dashboard.png"
                                    alt=""
                                    height={"20px"}
                                    className="mb-1"
                                /><span className="ml-1">Dashboard</span></a>
                        </div>
                        <div>
                            <a href=""
                            ><img
                                    src="../../Images/Admin/department.png"
                                    alt=""
                                    height={"20px"}
                                    className="mb-1"
                                /><span className="ml-1">Department Module</span></a>
                        </div>
                        <div>
                            <a href=""
                            ><img
                                    src="../../Images/Admin/user-group.png"
                                    alt=""
                                    height={"20px"}
                                    className="mb-1"
                                /><span className="ml-1">User Module</span></a>
                        </div>
                        <div>
                            <a href=""
                            ><img
                                    src="../../Images/Admin/doctors.png"
                                    alt=""
                                    height="20px"
                                    className="mb-1"
                                /><span className="ml-1">Doctor Module</span></a>
                        </div>
                        <div>
                            <a href="./patient_module.html"
                            ><img
                                    src="../../Images/Admin/user.png"
                                    alt=""
                                    height="20px"
                                    className="mb-1"
                                /><span className="ml-1">Patient Module</span></a>
                        </div>
                        <div>
                            <a href=""
                            ><img
                                    src="../../Images/Admin/board.png"
                                    alt=""
                                    height="20px"
                                    className="mb-1"
                                /><span className="ml-1">Appointment Module</span></a>
                        </div>
                        <div>
                            <a href=""
                            ><img
                                    src="../../Images/Admin/first-aid.png"
                                    alt=""
                                    height="20px"
                                    className="mb-1"
                                /><span className="ml-1">Treatment Module</span></a>
                        </div>
                        <div>
                            <a href=""
                            ><img
                                    src="../../Images/Admin/diagnosis.png"
                                    alt=""
                                    height="20px"
                                    className="mb-1"
                                /><span className="ml-1">Diagnosis Module</span></a>
                        </div>
                        <div>
                            <a href=""
                            ><img
                                    src="../../Images/Admin/medicine.png"
                                    alt=""
                                    height="20px"
                                    className="mb-1"
                                /><span className="ml-1">Medicine Module</span></a>
                        </div>
                        <div>
                            <a href=""
                            ><img
                                    src="../../Images/Admin/beds.png"
                                    alt=""
                                    height="20px"
                                    className="mb-1"
                                /><span className="ml-1">Bed Module</span></a>
                        </div>
                        <div>
                            <a href=""
                            ><img
                                    src="../../Images/Admin/settings.png"
                                    alt=""
                                    height="20px"
                                    className="mb-1"
                                /><span className="ml-1">Settings</span></a>
                        </div>
                    </div>
                </div>
            </>
            )
}