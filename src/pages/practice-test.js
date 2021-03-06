import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/practicetest/Hero";
import CTA from "../sections/practicetest/CTA";
import Features from "../sections/practicetest/Features";
import Content1 from "../sections/practicetest/Content1";
import Content2 from "../sections/practicetest/Content2";
import Content3 from "../sections/practicetest/Content3";
import Content4 from "../sections/practicetest/Content4";
import Screenshots from "../sections/practicetest/Screenshots";
import Testimonial from "../sections/practicetest/Testimonial";
import Promo from "../sections/practicetest/Promo";

import Infocard from "../sections/practicetest/Infocard";
import GetinTouch from "../components/GetinTouch";

import imageRight from "../assets/image/inner-page/png/practicetest.png";

const Practicetest = () => {
  return (
    <>
     <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right",
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


<div className="min-height-100vh d-flex align-items-center bg-dark-cloud1 pt-24 pt-md-27 pt-lg-25">
          <div className="pactice-main-div">
            <div className="row no-gutters align-items-center justify-content-center">

            <div className="col-lg-4 col-md-9 col-xs-11 order-1 order-lg-1">
                <div
                  className="text-left"
                  data-aos="fade-left"
                  data-aos-duration={500}
                  data-aos-once="true"
                >
                  <img className="w-100 w-xl-auto prtc-frst-img" src={imageRight} alt="" />
                </div>
              </div>


              <div className="col-lg-8 col-md-9 col-xs-11 order-2 order-lg-2">
                <div className="pt-9 pt-sm-13 pb-10 pb-md-15 dark-mode-texts pr-md-11 pr-lg-0">
                  <div className="mb-11">
                    <h2
                      className="font-size-11 mb-8 pr-sm-10 pr-md-14 pr-lg-0 prct-hdr"
                      data-aos="fade-up"
                      data-aos-duration={500}
                      data-aos-once="true"
                    >
                      Practice chapters of your choice, solve complex questions
                    </h2>
                    <p
                      className="font-size-7 mb-0 pr-xl-15 prct-prg"
                      data-aos="fade-up"
                      data-aos-duration={700}
                      data-aos-once="true"
                    >
                      Get a personalized learning experience through advanced technology
                    </p>
                  </div>
                  <div
                    className="prtc-btr"
                    data-aos="fade-up"
                    data-aos-duration={900}
                    data-aos-once="true"
                  >
                        <a
                          href="#"
                          className="btn btn-red mx-auto gtstrdr"
                        >
                          Learn More
                        </a>
                     
                      
                    
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>


        {/* <CTA className="bg-purple-heart py-10" /> */}
        {/* <Features className=" bg-default-6" /> */}
        <Content1 className="bg-default-6 pt-3 pt-md-25 pb-9 pb-md-14 pb-lg-13 overflow-hidden position-relative" />
        <Content2 className="bg-default-6 pt-14 pt-md-19 pt-lg-32 pb-9 pb-md-14 pb-lg-34 overflow-hidden position-relative" id="rdpsfck" />
        <Content3 className="bg-default-6  overflow-hidden position-relative" id="rst-nstre" />
        <Content4 className="bg-default-6 pb-6  overflow-hidden position-relative" id="smr-rttd-nvlu"
        
        Title="Get live mentoring & doubt support"
        Paragraph="Students can ask as many questions as they want, and our experts will process their requests and provide detailed solutions as soon as possible. "
        
        />
        {/* <Screenshots className="bg-purple-heart pt-13 pb-13 pt-md-17 pb-md-19 pt-lg-25 pb-lg-26" />
        <Testimonial className="pt-13 pt-md-18 pt-lg-24 pb-13 pb-md-19 pb-lg-28 position-relative" />
        <Promo className="bg-default-6" /> */}

        <Infocard/>
        {/* Start of get in touch section */}
        <GetinTouch
        title="Ready for an Experience of Blended Learning?"
       disc="Register to experience blended learning like never before and stay ahead."/>
       {/* End of get in touch section */}

      </PageWrapper>
    </>
  );
};
export default Practicetest;
