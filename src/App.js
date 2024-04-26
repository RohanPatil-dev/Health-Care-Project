import React from "react";
import "./App.css";
import "./style.css";

import Login from "./Main Project/UI/login and signup/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Main Project/UI/login and signup/Signup";
import AddAll from "./Main Project/UI/Index/AddAll";

import Nav from "./Main Project/UI/Index/Nav";

import Blog_1 from "./Main Project/UI/Index/Container Blog/Blog_1";
import Blog_2 from "./Main Project/UI/Index/Container Blog/Blog_2";
import Blog_3 from "./Main Project/UI/Index/Container Blog/Blog_3";

import Free_Checkup from "./Main Project/UI/Index/Container Services/Free_Checkup";
import Ambulance from "./Main Project/UI/Index/Container Services/Ambulance";
import Doctors from "./Main Project/UI/Index/Container Services/Doctors";
import Medicine from "./Main Project/UI/Index/Container Services/Medicine";
import Beds from "./Main Project/UI/Index/Container Services/Beds";
import Total_Care from "./Main Project/UI/Index/Container Services/Total_Care";
import Contact_US from "./Main Project/UI/Index/About US/About_US";
import Services from "./Main Project/UI/Index/Services";
import About from "./Main Project/UI/Index/About";
import Blogs from "./Main Project/UI/Index/Blogs";
import Contact from "./Main Project/UI/Index/Contact";
import Footer from "./Main Project/UI/Index/Footer";
import Admin_dashboard from "./Main Project/UI/Admin/Admin_dashboard";
import Admin_module from "./Main Project/UI/Admin/Admin_module";
import Appointment_selection from "./Main Project/UI/Admin/Appointment_selection";
import Department_List from "./Main Project/UI/Admin/Department_List";
import Patient_Module from "./Main Project/UI/Admin/Patient_Module";

function App() {


  return (
    <>
      {/* its healthcare project */}
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        </Routes>

        <Nav/>
        <Routes>
        <Route path="/index" element={<AddAll/>}/>
        <Route path="/services" element={<> <Services/> <Contact/> <Footer/> </>}/>
        <Route path="/about" element={<><About />  <Contact/> <Footer/> </>}/>
        <Route path="/blogs" element={<> <Blogs /> <Contact/> <Footer/> </>} />
   

        <Route path="/freecheckup" element={<Free_Checkup />}/>
        <Route path="/ambulance" element={<Ambulance />}/>
        <Route path="/doctors" element={<Doctors />}/>
        <Route path="/medicines" element={<Medicine />}/>
        <Route path="/beds" element={<Beds />}/>
        <Route path="/totalCare" element={<Total_Care/>}/>

        <Route path="/blog_1" element={<Blog_1 />}/>
        <Route path="/blog_2" element={<Blog_2 />}/>
        <Route path="/blog_3" element={<Blog_3 />}/>

        <Route path="/contact_us" element={<Contact_US />}/>
        </Routes>

        <Routes>
            <Route path="/admin_dashboard" element={<Admin_dashboard/>}/>
            <Route path="/admin_module" element={<Admin_module/>}/>
            <Route path="/admin_selection" element={<Appointment_selection/>}/>
            <Route path="/admin_department" element={<Department_List/>}/>
            <Route path="/Patient_Module" element={<Patient_Module/>}/>
        </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
