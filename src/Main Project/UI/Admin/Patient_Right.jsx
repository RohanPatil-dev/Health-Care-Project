import React from "react"
import Admin_Nav from "./Admin Reusable components/Admin_Nav"
import Admin_TitleBar from "./Admin Reusable components/Admin_TitleBar"
import Footer from "../Index/Footer"

import { patient } from "../../Data/Patient_module"

export default function Patient_Right() {
  return (
    <>
      {/* right nav  */}
      <div style={{ border: "2px solid black" }} id="grid-right">

        <Admin_Nav />
        <Admin_TitleBar title={"Patient Module"} subName={"Patients list"} />

        <div id="tables" class="text-center">
          <table class="table bg-dark text-light">
            <thead>
              <tr class="ids">
                <th scope="col">Ward name</th>
                <th scope="col">Bed Number</th>
                <th scope="col">Profile</th>
                <th scope="col">Name</th>
                <th scope="col">Contact</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

              {patient.map((data) => {
                return (
                  <>
                    <tr key={data.id}>
                      <th scope="row" class="ids">1</th>
                      <td>{data.ward_number}</td>
                      <td><img src={data.profile} alt="" class="td-image" /></td>
                      <td class="td-font">{data.name}</td>
                      <td class="td-font">{data.contact}</td>
                      <td class="status"> {data.status === "Active" ? <p>{data.status}</p> : <p style={{ backgroundColor: "red" }}>{data.status}</p>}</td>
                      <td><button class="trash"><img src="./Images/Admin/trash.png" alt="" /></button></td>
                    </tr>
                  </>
                )
              })}

              <tr>
                <th scope="row" class="ids">1</th>
                <td>1</td>
                <td><img src="../../Images/doctor1.png" alt="" class="td-image" /></td>
                <td class="td-font">Rohan Patil</td>
                <td class="td-font">9274949249</td>
                <td class="status"><p>Active</p></td>
                <td><button class="trash"><img src="../../Images/Admin/trash.png" alt="" /></button></td>
              </tr>

            </tbody>
          </table>
        </div>

        <Footer />
      </div>

    </>
  )
}