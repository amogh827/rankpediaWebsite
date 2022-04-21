import React, { useEffect, useState } from "react";
import PageWrapper from "../../components/PageWrapper";
import Section1 from "../../sections/home/Section1";
import axios from "axios";
import { Link } from "gatsby";
import qs from "qs";
import Banner from "../../components/BannerSection";

function Blog() {
  const [currentSection, setCurrentSection] = useState();
  const [child, setChild] = useState();

  useEffect(() => {
    const query = qs.stringify(
      {
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
        `https://floating-anchorage-25703.herokuapp.com/api/sections/1?${query}`
      )
      .then((response) => {
        const {
          attributes: { sectionName, childSections },
        } = response.data.data;
        setCurrentSection(sectionName);
        const ch = childSections.data.map((c) => {
          return { id: c.id, sectionName: c.attributes.sectionName };
        });
        setChild(ch);
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
          BannerTitle={currentSection}
          // BannerContent=" Learn how Rankpedia is compliant with the country's new educational policies "
          BannerbtnText="Learn More"
        />


        {child?.map(({ id, sectionName }) => {
          return (
            <div key={id} >
              <Link class="btn btn-red mx-auto gtstrdr" to={`/blogsPage/${id}`}>
                {" "}
                {sectionName}{" "}
              </Link>
              <br />
            </div>
          );
        })}
      </PageWrapper>
    </>
  );
}

export default Blog;
