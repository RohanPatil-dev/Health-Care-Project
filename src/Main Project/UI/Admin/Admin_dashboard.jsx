import React from "react"
import Admin_Left from "./Admin Reusable components/Admin_Left"
import Admin_Right from "./Admin_Right"

export default function Admin_dashboard() {
  return (
    <>
           <div id="grid-container">
            <Admin_Left/>
            <Admin_Right/>
           </div>
    </>
  )
}