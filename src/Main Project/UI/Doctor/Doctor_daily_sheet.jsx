import React from "react"
import Doctor_Nav from "./Doctor reusable components/Doctor_Nav"
import Doctor_dashboard_left from "./Doctor reusable components/Doctor_dashboard_left"
import Footer from "../Index/Footer"

import { sheets } from "../../Data/Daily sheet"
import { Link } from "react-router-dom"

export default function Doctor_daily_sheet() {
  return (
    <>

<Doctor_Nav img={"./Images/Navbar/green-clipboard.png"} title={"Doctor DailySheet"} subtitle={"Records"}/>



      {/* sheet  */}
      <div id="doc-table" className="text-center">
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

            {sheets.map((data) => {
              return (
                <>
                  <tr key={data.id}>
                    <th scope="row" className="appointment_id">1</th>
                    <td>
                      <img src={data.img} alt="" className="td-image" />
                    </td>
                    <td className="td-font">{data.user_name}</td>
                    <td className="td-font">{data.email}</td>
                    <td className="td-font">{data.DOB}</td>
                    <td>
                      <button className="trash">
                        <img src="./Images/Admin/trash.png" alt="" />
                      </button>
                      <Link to="/doctor_checkup">
                      <button className="file ml-3"><img src="./Images/Admin/file.png" alt="" /></button>
                      </Link>
                    </td>
                  </tr>

                </>
              )
            })}


          </tbody>
        </table>
      </div>

      <Footer />

    </>
  )
}