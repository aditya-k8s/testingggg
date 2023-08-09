import React, { useState, useEffect } from "react";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../Redux/Action/Action";
import ContactModal from "../model/ContactModal";
import axios from "axios";

function Portfolio() {
  const [slugButton, setSlugButton] = useState([]);
  const [occasions, setOccasions] = useState([]);
  const [commonModal, setCommonModal] = useState(false);
  const [targetSection, setTargetSection] = useState("all");
  const [activeLoader, setActiveLoader] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    setActiveLoader(false);
    const imageKey = {
      type: targetSection,
    };
    const headers = {
      "Access-Control-Allow-Origin": "*",
    };
    axios
      .post(`${process.env.REACT_APP_API_ROOT}/portfolio-category`, imageKey, {
        headers: headers,
      })
      .then(function (response) {
        setActiveLoader(true);
        setOccasions(response.data.data);
      })
      .catch(function (error) {});
  }, [targetSection]);

  // Get slug API
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_ROOT}/portfolio-tech`)
      .then(function (response) {
        setSlugButton(response.data.data);
      })
      .catch(function (error) {});

    window.scroll({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const PhotoItem = ({ image }) => (
    <LightgalleryItem src={image}>
      <img
        src={image}
        className="animation_image"
        alt=""
        onMouseOver={() => dispatch(increment())}
        onMouseLeave={() => dispatch(decrement())}
        style={{ cursor: "pointer" }}
      />
    </LightgalleryItem>
  );

  return (
    <React.Fragment>
      <Helmet>
        <title>kindleBit - Portfolio</title>
      </Helmet>
      <main className="inner-page" id="portfolio">
        <section className="banner dark">
          <img
            className="banner-img"
            src="assets/images/portfolio-ban.png"
            alt=""
          />
          <div className="banner-inner container">
            <div className="banner-heading">
              <div className="sap-lg-heading">Portfolio</div>
              <div className="text-para">
                As a leading Web Development, Web App & Mobile App, Web Design,
                and Digital Marketing company, we have a proven track record of
                success and have been in the industry for several years. With
                wide-ranging services provided under one roof, we can provide a
                more cohesive and effective online presence for businesses,
                organizations, and individuals. Our professional team has the
                expertise you need for your online goals.
              </div>
            </div>
          </div>
        </section>
        <section className="sap-card">
          <svg
            className="back-blue-art"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="300"
            data-aos-offset="0"
            xmlns="http://www.w3.org/2000/svg"
            width="194.877"
            height="397.823"
            viewBox="0 0 194.877 397.823"
          >
            <g
              id="Group_67"
              data-name="Group 67"
              transform="translate(-2996.562 -104.677)"
            >
              <rect
                id="Rectangle_90"
                data-name="Rectangle 90"
                width="194.877"
                height="397.823"
                rx="97.439"
                transform="translate(2996.562 104.677)"
                fill="#00224b"
                opacity="0.05"
              />
              <rect
                id="Rectangle_93"
                data-name="Rectangle 93"
                width="117.351"
                height="318"
                rx="58.675"
                transform="translate(3035.325 144.589)"
                fill="#00224b"
                opacity="0.05"
              />
              <rect
                id="Rectangle_94"
                data-name="Rectangle 94"
                width="55.803"
                height="237"
                rx="27.901"
                transform="translate(3066.099 185.088)"
                fill="#00224b"
                opacity="0.05"
              />
              <rect
                id="Rectangle_95"
                data-name="Rectangle 95"
                width="16.199"
                height="175.098"
                rx="8.099"
                transform="translate(3085.901 216.039)"
                fill="#00224b"
                opacity="0.05"
              />
            </g>
          </svg>
          <svg
            className="back-orange-art"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="300"
            data-aos-offset="0"
            xmlns="http://www.w3.org/2000/svg"
            width="252.883"
            height="123.877"
            viewBox="0 0 252.883 123.877"
          >
            <g
              id="Group_68"
              data-name="Group 68"
              transform="translate(-4187.117 -707.061)"
            >
              <rect
                id="Rectangle_99"
                data-name="Rectangle 99"
                width="123.877"
                height="252.883"
                rx="61.939"
                transform="translate(4440 707.061) rotate(90)"
                fill="#f38020"
                opacity="0.05"
              />
              <rect
                id="Rectangle_100"
                data-name="Rectangle 100"
                width="74.596"
                height="202.142"
                rx="37.298"
                transform="translate(4414.629 731.702) rotate(90)"
                fill="#f38020"
                opacity="0.05"
              />
              <rect
                id="Rectangle_101"
                data-name="Rectangle 101"
                width="35.472"
                height="150.653"
                rx="17.736"
                transform="translate(4388.885 751.264) rotate(90)"
                fill="#f38020"
                opacity="0.05"
              />
              <rect
                id="Rectangle_102"
                data-name="Rectangle 102"
                width="10.297"
                height="111.304"
                rx="5.148"
                transform="translate(4369.21 763.851) rotate(90)"
                fill="#f38020"
                opacity="0.05"
              />
            </g>
          </svg>

          <div className="sap-card-inner container">
            <div className="sec-heading">
              <div className="sap-caption-head">
                <div className="sap-caption">digital artwork</div>
              </div>
              <div className="sap-lg-heading">
                Our prominent
                <br />
                work
              </div>
            </div>

            <div className="portfolio-gallery">
              <div className="pg-filter">
                <button
                  type="button"
                  onClick={() => setTargetSection("all")}
                  className={`${
                    targetSection === "all" ? `active_button` : `default_button`
                  }`}
                  onMouseOver={() => dispatch(increment())}
                  onMouseLeave={() => dispatch(decrement())}
                >
                  All
                </button>
                {slugButton &&
                  slugButton?.map((butt, index) => {
                    return (
                      <button
                        key={index}
                        type="button"
                        onClick={() => {
                          setTargetSection(butt?.url_slug);
                        }}
                        className={`${
                          targetSection === butt?.url_slug
                            ? `active_button`
                            : `default_button`
                        }`}
                        onMouseOver={() => dispatch(increment())}
                        onMouseLeave={() => dispatch(decrement())}
                      >
                        {butt?.title}
                      </button>
                    );
                  })}
              </div>
              {/* All image section start */}
              <div className="portfolio-gallery portfolio-gallery-cloned-about-us">
                {/* Event button section start */}
                <div className="pg-filter"></div>
                {/* Image display section start */}
                <div className="nak-gallery nlg1" id="gallery">
                  <div className={`gallery-inner row`}>
                    {activeLoader ? (
                      <LightgalleryProvider>
                        {occasions.length > 0 ? (
                          occasions?.map((img, index) => {
                            return (
                              <PhotoItem
                                key={index}
                                image={`${process.env.REACT_APP_IMAGE_URL}${img}`}
                              />
                            );
                          })
                        ) : (
                          <p>There is no image.</p>
                        )}
                      </LightgalleryProvider>
                    ) : (
                      <div className="loader-inner">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="200.002"
                          height="200"
                          viewBox="0 0 200.002 200"
                        >
                          <defs>
                            <clipPath id="clipPath">
                              <path
                                id="Path_658"
                                data-name="Path 658"
                                d="M1230.413,405.951a17.241,17.241,0,0,1-24.381,0l-82.76-82.761a17.24,17.24,0,0,1,0-24.38l82.76-82.761a17.248,17.248,0,0,1,24.387,0l82.754,82.761a17.233,17.233,0,0,1,0,24.38Z"
                                fill="none"
                              />
                            </clipPath>
                          </defs>
                          <g
                            id="Group_333"
                            data-name="Group 333"
                            transform="translate(-1118.223 -211)"
                          >
                            <g id="Group_332" data-name="Group 332">
                              <g
                                id="Group_331"
                                data-name="Group 331"
                                clipPath="url(#clipPath)"
                              >
                                <image
                                  id="Rectangle_207"
                                  data-name="Rectangle 207"
                                  width="201"
                                  height="200"
                                  transform="translate(1118 211)"
                                  xlinkHref="data:image/png;base64,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"
                                />
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="sap-btn-light">
              <button
                onMouseOver={() => dispatch(increment())}
                onMouseLeave={() => dispatch(decrement())}
                onClick={() => setCommonModal(true)}
              >
                call us now!
              </button>
            </div>
          </div>
        </section>
      </main>
      {/* Contact modal */}
      {commonModal && (
        <ContactModal
          commonModal={commonModal}
          setCommonModal={setCommonModal}
        />
      )}
    </React.Fragment>
  );
}
export default Portfolio;
