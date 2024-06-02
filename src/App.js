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
import Settings from "./Main Project/UI/Admin/Settings";
import Doctor_dashboard from "./Main Project/UI/Doctor/Doctor_dashboard";
import Doctor_daily_sheet from "./Main Project/UI/Doctor/Doctor_daily_sheet";
import Doctor_Settings from "./Main Project/UI/Doctor/Doctor_Settings";
import User_dashboard from "./Main Project/UI/USER/User_dashboard";
import Messages from "./Main Project/UI/USER/Messages";
import User_settings from "./Main Project/UI/USER/User_settings";
import User_Apointment from "./Main Project/UI/USER/User_Apointment";
import Doctor_checkup from "./Main Project/UI/Doctor/Doctor_checkup";
import User_visit from "./Main Project/UI/USER/User_visit";
import Admin_blog from "./Main Project/UI/Admin/Admin_blog";


function App() {
  return (
    <>
      {/* its healthcare project */}
      <BrowserRouter>
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>


        <Routes>
          <Route path="/index" element={<AddAll />} />
          <Route path="/services" element={<> <Services /> <Contact /> <Footer /> </>} />
          <Route path="/about" element={<><About />  <Contact /> <Footer /> </>} />
          <Route path="/blogs" element={<> <Blogs /> <Contact /> <Footer /> </>} />


          <Route path="/freecheckup" element={<Free_Checkup />} />
          <Route path="/ambulance" element={<Ambulance />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/medicines" element={<Medicine />} />
          <Route path="/beds" element={<Beds />} />
          <Route path="/totalCare" element={<Total_Care />} />

          <Route path="/blog_1" element={<Blog_1 />} />
          <Route path="/blog_2" element={<Blog_2 />} />
          <Route path="/blog_3" element={<Blog_3 />} />

          <Route path="/contact_us" element={<Contact_US />} />
        </Routes>

        {/* admin  */}
        <Routes>
          <Route path="/admin_dashboard" element={<Admin_dashboard />} />
          <Route path="/admin_module" element={<Admin_module />} />
          <Route path="/admin_selection" element={<Appointment_selection />} />
          <Route path="/admin_department" element={<Department_List />} />
          <Route path="/admin_patient_Module" element={<Patient_Module />} />
          <Route path="/admin_settings" element={<Settings />} />
          <Route path="/admin_blogs" element={<Admin_blog />} />
        </Routes>

        {/* doctor  */}
        <Routes>
          <Route path="/doctor_dashboard" element={<Doctor_dashboard />} />
          <Route path="/doctor_dailySheet" element={<Doctor_daily_sheet />} />
          <Route path="/doctor_settings" element={<Doctor_Settings />} />
          <Route path="/doctor_checkup" element={<Doctor_checkup />} />
        </Routes>


        {/* USER */}
        <Routes>
          <Route path="/user_dashboard" element={<User_dashboard />} />
          <Route path="/user_messages" element={<Messages />} />
          <Route path="/user_settings" element={<User_settings />} />
          <Route path="/user_appointment" element={<User_Apointment />} />
          <Route path="/User_visits" element={<User_visit />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
