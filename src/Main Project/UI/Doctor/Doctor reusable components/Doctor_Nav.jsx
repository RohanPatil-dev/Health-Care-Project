import React,{useState} from "react"
import Doctors_slider from "./Doctors_slider"

export default function Doctor_Nav(props) {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {return setSidebar(!sidebar)}

  return (
    <>
      <div>
        <div id="patient_titles">
          <div id="title_image_patient">
            <img src={props.img} alt="" />
          </div>
          <div className="text-info">
            <p id="dash_title_patient_main">{props.title}</p>
          </div>
          <div className="mt-2">
            <p id="dash-title_patient">{props.subtitle}</p>
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