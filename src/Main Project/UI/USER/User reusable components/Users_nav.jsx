import React,{useState} from "react"
import User_slider from "./User_slider";

export default function Users_nav() {

    
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
                        <p id="dash_title_patient_main">USER Dashboard</p>
                    </div>
                    <div className="mt-2">
                        <p id="dash-title_patient">Dashboard</p>
                    </div>
                </div>
                
                <button type="button" className="btn btn-info" id="pop_up" onClick={showSidebar}><img src="./Images/Navbar/menu-line.png" alt="" /> </button>
            </div>

            <User_slider showSidebar={showSidebar} sidebar={sidebar} />
        </>
    )
}