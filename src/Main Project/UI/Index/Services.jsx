import React from "react"
import "../../CSS/Login.css"

import { services } from "../../Data/Services"


export default function Services() {
  return (
    <>
     {/* services  */}
    <div id="service">
      <h1 className="text-dark text-center mt-4" id="service_tag">
        OUR <span id="service" className="text-info">SERVICES</span>
      </h1>
    </div>


    <div id="services">

      {
        services.map((data)=>{
          return(
            <>
      <div key={data.id}>
        <div className="card">
          <img
            src={data.image}
            alt={data.alt}
            className="img-services"
          />
          <div className="card-body">
            <h5 className="service-name">{data.service_name}</h5>
            <p className="card-text">
              {data.description}
            </p>
            <a href={data.link} className="btn service-read" >Read More</a>
          </div>
        </div>
      </div>
            </>
          )
        })
      }
      

    </div>

    </>
  )
}