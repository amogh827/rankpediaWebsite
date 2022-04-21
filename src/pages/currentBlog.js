import axios from "axios";
import React, { useEffect, useState } from "react";
import PageWrapper from "../components/PageWrapper";
import Banner from "../components/BannerSection"
import ReactMarkdown from "react-markdown";

function CurrentBlog({ id }) {
  const [blog, setBlog] = useState();

  useEffect(() => {
    const qs = require("qs");
    const query = qs.stringify(
      {
        fields: ["title", "body"],
      },
      {
        encodeValuesOnly: true,
      }
    );
    axios
      .get(
        `https://floating-anchorage-25703.herokuapp.com/api/blogs/${id}?${query}`
      )
      .then((response) => {
        console.log(response.data.data);
        const {
          attributes: { title, body },
        } = response.data.data;
        console.log({ title, body });
        setBlog({ title, body });
      });
  }, []);

  return (
    <>
    <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right",
          headerButton: (
            <>
              <a href="/login">
                {" "}
                <button className="btn btn btn-blue-3 header-btn1 head-login">
                  Login
                </button>
              </a>
            </>
          ),
          footerStyle: "style3",
        }}
      >
<Banner
          id="neplanding-banner-button-hide"
          bgurl="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1625558950/banner-image_rw7lnc_hgazsj.jpg"
          BannerTitle={blog?.title}
          // BannerContent=" Learn how Rankpedia is compliant with the country's new educational policies "
          BannerbtnText="Learn More"
        />

      {/* <h1 style={{backgroundColor:"#04021a",color:"white"}}>{blog?.title}</h1> */}
      <ReactMarkdown className="pt-7 pt-md-7 pt-lg-7 pb-7 pb-md-7 pb-lg-7 mb-lg-1 blog-body">{blog?.body}</ReactMarkdown>
    
    </PageWrapper>
    </>
  );
}

export default CurrentBlog;
