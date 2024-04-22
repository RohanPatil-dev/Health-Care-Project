import React from "react";

export default function Blogs() {
  return (
    <>
      {/* blogs */}
      <div id="blog">
        <h1 class="text-dark text-center mt-4" id="blog_tag">
          OUR{" "}
          <span id="service" class="text-info">
            BLOGS
          </span>
        </h1>
      </div>

      <div id="blogs">
        <div>
          <div class="card" style={{ width: "25rem" }}>
            <img
              src="./Images/blogs/blog_1.jpg"
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
                Epilepsy Can be managed with Medical Support and Lifestyle
                Modifications
              </h5>
              <p class="card-text">
                Manage recurrent seizures effectively with proper sleep, diet,
                exercise, and medication adherence
              </p>
              <a href="../HTML/blogs_1.html" class="btn blog-read">
                Read More
              </a>
            </div>
          </div>
        </div>

        <div>
          <div class="card" style={{ width: "25rem" }}>
            <img
              src="./Images/blogs/blog_2.jpg"
              alt="Card image cap"
              class="img-blogs"
            />

            <div id="blog-grid">
              <div class="mid">
                <img
                  src="./Images/blogs/date.png"
                  alt=""
                  style={{ float: "left", marginLeft: "45px" }}
                />
                <p style={{ float: "left", fontSize: "18px" }}>1st May 2024</p>
              </div>
              <div class="mid">
                <img
                  src="../Images/blogs/user.png"
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
                Can Weight Lifting Cause Cardiac Problems?
              </h5>
              <p class="card-text">
                Improper techniques or overexertion can place unnecessary stress
                on the heart, emphasizing the significance of receiving proper
                training
              </p>
              <a href="../HTML/blogs_2.html" class="btn blog-read">
                Read More
              </a>
            </div>
          </div>
        </div>

        <div>
          <div class="card" style={{ width: "25rem" }}>
            <img
              src="../Images/blogs/blog_3.jpg"
              alt="Card image cap"
              class="img-blogs"
            />

            <div id="blog-grid">
              <div class="mid">
                <img
                  src="../Images/blogs/date.png"
                  alt=""
                  style={{ float: "left", marginLeft: "45px" }}
                />
                <p style={{ float: "left", fontSize: "18px" }}>1st May 2024</p>
              </div>
              <div class="mid">
                <img
                  src="../Images/blogs/user.png"
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
                Unseen Threats: Detecting Diabetes Symptoms in Women
              </h5>
              <p class="card-text">
                In women, diabetes symptoms include fatigue, frequent urination,
                blurred vision, and yeast infections, impacting overall health &
                well-being.
              </p>
              <a href="../HTML/blogs_3.html" class="btn blog-read">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
