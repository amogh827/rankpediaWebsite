import React, { useEffect, useState } from "react";
import PageWrapper from "../../components/PageWrapper";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import { Link } from "gatsby";
import qs from "qs";
import Banner from "../../components/BannerSection";

function Blog({ id }) {
  const [currentSection, setCurrentSection] = useState();
  const [child, setChild] = useState();
  const [blogs, setBlogs] = useState();
  const [popularBlogs, setPopularBlogs] = useState();

  function popBlogs() {
    const query = qs.stringify(
      {
        fields: ["title"],
      },
      {
        encodeValuesOnly: true,
      }
    );
    axios
      .get(`https://floating-anchorage-25703.herokuapp.com/api/blogs?${query}`)
      .then((response) => {
        const data = response.data.data;
        data.splice(3);
        setPopularBlogs(data);
      });
  }

  function findBlogs(id) {
    const query = qs.stringify(
      {
        fields: ["title"],
        filters: {
          parentSections: {
            id: {
              $eq: id,
            },
          },
        },
      },
      {
        encodeValuesOnly: true,
      }
    );
    axios
      .get(`https://floating-anchorage-25703.herokuapp.com/api/blogs?${query}`)
      .then((response) => {
        const data = response.data.data;
        data.splice(3);
        setBlogs(data);
      });
  }
  useEffect(() => {
    const query = qs.stringify(
      {
        filters: {
          id: {
            $eq: id,
          },
        },
        fields: ["sectionName"],
        populate: {
          childSections: {
            fields: ["sectionName"],
          },
        },
      },
      {
        encodeValuesOnly: true,
      }
    );
    axios
      .get(
        `https://floating-anchorage-25703.herokuapp.com/api/sections/${id}?${query}`
      )
      .then((response) => {
        console.log(response.data.data);
        const {
          attributes: { sectionName, childSections },
        } = response.data.data;
        setCurrentSection(sectionName);
        const ch = childSections.data.map((c) => {
          return { id: c.id, sectionName: c.attributes.sectionName };
        });
        ch.splice(3);
        setChild(ch);
        findBlogs(id);
        popBlogs();
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
              {popularBlogs?.map(({ id, attributes }) => {
                return (
                  <div key={id} className="col-sm-6 col-lg-4">
                    <img
                      src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
                      className="preview-image"
                    />
                    <Link to={`/currentBlog/${id}`} className="title-blog">
                      {attributes.title}
                    </Link>
                  </div>
                );
              })}
            </div>
          )}{" "}
          {child?.length !== 0 && (
            <div>
              <hr />
              <h2>Subsections</h2>
              <div className="row">
                {child?.map(({ id, sectionName }) => {
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
              {blogs?.map(({ id, attributes }) => {
                return (
                  <div key={id} className="col-sm-6 col-lg-4 mt-3">
                    <img
                      src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
                      className="preview-image"
                    />
                    <Link to={`/currentBlog/${id}`} className="title-blog mt-3">
                      {attributes.title}
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
