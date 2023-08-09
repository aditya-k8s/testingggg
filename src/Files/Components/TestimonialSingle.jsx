import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../Redux/Action/Action";
import axios from "axios";

function TestimonialSingle() {
  const dispatch = useDispatch();
  const contentperrow = 6;
  const [data, setData] = useState("");
  const [next, setNext] = useState(contentperrow);

  const handleReadmore = () => {
    setNext(next + contentperrow);
  };
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });
    let apiurl = `${process.env.REACT_APP_API_ROOT}/testimonials`;
    axios.get(apiurl).then((response) => {
      var response1 = response.data.data;
      setData(response1);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>kindlebit - Testimonial</title>
      </Helmet>
      <main className="inner-page" id="testimonials">
        <section className="banner dark">
          <img
            className="banner-img"
            src="./assets/images/testi-ban.png"
            alt="..."
          />
          <div className="banner-inner container">
            <div className="banner-heading">
              <div className="sap-lg-heading">Testimonials</div>
              <div className="text-para">
                For more than 15 years, we have been providing top-quality
                services to our esteemed clients. We asked our clients to leave
                reviews about our company. Here is what they have to say.
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
                <div className="sap-caption">look we're smiling :)</div>
              </div>
              <div className="sap-lg-heading">
                Clients are happy,
                <br />
                So are we!
              </div>
            </div>
            <div className="testim-head">
              {data
                ? data &&
                  data?.slice(0, next)?.map((ele, index) => {
                    return (
                      <div className="testim-inner" key={index}>
                        <div className="star-rating">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="testi-con">
                          <div className="text-para">
                            {
                              <p>
                                {ele.comment.includes("&#39;")
                                  ? ele.comment.replace(/&#39;/g, "'")
                                  : ele.comment}
                              </p>
                            }
                          </div>
                          <div className="testi-bot-con">
                            <div className="testi-name">{ele.client_name}</div>
                            <div className="testi-brand">
                              {ele.client_country}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
            <div
              style={{
                visibility: `${data.length >= next ? `visible` : `hidden`}`,
              }}
              className="sap-btn-dark"
            >
              <button
                onMouseOver={() => dispatch(increment())}
                onMouseLeave={() => dispatch(decrement())}
                onClick={handleReadmore}
              >
                view more
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default TestimonialSingle;
