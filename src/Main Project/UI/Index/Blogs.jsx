import React from "react";

import { Blog } from "../../Data/Blogs";

import { Link } from "react-router-dom";

export default function Blogs() {
  return (
    <>
      {/* blogs */}
      <div id="blog">
        <h1 class="text-dark text-center mt-4" id="blog_tag">
          OUR
          <span id="service" class="text-info">
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
                  <div class="card" style={{ width: "25rem" }}>
                    <img
                      src={data.image}
                      alt="Card image cap"
                      class="img-blogs"
                    />

                    <div id="blog-grid">
                      <div class="mid">
                        <img src="./Images/blogs/date.png" alt="" />
                        <p style={{ float: "left", fontSize: "18px" }}>1st May 2024</p>
                      </div>
                      <div class="mid">
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

                    <div class="card-body">
                      <h5 class="blog-name">
                       {data.blog_name}
                      </h5>
                      <p class="card-text">
                      {data.description}
                      </p>
                      <Link to={data.link} class="btn blog-read">
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
