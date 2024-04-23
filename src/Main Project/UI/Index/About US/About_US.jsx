import React from "react";

import { contact } from "../../../Data/Contact US";
import Contact from "../Contact";
import Footer from "../Footer";

export default function About_US() {
  return (
    <>
      {/* About US */}
      <div id="Abouts_header">
        <h1 class="text-center" id="abouts_tag">
          ABOUT <span class="text-info">US</span>
        </h1>
      </div>

      <div id="abouts">
        {contact.map((data) => {
          return (
            <>
              <div key={data.id}>
                <div class="card">
                  <img
                    src={data.image}
                    alt="Card image cap"
                    class="abouts-img"
                  />
                  <div class="card-body">
                    <h5 class="abouts-name">{data.doctor}</h5>
                    <p class="card-text text-primary abouts-name">
                      {data.profession}
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
  </div>

  <Contact />
  <Footer />
    </>
  );
}
