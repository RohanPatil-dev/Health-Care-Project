import React from "react"
import Admin_Left from "./Admin Reusable components/Admin_Left"
import Patient_Right from "./Patient_Right"

export default function Patient_Module() {
  return (
    <>
      <div id="grid-container">
        <Admin_Left height={"49rem"}/>
        <Patient_Right />
      </div>
    </>
  )
}