import React,{useState} from "react";
import Admin_Slider from "./Admin_Slider";
import Admin_TitleBar from "./Admin_TitleBar";

export default function Admin_Nav() {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {return setSidebar(!sidebar)}

  return (
    <>

<Admin_TitleBar img={"./Images/Navbar/Hospital.png"} title={"Dashboard"} subName={"Dashboard F4eatures"} showSidebar={showSidebar} />


      <Admin_Slider showSidebar={showSidebar} sidebar={sidebar} />
    </>
  );
}
