import React from "react"
import Doctor_Nav from "./Doctor reusable components/Doctor_Nav"

export default function Doctor_checkup() {
    return (
        <>
            <Doctor_Nav />

            <div className="container">

                <form action="" method="post">
                <div className="doc_checkup">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>

                   <div id="form_grid">
                   <div>
                        <select className="custom-select">
                            <option selected value={"none"}>Select Ward</option>
                            <option value="General">General</option>
                            <option value="General">General</option>
                            <option value="Emergency">Emergency</option>
                            <option value="ICU">ICU</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="bed">Select Bed Number</label>
                        <input type="number" className="form-control" id="bed" maxLength={1} minLength={100} placeholder="Select Bed" />
                    </div>
                   </div>
                   </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
       
            </div>
        </>
    )
}