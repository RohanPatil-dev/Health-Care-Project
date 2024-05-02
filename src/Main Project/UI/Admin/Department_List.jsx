import React from "react"
import Admin_Left from "./Admin Reusable components/Admin_Left"
import Department_Right from "./Department_Right"

export default function Department_List() {
    return (
        <>
            <div id="grid-container">
                <Admin_Left height={"52rem"}/>
                <Department_Right />
            </div>
        </>
    )
}