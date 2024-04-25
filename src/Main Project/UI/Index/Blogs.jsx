import React from "react";

import { Blog } from "../../Data/Blogs";

import { Link } from "react-router-dom";

export default function Blogs() {
  return (
    <>
      {/* blogs */}
      <div id="blog">
        <h1 className="text-dark text-center mt-4" id="blog_tag">
          OUR
          <span id="service" className="text-info">
            BLOGS
          </span>
        </h1>
      </div>

      <div id="blogs">

        {
          Blog.map((data) => {
            return (
              <>
                <div key={data.id}>
                  <div className="card" style={{ width: "25rem" }}>
                    <img
                      src={data.image}
                      alt="Card image cap"
                      className="img-blogs"
                    />

                    <div id="blog-grid">
                      <div className="mid">
                        <img src="./Images/blogs/date.png" alt="" />
                        <p style={{ float: "left", fontSize: "18px" }}>1st May 2024</p>
                      </div>
                      <div className="mid">
                        <img
                          src="./Images/blogs/user.png"
                          alt=""
                          style={{ marginLeft: "150px" }}
                        />
                        <p
                          style={{
                            float: "right",
                            fontSize: "18px",
                            marginRight: "8px",
                          }}
                        >
                          By Admin
                        </p>
                      </div>
                    </div>

                    <div className="card-body">
                      <h5 className="blog-name">
                       {data.blog_name}
                      </h5>
                      <p className="card-text">
                      {data.description}
                      </p>
                      <Link to={data.link} className="btn blog-read">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  );
}
