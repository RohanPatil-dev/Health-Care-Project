import React,{useState} from "react"
import Doctors_slider from "./Doctors_slider"

export default function Doctor_Nav() {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {return setSidebar(!sidebar)}

  return (
    <>
      <div>
        <div id="patient_titles">
          <div id="title_image_patient">
            <img src="./Images/Navbar/green_user.png" alt="" />
          </div>
          <div className="text-info">
            <p id="dash_title_patient_main">Doctor Dashboard</p>
          </div>
          <div className="mt-2">
            <p id="dash-title_patient">Dashboard</p>
          </div>
        </div>

        <button type="button" className="btn btn-info" id="pop_up" onClick={showSidebar}>
          <img src="./Images/Navbar/menu-line.png" alt="" />
        </button>
      </div>
            <Doctors_slider showSidebar={showSidebar} sidebar={sidebar} />
    </>
  )
}