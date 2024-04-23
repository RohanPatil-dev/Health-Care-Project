import React from "react"

import Header from "./Header"
import Availability from "./Availability"
import Services from "./Services"
import About from "./About"
import Blogs from "./Blogs"
import Contact from "./Contact"
import Footer from "./Footer"


export default function AddAll() {
    
return(
    <>
     <Header/>
     <Availability/>
     <Services/>
     <About />
     <Blogs />
     <Contact />
     <Footer />
    </>
  )
}