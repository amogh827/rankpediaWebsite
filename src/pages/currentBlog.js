import axios from "axios";
import React, { useEffect, useState } from "react";
import PageWrapper from "../components/PageWrapper";
import Banner from "../components/BannerSection";
import ReactMarkdown from "react-markdown";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

function CurrentBlog({ id }) {
  const [blog, setBlog] = useState();

  const client = new ApolloClient({
    uri: "https://floating-anchorage-25703.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });

  const getBlog = async () => {
    const { data: blogState } = await client.query({
      query: gql`
        query getBlog {
          blog(id: "${id}") {
            data {
              attributes {
                title
                body
              }
            }
          }
        }
      `,
    });
    return blogState.blog.data.attributes;
  };
  useEffect(() => {
    getBlog().then(({ title, body }) => {
      const tempBlog = { title, body };
      setBlog(tempBlog);
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
        <ReactMarkdown className="pt-7 pt-md-7 pt-lg-7 pb-7 pb-md-7 pb-lg-7 mb-lg-1 blog-body">
          {blog?.body}
        </ReactMarkdown>
      </PageWrapper>
    </>
  );
}

export default CurrentBlog;
