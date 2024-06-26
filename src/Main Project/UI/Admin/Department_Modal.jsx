import React from "react"

export default function Department_Modal() {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">Add staff</h3>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div id="dep-add-img">
                <label for="dep-img">Add Image : </label>
                <img
                  src="./Images/doctor1.png"
                  id="dep-img"
                  height="60px"
                  alt=""
                />
                <input type="file" name="" id="dep-img-file" />
              </div>

              <div id="dep-name">
                <label for="dep-staff">Select Department name :</label>
                <select name="" id="dep-staff">
                  <option value="">Dermatology</option>
                  <option value="">Optometry</option>
                  <option value="">General Sergery</option>
                  <option value="">Cardiology</option>
                  <option value="">Virology</option>
                  <option value="">Neurosergery</option>
                  <option value="">Orthopedics</option>
                  <option value="">Stomatology</option>
                  <option value="">Obstetrics</option>
                  <option value="">Nersing</option>
                  <option value="">Pharmasist</option>
                  <option value="">Accountant</option>
                  <option value="">X-Ray</option>
                </select>
              </div>

              <div className="staff-label">
                <label for="staff-input-text">Name :</label>
                <input type="text" id="staff-input-text" placeholder="Enter your name....." />
              </div>

              <div className="staff-label">
                <label for="staff-input-email">Email :</label>
                <input type="email" id="staff-input-email" placeholder="Enter your email....." />
              </div>

              <div className="staff-label">
                <label for="staff-input-age">Age :</label>
                <input type="number" id="staff-input-age" placeholder="Enter your number....." />
              </div>

              <div className="staff-label">
                <label for="staff-input-phone">Phone :</label>
                <input type="tel" id="staff-input-phone" placeholder="Enter your contact number....." />
              </div>

            </div>



            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger w-25"
                data-dismiss="modal"
              >
                Dismiss
              </button>
              <button type="button" className="btn btn-primary w-25">Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}