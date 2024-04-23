import React from "react";
import "./App.css";
import "./style.css";


import Login from "./Main Project/UI/login and signup/Login";

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Signup from "./Main Project/UI/login and signup/Signup";
import AddAll from "./Main Project/UI/Index/AddAll";

import Nav from "./Main Project/UI/Index/Nav";

import Blog_1 from "./Main Project/UI/Index/Container Blog/Blog_1";
import Blog_2 from "./Main Project/UI/Index/Container Blog/Blog_2";
import Blog_3 from "./Main Project/UI/Index/Container Blog/Blog_3";





function App() {
  return (
    <>
    <BrowserRouter>
      <Nav/>
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/index" element={<AddAll/>}/>
        <Route path="/blog_1" element={<Blog_1 />}/>
        <Route path="/blog_2" element={<Blog_2 />}/>
        <Route path="/blog_3" element={<Blog_3 />}/>
       </Routes>
    </BrowserRouter>


      
      
    </>
  );
}

export default App;
