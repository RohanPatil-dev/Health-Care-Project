import React from "react";
import Admin_Left from "./Admin_Left";
import Admin_module_right from "./Admin_module_right";

export default function Admin_module() {
  return (
    <>
      <div id="grid-container">
        <Admin_Left />
        <Admin_module_right />
      </div>
    </>
  );
}
