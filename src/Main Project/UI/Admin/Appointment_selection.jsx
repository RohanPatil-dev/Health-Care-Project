import React from "react";
import Admin_Left from "./Admin Reusable components/Admin_Left";
import Admin_Selection_Right from "./Admin_Selection_Right";

export default function Appointment_selection() {
  return (
    <>
      <div id="grid-container">
        <Admin_Left height={"58rem"} />
        <Admin_Selection_Right/>
      </div>
    </>
  );
}
