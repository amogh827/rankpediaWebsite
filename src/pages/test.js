import React, { useEffect, useState } from "react";
import PageWrapper from "../components/PageWrapper";

import Banner from "../sections/e-school/Banner";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const Test = () => {
  const [currentSection, setCurrentSection] = useState();
  const [childSections, setChildSections] = useState();
  const [blogs, setBlogs] = useState();
  const [popularBlogs, setPopularBlogs] = useState();
  const id = 12;
  const client = new ApolloClient({
    uri: "https://floating-anchorage-25703.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });
  const getSections = async () => {
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
  const getBlogs = async () => {
    const { data: blogsState } = await client.query({
      query: gql`
        query getBlogs {
          blogs(filters: { parentSections: { id: { eq: 3 } } }) {
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
    getSections().then((data) => {
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
    getBlogs().then((data) => {
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
                </button>{" "}
              </a>
            </>
          ),
          footerStyle: "style3",
        }}
      >
        <Banner />
        {currentSection}
        <br />
        Popular Blogs
        {popularBlogs?.map(({ id, title }) => {
          return (
            <div key={id}>
              {id}: {title}
            </div>
          );
        })}
        Child Sections
        {childSections?.map(({ id, sectionName }) => {
          return (
            <div key={id}>
              {id}: {sectionName}
            </div>
          );
        })}
        Blogs
        {blogs?.map(({ id, title }) => {
          return (
            <div key={id}>
              {id}: {title}
            </div>
          );
        })}
      </PageWrapper>
    </>
  );
};
export default Test;
