import React, { useState, useEffect } from "react";
import ModalTestimonials from "../model/ModalTestimonials";
// import OwlCarousel from "react-owl-carousel";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../Redux/Action/Action";
import axios from "axios";

function Testimonial() {
  const [modalTestimonials, setModalTestimonials] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [number, setNumber] = useState();
  // const [readMore, setReadMore] = useState(false);
  // const [id, setId] = useState(0);

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_ROOT}/testimonials`)
      .then((response) => {
        setTestimonials(response?.data?.data);
      });

    return () => {
      dispatch(decrement());
    };
    // eslint-disable-next-line
  }, []);

  // const handleReadMore = (id) => {
  //   const updatedData =
  //     testimonials &&
  //     testimonials?.map((ele) => {
  //       if (ele?.id === id) {
  //         setReadMore(!readMore);
  //         setId(id);
  //       }
  //       return ele;
  //     });
  //   setTestimonials(updatedData);
  // };

  const settings = {
    prevArrow: (
      <button
        type="button"
        className="slick-prev"
        onMouseOver={() => dispatch(increment())}
        onMouseLeave={() => dispatch(decrement())}
      >
        Previous
      </button>
    ),
    nextArrow: (
      <button
        type="button"
        className="slick-next"
        onMouseOver={() => dispatch(increment())}
        onMouseLeave={() => dispatch(decrement())}
      >
        Next
      </button>
    ),
    autoplaySpeed: 3000,
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 499,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="testi">
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
            ></rect>
            <rect
              id="Rectangle_93"
              data-name="Rectangle 93"
              width="117.351"
              height="318"
              rx="58.675"
              transform="translate(3035.325 144.589)"
              fill="#00224b"
              opacity="0.05"
            ></rect>
            <rect
              id="Rectangle_94"
              data-name="Rectangle 94"
              width="55.803"
              height="237"
              rx="27.901"
              transform="translate(3066.099 185.088)"
              fill="#00224b"
              opacity="0.05"
            ></rect>
            <rect
              id="Rectangle_95"
              data-name="Rectangle 95"
              width="16.199"
              height="175.098"
              rx="8.099"
              transform="translate(3085.901 216.039)"
              fill="#00224b"
              opacity="0.05"
            ></rect>
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
            ></rect>
            <rect
              id="Rectangle_100"
              data-name="Rectangle 100"
              width="74.596"
              height="202.142"
              rx="37.298"
              transform="translate(4414.629 731.702) rotate(90)"
              fill="#f38020"
              opacity="0.05"
            ></rect>
            <rect
              id="Rectangle_101"
              data-name="Rectangle 101"
              width="35.472"
              height="150.653"
              rx="17.736"
              transform="translate(4388.885 751.264) rotate(90)"
              fill="#f38020"
              opacity="0.05"
            ></rect>
            <rect
              id="Rectangle_102"
              data-name="Rectangle 102"
              width="10.297"
              height="111.304"
              rx="5.148"
              transform="translate(4369.21 763.851) rotate(90)"
              fill="#f38020"
              opacity="0.05"
            ></rect>
          </g>
        </svg>
        <div className="testi-inner container">
          <div className="sec-heading">
            <div
              className="sap-caption-head"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="800"
              data-aos-offset="0"
            >
              <div className="sap-caption">Who got noticed</div>
            </div>
            <div
              className="sap-lg-heading"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-offset="0"
            >
              Testimonials
            </div>
          </div>
          <Slider {...settings} className="testimonials owl-carousel owl-theme">
            {/* {testimonials &&
              testimonials?.map((item) => (
                <div className="item" key={item?.id}>
                  <button
                    className="testi-thumb"
                    data-bs-toggle="modal"
                    data-bs-target="#testi-video-pop"
                    onMouseOver={() => dispatch(increment())}
                    onMouseLeave={() => dispatch(decrement())}
                    onClick={() => setModalTestimonials(true)}
                  >
                    <img src={item?.client_image} alt="..." />
                    <span className="play-btn">
                      <svg
                        onClick={() => {
                          setNumber(item?.id);
                        }}
                        viewBox="0 0 65 65"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          transform="translate(-385 -4473)"
                          fill="none"
                          data-name="Group 40"
                        >
                          <g
                            transform="translate(385 4473)"
                            stroke="#fff"
                            strokeWidth="2"
                            data-name="Ellipse 3"
                          >
                            <circle
                              cx="32.5"
                              cy="32.5"
                              r="32.5"
                              stroke="none"
                            />
                            <circle cx="32.5" cy="32.5" r="31.5" fill="none" />
                          </g>
                          <g
                            transform="translate(434.13 4491.1) rotate(90)"
                            data-name="Polygon 1"
                          >
                            <path d="M11.295,5.828a4,4,0,0,1,6.887,0l7.729,13.079a4,4,0,0,1-3.444,6.035H7.01a4,4,0,0,1-3.444-6.035Z" />
                            <path
                              d="m14.738 5.8627c-0.34315 0-1.1978 0.095741-1.7219 0.98254l-7.7285 13.079c-0.53329 0.90249-0.1883 1.7054-0.015228 2.0087 0.17308 0.30331 0.68881 1.0088 1.7371 1.0088h15.457c1.0483 0 1.564-0.70546 1.7371-1.0088 0.17307-0.30331 0.51806-1.1062-0.015232-2.0087l-7.7285-13.079c-0.52402-0.8868-1.3787-0.98254-1.7219-0.98254m0-2c1.3348 0 2.6696 0.65503 3.4437 1.9651l7.7285 13.079c1.5756 2.6665-0.34651 6.0349-3.4437 6.0349h-15.457c-3.0972 0-5.0194-3.3685-3.4437-6.0349l7.7285-13.079c0.77413-1.3101 2.1089-1.9651 3.4437-1.9651z"
                              fill="#fff"
                            />
                          </g>
                        </g>
                      </svg>
                    </span>
                  </button>
                  <div className="testi-con">
                    <div className="text-para">
                      {item?.comment?.length > 170 ? (
                        <>
                          {item?.id === id && readMore
                            ? item?.comment
                            : item?.comment?.slice(0, 170)}
                          {item?.id === id && readMore ? " " : "..."}
                          <span
                            className="text-primary"
                            onMouseOver={() => dispatch(increment())}
                            onMouseLeave={() => dispatch(decrement())}
                            onClick={() => handleReadMore(item?.id)}
                          >
                            {item?.id === id && readMore
                              ? "Read Less"
                              : "Read More"}
                          </span>
                        </>
                      ) : (
                        item?.comment
                      )}
                    </div>
                    <div className="testi-bot-con">
                      <div className="testi-name">{item?.client_name}</div>
                      <div className="testi-brand">
                        {item?.client_country ?? "USA"}
                      </div>
                    </div>
                  </div>
                </div>
              ))} */}

            <div className="item">
              <button
                className="testi-thumb"
                data-bs-toggle="modal"
                data-bs-target="#testi-video-pop"
                onMouseOver={() => dispatch(increment())}
                onMouseLeave={() => dispatch(decrement())}
                onClick={() => setModalTestimonials(true)}
              >
                <img src="/assets/images/clientone.jpg" alt="..." />
                <span className="play-btn">
                  <svg
                    onClick={() => {
                      setNumber(1);
                    }}
                    viewBox="0 0 65 65"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      transform="translate(-385 -4473)"
                      fill="none"
                      data-name="Group 40"
                    >
                      <g
                        transform="translate(385 4473)"
                        stroke="#fff"
                        strokeWidth="2"
                        data-name="Ellipse 3"
                      >
                        <circle cx="32.5" cy="32.5" r="32.5" stroke="none" />
                        <circle cx="32.5" cy="32.5" r="31.5" fill="none" />
                      </g>
                      <g
                        transform="translate(434.13 4491.1) rotate(90)"
                        data-name="Polygon 1"
                      >
                        <path d="M11.295,5.828a4,4,0,0,1,6.887,0l7.729,13.079a4,4,0,0,1-3.444,6.035H7.01a4,4,0,0,1-3.444-6.035Z" />
                        <path
                          d="m14.738 5.8627c-0.34315 0-1.1978 0.095741-1.7219 0.98254l-7.7285 13.079c-0.53329 0.90249-0.1883 1.7054-0.015228 2.0087 0.17308 0.30331 0.68881 1.0088 1.7371 1.0088h15.457c1.0483 0 1.564-0.70546 1.7371-1.0088 0.17307-0.30331 0.51806-1.1062-0.015232-2.0087l-7.7285-13.079c-0.52402-0.8868-1.3787-0.98254-1.7219-0.98254m0-2c1.3348 0 2.6696 0.65503 3.4437 1.9651l7.7285 13.079c1.5756 2.6665-0.34651 6.0349-3.4437 6.0349h-15.457c-3.0972 0-5.0194-3.3685-3.4437-6.0349l7.7285-13.079c0.77413-1.3101 2.1089-1.9651 3.4437-1.9651z"
                          fill="#fff"
                        />
                      </g>
                    </g>
                  </svg>
                </span>
              </button>
              <div className="testi-con">
                {/* <div className="text-para">
                        comment
                        </div> */}
                <div className="testi-bot-con">
                  <div className="testi-name">Stefan Kremic</div>
                  <div className="testi-brand">Canada</div>
                </div>
              </div>
            </div>
            <div className="item">
              <button
                className="testi-thumb"
                data-bs-toggle="modal"
                data-bs-target="#testi-video-pop"
                onMouseOver={() => dispatch(increment())}
                onMouseLeave={() => dispatch(decrement())}
                onClick={() => setModalTestimonials(true)}
              >
                <img src="/assets/images/clienttwo.jpg" alt="..." />
                <span className="play-btn">
                  <svg
                    onClick={() => {
                      setNumber(2);
                    }}
                    viewBox="0 0 65 65"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      transform="translate(-385 -4473)"
                      fill="none"
                      data-name="Group 40"
                    >
                      <g
                        transform="translate(385 4473)"
                        stroke="#fff"
                        strokeWidth="2"
                        data-name="Ellipse 3"
                      >
                        <circle cx="32.5" cy="32.5" r="32.5" stroke="none" />
                        <circle cx="32.5" cy="32.5" r="31.5" fill="none" />
                      </g>
                      <g
                        transform="translate(434.13 4491.1) rotate(90)"
                        data-name="Polygon 1"
                      >
                        <path d="M11.295,5.828a4,4,0,0,1,6.887,0l7.729,13.079a4,4,0,0,1-3.444,6.035H7.01a4,4,0,0,1-3.444-6.035Z" />
                        <path
                          d="m14.738 5.8627c-0.34315 0-1.1978 0.095741-1.7219 0.98254l-7.7285 13.079c-0.53329 0.90249-0.1883 1.7054-0.015228 2.0087 0.17308 0.30331 0.68881 1.0088 1.7371 1.0088h15.457c1.0483 0 1.564-0.70546 1.7371-1.0088 0.17307-0.30331 0.51806-1.1062-0.015232-2.0087l-7.7285-13.079c-0.52402-0.8868-1.3787-0.98254-1.7219-0.98254m0-2c1.3348 0 2.6696 0.65503 3.4437 1.9651l7.7285 13.079c1.5756 2.6665-0.34651 6.0349-3.4437 6.0349h-15.457c-3.0972 0-5.0194-3.3685-3.4437-6.0349l7.7285-13.079c0.77413-1.3101 2.1089-1.9651 3.4437-1.9651z"
                          fill="#fff"
                        />
                      </g>
                    </g>
                  </svg>
                </span>
              </button>
              <div className="testi-con">
                {/* <div className="text-para">
                     comment
                    </div> */}
                <div className="testi-bot-con">
                  <div className="testi-name">Angela Jane</div>
                  <div className="testi-brand">Australia</div>
                </div>
              </div>
            </div>
            <div className="item">
              <button
                className="testi-thumb"
                data-bs-toggle="modal"
                data-bs-target="#testi-video-pop"
                onMouseOver={() => dispatch(increment())}
                onMouseLeave={() => dispatch(decrement())}
                onClick={() => setModalTestimonials(true)}
              >
                <img src="/assets/images/clientthree.jpg" alt="..." />
                <span className="play-btn">
                  <svg
                    onClick={() => {
                      setNumber(3);
                    }}
                    viewBox="0 0 65 65"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      transform="translate(-385 -4473)"
                      fill="none"
                      data-name="Group 40"
                    >
                      <g
                        transform="translate(385 4473)"
                        stroke="#fff"
                        strokeWidth="2"
                        data-name="Ellipse 3"
                      >
                        <circle cx="32.5" cy="32.5" r="32.5" stroke="none" />
                        <circle cx="32.5" cy="32.5" r="31.5" fill="none" />
                      </g>
                      <g
                        transform="translate(434.13 4491.1) rotate(90)"
                        data-name="Polygon 1"
                      >
                        <path d="M11.295,5.828a4,4,0,0,1,6.887,0l7.729,13.079a4,4,0,0,1-3.444,6.035H7.01a4,4,0,0,1-3.444-6.035Z" />
                        <path
                          d="m14.738 5.8627c-0.34315 0-1.1978 0.095741-1.7219 0.98254l-7.7285 13.079c-0.53329 0.90249-0.1883 1.7054-0.015228 2.0087 0.17308 0.30331 0.68881 1.0088 1.7371 1.0088h15.457c1.0483 0 1.564-0.70546 1.7371-1.0088 0.17307-0.30331 0.51806-1.1062-0.015232-2.0087l-7.7285-13.079c-0.52402-0.8868-1.3787-0.98254-1.7219-0.98254m0-2c1.3348 0 2.6696 0.65503 3.4437 1.9651l7.7285 13.079c1.5756 2.6665-0.34651 6.0349-3.4437 6.0349h-15.457c-3.0972 0-5.0194-3.3685-3.4437-6.0349l7.7285-13.079c0.77413-1.3101 2.1089-1.9651 3.4437-1.9651z"
                          fill="#fff"
                        />
                      </g>
                    </g>
                  </svg>
                </span>
              </button>
              <div className="testi-con">
                {/* <div className="text-para">
                     comment
                    </div> */}
                <div className="testi-bot-con">
                  <div className="testi-name">Dennis Mccoy</div>
                  <div className="testi-brand">USA</div>
                </div>
              </div>
            </div>
          </Slider>

          {testimonials?.length < 1 && <p>Now there is no card available...</p>}
          <div
            className="sap-btn-light"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="800"
            data-aos-offset="0"
          >
            <button
              type="button"
              onMouseOver={() => dispatch(increment())}
              onMouseLeave={() => dispatch(decrement())}
              onClick={() => Navigate("/testimonials")}
            >
              view more
            </button>
          </div>
        </div>
      </section>
      {modalTestimonials && (
        <ModalTestimonials
          modalTestimonials={modalTestimonials}
          setModalTestimonials={setModalTestimonials}
          number={number}
          setNumber={setNumber}
        />
      )}
    </>
  );
}
export default Testimonial;
