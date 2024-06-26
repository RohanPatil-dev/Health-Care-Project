import React from "react";
import Admin_Nav from "./Admin Reusable components/Admin_Nav";
import Footer from "../Index/Footer";

export default function Admin_Selection_Right() {
  return (
    <>
      {/* right nav */}
      <div style={{ border: "2px solid black" }} id="grid-right">
      <Admin_Nav img={"./Images/Navbar/green_user.png"} title={"Appointment Module"} subName={"Appointment Selections"}/>

        <div id="add_appointment">
          <form action="">
            <div id="directInfo_added">
              <h2 className="text-primary">
                <i className="fa fa-bold" aria-hidden="true">
                  Patient's Information
                </i>
              </h2>
              <div>
                <img
                  src="./Images/doctor1.png"
                  alt=""
                  height="100px"
                  style={{ borderRadius: "30px" }}
                />
              </div>
              <p>
                Patient's Name : <span>Rohan Patil</span>
              </p>
              <p>
                Patient's Email : <span>rohanpatil51220001@gmail.com</span>
              </p>
              <p>
                Disease Name : <span>Dental</span>
              </p>
              <p>
                Requested Date : <span>2001-12-05</span>
              </p>
            </div>

            <div id="form-grid">
              <div className="select">
                <select className="custom-select selected" >
                  <option selected>Select Your Doctor</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div>
                <input type="datetime-local" name="" id="datetime-local" />
              </div>
            </div>

            <div>
              <div className="form-group textArea">
                <label htmlFor="exampleFormControlTextarea1">Add message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Write something here......."></textarea>
              </div>
            </div>

            <div>
              <button type="submit" className="bg-primary p-2" id="submit">
                Submit
              </button>
            </div>
          </form>
        </div>

        <Footer />
      </div>
    </>
  );
}
