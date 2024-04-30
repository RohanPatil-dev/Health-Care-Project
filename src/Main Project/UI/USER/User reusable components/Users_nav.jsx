import React from "react"

export default function Users_nav() {
    return (
        <>
            <div>
                <div id="patient_titles">
                    <div id="title_image_patient">
                        <img src="../../Images/Navbar/green_user.png" alt="" />
                    </div>
                    <div class="text-info">
                        <p id="dash_title_patient_main">USER Dashboard</p>
                    </div>
                    <div class="mt-2">
                        <p id="dash-title_patient">Dashboard</p>
                    </div>
                </div>
                
                <button type="button" class="btn btn-info" id="pop_up"><img src="../../Images/Navbar/menu-line.png" alt="" /></button>
            </div>
        </>
    )
}