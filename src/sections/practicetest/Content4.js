import React from "react";
import { Link } from "gatsby";

import imgM from "../../assets/image/home-6/png/content-3-mobile.png";
import imgS from "../../assets/image/home-6/png/green-shape.png";

const Content4 = ({ className,Title,Paragraph, ...rest }) => {
  return (
    <div className={className} {...rest}>
       
        <div class="content-section pb-9">
      <div class="container">


        <div class="row align-items-center">
          <div class="col-lg-6 pt-14 pd-lft-0 en-tpr-rty" data-aos="flip-right" data-aos-duration="1000" data-aos-once="true">
            <div class="content-img sxrty-prprs">
           <img class="ptyuc-rtyd" src={ "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621342081/Group_132_po4klx.png" } alt="" />
              {/* <img src="homesection1" alt="" class="w-100" /> */}
            </div>
          </div>
          <div class="col-10 col-lg-6 imgs-imt">
            <div class="section-title content-text mb-13" data-aos="fade-left" data-aos-duration="500" data-aos-once="true">
              <h2 class="title gr-text-3 mb-6 mt-3 engag" >{Title} </h2>
              <p class="gr-text-8 clscls">{Paragraph}</p>
                
            </div>
            <div class="content-widget">
              <div class="row">
                
              </div>
            </div>
          </div>
        </div>



        </div>
      </div>
    </div>
  );
};

export default Content4;
