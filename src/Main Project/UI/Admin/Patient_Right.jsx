import React from "react"
import Admin_Nav from "./Admin Reusable components/Admin_Nav"
import Footer from "../Index/Footer"

import { patient } from "../../Data/Patient_module"

export default function Patient_Right() {
  return (
    <>
      {/* right nav  */}
      <div style={{ border: "2px solid black" }} id="grid-right">

        <Admin_Nav />

        <div id="table-container">
        <div id="tables" className="text-center">
          <table className="table bg-dark text-light">
            <thead>
              <tr className="ids">
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
                      <td scope="row" className="ids">1</td>
                      <td>{data.ward_number}</td>
                      <td><img src={data.profile} alt="" className="td-image" /></td>
                      <td className="td-font">{data.name}</td>
                      <td className="td-font">{data.contact}</td>
                      <td className="status"> {data.status === "Active" ? <p>{data.status}</p> : <p style={{ backgroundColor: "red" }}>{data.status}</p>}</td>
                      <td><button className="trash"><img src="./Images/Admin/trash.png" alt="" /></button></td>
                    </tr>
                  </>
                )
              })}

            </tbody>
          </table>
        </div>
        </div>

        <Footer />
      </div>

    </>
  )
}