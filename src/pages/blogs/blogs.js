import React, { useEffect, useState } from "react";
import PageWrapper from "../../components/PageWrapper";
import { Link } from "gatsby";
import Banner from "../../components/BannerSection";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

function Blog({ id }) {
  const [currentSection, setCurrentSection] = useState("");
  const [childSections, setChildSections] = useState();
  const [blogs, setBlogs] = useState();
  const [popularBlogs, setPopularBlogs] = useState();

  const client = new ApolloClient({
    uri: "https://floating-anchorage-25703.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });
  const getSections = async (id) => {
    const { data: sectionState } = await client.query({
      query: gql`
        query getSection {
          section(id: "${id}") {
            data {
              id
              attributes {
                sectionName
                childSections{
                 data{
                   id
                  attributes{
                    sectionName
                  }
                }
              }
              }
            }
          }
        }
      `,
    });
    return sectionState;
  };
  const getBlogs = async (id) => {
    const { data: blogsState } = await client.query({
      query: gql`
        query getBlogs {
          blogs(filters: { parentSections: { id: { eq: "${id}" } } }) {
            data {
              id
              attributes {
                title
              }
            }
          }
        }
      `,
    });
    return blogsState;
  };

  const getPopBlogs = async () => {
    const { data: popBlogsState } = await client.query({
      query: gql`
        query getBlogs {
          blogs(pagination: { start: 0, limit: 3 }) {
            data {
              id
              attributes {
                title
              }
            }
          }
        }
      `,
    });
    return popBlogsState;
  };

  useEffect(() => {
    getSections(id).then((data) => {
      const tempChildSections = data.section.data.attributes.childSections.data.map(
        (sect) => {
          return { id: sect.id, sectionName: sect.attributes.sectionName };
        }
      );
      setCurrentSection(data.section.data.attributes.sectionName);
      setChildSections(tempChildSections);
      console.log(data);
      console.log(tempChildSections);
    });
    getBlogs(id).then((data) => {
      const tempBlogs = data.blogs.data.map((blog) => {
        return {
          id: blog.id,
          title: blog.attributes.title,
          body: blog.attributes.body,
        };
      });
      console.log(tempBlogs);
      console.log(data);
      setBlogs(tempBlogs);
    });
    getPopBlogs().then((data) => {
      const temp = data.blogs.data.map(({ id, attributes: { title } }) => {
        return { id, title };
      });
      console.log(data);
      console.log(temp);
      setPopularBlogs(temp);
    });
  }, [id]);
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
          BannerTitle={currentSection}
        />
        <div className="mx-14 my-7">
          <h2>Popular Blogs</h2>
          {popularBlogs?.length === 0 && (
            <h2 className="no-blog text-align-center ml-3">
              No Blogs Found here
            </h2>
          )}
          {!(popularBlogs?.length === 0) && (
            <div className="row">
              {popularBlogs?.map(({ id, title }) => {
                return (
                  <div key={id} className="col-sm-6 col-lg-4">
                    <img
                      src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
                      className="preview-image"
                    />
                    <Link to={`/currentBlog/${id}`} className="title-blog">
                      {title}
                    </Link>
                  </div>
                );
              })}
            </div>
          )}{" "}
          {childSections?.length !== 0 && (
            <div>
              <hr />
              <h2>Subsections</h2>
              <div className="row">
                {childSections?.map(({ id, sectionName }) => {
                  return (
                    <div key={id} className="col-sm-6 col-lg-4">
                      <img
                        src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
                        className="preview-image"
                      />
                      <Link to={`/blogsPage/${id}`} className="title-blog">
                        {" "}
                        {sectionName}{" "}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          <hr />
          <h2>{currentSection} Blogs</h2>
          {blogs?.length === 0 && (
            <h2 className="no-blog text-align-center ml-3">
              No Blogs Found here
            </h2>
          )}
          {!(blogs?.length === 0) && (
            <div className="row">
              {blogs?.map(({ id, title }) => {
                return (
                  <div key={id} className="col-sm-6 col-lg-4 mt-3">
                    <img
                      src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
                      className="preview-image"
                    />
                    <Link to={`/currentBlog/${id}`} className="title-blog mt-3">
                      {title}
                    </Link>
                  </div>
                );
              })}
            </div>
          )}{" "}
        </div>
      </PageWrapper>
    </>
  );
}

export default Blog;
