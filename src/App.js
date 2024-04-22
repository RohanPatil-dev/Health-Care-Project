import React from "react";
import "./App.css";
import "./style.css";
import Login from "./Main Project/UI/login and signup/Login";

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Signup from "./Main Project/UI/login and signup/Signup";
import AddAll from "./Main Project/UI/Index/AddAll";

function App() {
  return (
    <>
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/index" element={<AddAll/>}/>
       </Routes>
    </BrowserRouter>


      
      
    </>
  );
}

export default App;
