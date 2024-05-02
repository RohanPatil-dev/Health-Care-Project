import React from "react"
import Admin_Left from "./Admin Reusable components/Admin_Left"
import Settings_right from "./Settings_right"

export default function Settings() {
    return (
        <>
            <div id="grid-container">
                <Admin_Left height={"55rem"} />
                <Settings_right />
            </div>
        </>
    )
}