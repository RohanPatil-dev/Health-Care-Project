import React,{useState} from "react"
import { Link } from "react-router-dom"


import { AiOutlineClose } from "react-icons/ai"
import { Sidebar_data } from "../../../Data/Slider"

import { IconContext } from "react-icons"

export default function Doctors_slider(props) {

  return(
<IconContext.Provider value={{color : "white"}}>

  <nav className={props.sidebar ? "nav-menu active" : "nav-menu"}>
    <ul className="nav-menu-items" onClick={props.showSidebar}>
        <li className="navbar-toggle">
          <Link to="#" className="menu-bars">
              <AiOutlineClose/>
          </Link>
        </li>
        {
          Sidebar_data.map((value,index)=>{
            return(
              <>
                  <li key={index} className={value.c_Name}><Link to={value.path}>{value.icon} <span>{value.title}</span></Link></li>
              </>
            )
          })
        }
    </ul>
  </nav>
  </IconContext.Provider>
  )
}