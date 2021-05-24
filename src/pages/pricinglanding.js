import React from "react";

import PageWrapper from "../components/PageWrapper";
import Company from "../sections/home1/Compnay";
import Categories from "../sections/home1/Categories";
import Jobs from "../sections/home1/Jobs";
import Content1 from "../sections/home1/Content1";
import Blog from "../sections/home1/Blog";
// import Section from "../layout/Section";

import Hero from "../sections/pricinglanding/Hero";
import Pricing from "../sections/pricinglanding/Pricing";
import ThingsSec from "../sections/doubts-landing/ThingsSec";
import Infocard from "../sections/faq/Infocard";
import GetinTouch from "../components/GetinTouch";

import Section1 from "../sections/home/Section1";
import Section2 from "../sections/home/Section2";
import Section3 from "../sections/home/Section3";
import Section4 from "../sections/home/Section4";
import Section5 from "../sections/home/Section5";
import Section6 from "../sections/home/Section6";
import Section7 from "../sections/home/Section7";
import Section8 from "../sections/home/Section8";

const Pricinglanding = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right test",
          headerButton: (
            <>
            <a href="/login">  <button className="btn btn btn-blue-3 header-btn1 head-login">
                Login
              </button> </a>

              {/* <div class="header-btn  ml-auto ml-lg-5 mr-6 mr-lg-0 d-none d-xs-block" id="login-tpr">
            <a class="btn bggr gr-text-9 d-none d-xs-inline-flex " href="#">
              Login
            </a>
          </div> */}
            </>
          ),
          footerStyle: "style3",
        }}
      >
         <Hero />
        <Pricing />

         {/* Start of Few Things to Know */}
         <ThingsSec/>
        {/* End of Few Things to Know */}
        <Infocard/>
        {/* Start of get in touch section */}
        <GetinTouch
        title="Ready for an Experience of 
        Blended Learning?"
       disc="Register to experience blended learning like never before and stay ahead."/>
       {/* End of get in touch section */}


      </PageWrapper>
    </>
  );
};
export default Pricinglanding;