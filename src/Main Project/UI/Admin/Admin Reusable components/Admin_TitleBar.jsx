import React from "react";

export default function Admin_TitleBar(props) {
  return (
    <>
      <div id="Dashboard_titles">
        <div id="title_image">
          <img src={props.img} alt="" class="mt-0" />
        </div>
        <div class="text-info">
          <p id="dash_title">{props.title}</p>
        </div>
        <div class="mt-3">
          <p id="dash-title">{props.subName}</p>
        </div>
      </div>
    </>
  );
}
