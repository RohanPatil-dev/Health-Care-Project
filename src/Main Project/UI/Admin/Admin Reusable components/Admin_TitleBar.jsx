import React from "react";

export default function Admin_TitleBar(props) {
  return (
    <>
      <div id="Dashboard_titles">
        <div id="title_image">
          <img src={props.img} alt="" className="mt-0" />
        </div>
        <div className="text-info">
          <p id="dash_title">{props.title}</p>
        </div>
        <div className="mt-3">
          <p id="dash-title">{props.subName}</p>
        </div>
        
        <button type="button" className="btn btn-info" id="pop_up" onClick={props.showSidebar}>
          <img src="./Images/Navbar/menu-line.png" alt="" />
        </button>
      </div>
    </>
  );
}
