import React from "react"
import Admin_Nav from "./Admin Reusable components/Admin_Nav"
import Admin_TitleBar from "./Admin Reusable components/Admin_TitleBar"
import Footer from "../Index/Footer"

export default function Admin_module_right() {
    return (
        <>
            {/* right nav  */}
            <div style={{ border: "2px solid black" }} id="grid-right">
                {/* this code is use for dashboard page  */}
                <Admin_Nav />
                <Admin_TitleBar img={"./Images/Navbar/green-clipboard.png"} title={"Appointments"} subName={"Appointment List"} />

                <div id="tables" class="text-center">
                    <table class="table bg-dark text-light">
                        <thead>
                            <tr class="appointment_id">
                                <th scope="col">ID</th>
                                <th scope="col">Profile</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" class="appointment_id">1</th>
                                <td>
                                    <img src="../../Images/doctor1.png" alt="" class="td-image" />
                                </td>
                                <td class="td-font">Rohan Patil</td>
                                <td class="td-font">rohanpatil5122001@gmail.com</td>
                                <td class="td-font">05-12-2001</td>
                                <td>
                                    <button class="file">
                                        <img src="../../Images/Admin/file.png" alt="" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="appointment_id">1</th>
                                <td>
                                    <img src="../../Images/doctor1.png" alt="" class="td-image" />
                                </td>
                                <td class="td-font">Rohan Patil</td>
                                <td class="td-font">rohanpatil5122001@gmail.com</td>
                                <td class="td-font">05-12-2001</td>
                                <td>
                                    <button class="file">
                                        <img src="../../Images/Admin/file.png" alt="" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="appointment_id">1</th>
                                <td>
                                    <img src="../../Images/doctor1.png" alt="" class="td-image" />
                                </td>
                                <td class="td-font">Rohan Patil</td>
                                <td class="td-font">rohanpatil5122001@gmail.com</td>
                                <td class="td-font">05-12-2001</td>
                                <td>
                                    <button class="file">
                                        <img src="../../Images/Admin/file.png" alt="" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="appointment_id">1</th>
                                <td>
                                    <img src="../../Images/doctor1.png" alt="" class="td-image" />
                                </td>
                                <td class="td-font">Rohan Patil</td>
                                <td class="td-font">rohanpatil5122001@gmail.com</td>
                                <td class="td-font">05-12-2001</td>
                                <td>
                                    <button class="file">
                                        <img src="../../Images/Admin/file.png" alt="" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="appointment_id">1</th>
                                <td>
                                    <img src="../../Images/doctor1.png" alt="" class="td-image" />
                                </td>
                                <td class="td-font">Rohan Patil</td>
                                <td class="td-font">rohanpatil5122001@gmail.com</td>
                                <td class="td-font">05-12-2001</td>
                                <td>
                                    <button class="file">
                                        <img src="../../Images/Admin/file.png" alt="" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="appointment_id">1</th>
                                <td>
                                    <img src="../../Images/doctor1.png" alt="" class="td-image" />
                                </td>
                                <td class="td-font">Rohan Patil</td>
                                <td class="td-font">rohanpatil5122001@gmail.com</td>
                                <td class="td-font">05-12-2001</td>
                                <td>
                                    <button class="file">
                                        <img src="../../Images/Admin/file.png" alt="" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="appointment_id">1</th>
                                <td>
                                    <img src="../../Images/doctor1.png" alt="" class="td-image" />
                                </td>
                                <td class="td-font">Rohan Patil</td>
                                <td class="td-font">rohanpatil5122001@gmail.com</td>
                                <td class="td-font">05-12-2001</td>
                                <td>
                                    <button class="file">
                                        <img src="../../Images/Admin/file.png" alt="" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="appointment_id">1</th>
                                <td>
                                    <img src="../../Images/doctor1.png" alt="" class="td-image" />
                                </td>
                                <td class="td-font">Rohan Patil</td>
                                <td class="td-font">rohanpatil5122001@gmail.com</td>
                                <td class="td-font">05-12-2001</td>
                                <td>
                                    <button class="file">
                                        <img src="../../Images/Admin/file.png" alt="" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="appointment_id">1</th>
                                <td>
                                    <img src="../../Images/doctor1.png" alt="" class="td-image" />
                                </td>
                                <td class="td-font">Rohan Patil</td>
                                <td class="td-font">rohanpatil5122001@gmail.com</td>
                                <td class="td-font">05-12-2001</td>
                                <td>
                                    <button class="file">
                                        <img src="../../Images/Admin/file.png" alt="" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="appointment_id">1</th>
                                <td>
                                    <img src="../../Images/doctor1.png" alt="" class="td-image" />
                                </td>
                                <td class="td-font">Rohan Patil</td>
                                <td class="td-font">rohanpatil5122001@gmail.com</td>
                                <td class="td-font">05-12-2001</td>
                                <td>
                                    <button class="file">
                                        <img src="../../Images/Admin/file.png" alt="" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="appointment_id">1</th>
                                <td>
                                    <img src="../../Images/doctor1.png" alt="" class="td-image" />
                                </td>
                                <td class="td-font">Rohan Patil</td>
                                <td class="td-font">rohanpatil5122001@gmail.com</td>
                                <td class="td-font">05-12-2001</td>
                                <td>
                                    <button class="file">
                                        <img src="../../Images/Admin/file.png" alt="" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="appointment_id">1</th>
                                <td>
                                    <img src="../../Images/doctor1.png" alt="" class="td-image" />
                                </td>
                                <td class="td-font">Rohan Patil</td>
                                <td class="td-font">rohanpatil5122001@gmail.com</td>
                                <td class="td-font">05-12-2001</td>
                                <td>
                                    <button class="file">
                                        <img src="../../Images/Admin/file.png" alt="" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="appointment_id">1</th>
                                <td>
                                    <img src="../../Images/doctor1.png" alt="" class="td-image" />
                                </td>
                                <td class="td-font">Rohan Patil</td>
                                <td class="td-font">rohanpatil5122001@gmail.com</td>
                                <td class="td-font">05-12-2001</td>
                                <td>
                                    <button class="file">
                                        <img src="../../Images/Admin/file.png" alt="" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="appointment_id">1</th>
                                <td>
                                    <img src="../../Images/doctor1.png" alt="" class="td-image" />
                                </td>
                                <td class="td-font">Rohan Patil</td>
                                <td class="td-font">rohanpatil5122001@gmail.com</td>
                                <td class="td-font">05-12-2001</td>
                                <td>
                                    <button class="file">
                                        <img src="../../Images/Admin/file.png" alt="" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="appointment_id">1</th>
                                <td>
                                    <img src="../../Images/doctor1.png" alt="" class="td-image" />
                                </td>
                                <td class="td-font">Rohan Patil</td>
                                <td class="td-font">rohanpatil5122001@gmail.com</td>
                                <td class="td-font">05-12-2001</td>
                                <td>
                                    <button class="file">
                                        <img src="../../Images/Admin/file.png" alt="" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="appointment_id">1</th>
                                <td>
                                    <img src="../../Images/doctor1.png" alt="" class="td-image" />
                                </td>
                                <td class="td-font">Rohan Patil</td>
                                <td class="td-font">rohanpatil5122001@gmail.com</td>
                                <td class="td-font">05-12-2001</td>
                                <td>
                                    <button class="file">
                                        <img src="../../Images/Admin/file.png" alt="" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Footer/>
            </div>

   

 </>
    )
}