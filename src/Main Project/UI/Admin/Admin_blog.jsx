import React, { useRef, useState } from "react"
import Footer from "../Index/Footer"
import Admin_Nav from "./Admin Reusable components/Admin_Nav"
import JoditEditor from "jodit-react"

export default function Admin_blog() {

  const editor = useRef(null)
  const [content, setContent] = useState("")


  return (
    <div id="grid-container">
      {/* right nav  */}
      <div style={{ border: "2px solid black" }} id="grid-right">

        {/* this code is use for dashboard page  */}
        <Admin_Nav img={"./Images/Navbar/Hospital.png"} title={"Blogs"} subName={"Blog Form"} />

        <div id="admin_blog">

          <h1 id="blog-heading">Blog Section</h1>

          <div id="blog-form">
            <form action="" method="post">
              <div className="blog_inputs">
                <div class="form-group">
                  <label for="exampleInputPassword1" className="tag">Enter your title</label>
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter your title........." />
                </div>

                <div class="form-group">
                  <label for="exampleInputEmail1" className="tag">Add Image</label>
                  <input type="file" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Add image" />
                </div>
              </div>

              <div class="form-group" id="editor">
                <label for="exampleFormControlTextarea1" className="tag">Add decription</label>
                <JoditEditor ref={editor} value={content} onChange={newContent => setContent(newContent)} />
              </div>

              <button type="submit" class="btn blog-btn">Submit</button>
            </form>
          </div>
        </div>
        <Footer />
      </div>

    </div>
  )
}