import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../Redux/Action/Action";
import axios from "axios";
import { toast } from "react-toastify";
function Blog() {
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  const [latestdata, setLatestData] = useState("");
  const [searchPage, setSearchPage] = useState("");
  const contentperrow = 6;
  const [next, setNext] = useState(contentperrow);
  const [loader, setLoader] = useState(false);
  const [blogLimit, setBlogLimit] = useState(1);


// handle pass numbering when user click view more
  useEffect(() => {
    setLoader(true);
    let apiurl = `${process.env.REACT_APP_API_ROOT}/latestblogs?limit=${blogLimit}&keyword=${searchPage}`;
    const handleDebounce = setTimeout(() => {
      axios
        .get(apiurl)
        .then((response) => {
          console.log("mahatma budh",response);
          setData(response.data.data);
          setLoader(false);
        })
        .catch((error) => {
          toast.error(error.message);
          setLoader(false);
        });
    }, 500);
    return () => clearTimeout(handleDebounce);
  }, [searchPage, blogLimit]);

  useEffect(() => {
    if (data?.length < 1) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [data]);

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });

    let apiurlindex = `${process.env.REACT_APP_API_ROOT}/indexblogs`;

    axios.get(apiurlindex).then((response) => {
      var response1 = response.data.data;
      setLatestData(response1);
    });

    return () => {
      dispatch(decrement());
    };
    // eslint-disable-next-line
  }, []);

  console.log("latestdata", latestdata);
  console.log("data", data);

  return (
    <>
      <Helmet>
        <title>kindleBit - Blogs </title>
      </Helmet>

      {data?.length <= 0 && !searchPage ? (
        <div className="loader-head">
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
        </div>
      ) : (
        <main className="inner-page" id="blog">
          <section className="banner dark">
            <img
              className="banner-img"
              src="/assets/images/blog-ban.jpg"
              alt="blogimg"
            />
            <div className="banner-inner container">
              <div className="banner-heading">
                <div className="sap-lg-heading">
                  Ki<span className="orange-text">Bit</span> Blog
                </div>
                <div className="text-para">
                  Catch all latest updates of web development trends, software
                  development updates, digital marketing, social media
                  promotions, and more in our blog.
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
              <section className="home-blog hb-cloned-blog-page">
                <div className="home-blog-inner container">
                  <div className="sec-heading">
                    <div className="sap-caption-head">
                      <div className="sap-caption">top notch information</div>
                    </div>
                    <div className="sap-lg-heading">Our top picks</div>
                  </div>
                  <div className="home-blog-list-head">
                    <div className="home-blog-list-inner">
                      <div className="hbl-head">
                        <Link
                          to={`/blog/${latestdata && latestdata[0]?.slug}`}
                          className="hbl-img"
                        >
                          <img
                            src={latestdata && latestdata[0].blog_image}
                            alt="blogimg"
                            onMouseOver={() => dispatch(increment())}
                            onMouseLeave={() => dispatch(decrement())}
                          />
                        </Link>
                        <div className="hbl-con-head">
                          <div className="hbl-con-inner">
                            <Link
                              to={`/blog/${latestdata && latestdata[0]?.slug}`}
                              onMouseOver={() => dispatch(increment())}
                              onMouseLeave={() => dispatch(decrement())}
                              className="sap-sm-heading"
                            >
                              {latestdata && latestdata[0].title}
                            </Link>
                            <div className="text-para">
                              <p
                                dangerouslySetInnerHTML={{
                                  __html:
                                    latestdata &&
                                    latestdata[0].description.split("</p>", 2),
                                }}
                              ></p>
                            </div>
                          </div>
                          <div className="hbl-bot">
                            <div className="blog-date">
                              {latestdata
                                ? latestdata[0].created_at
                                    .split("T")
                                    .shift()
                                    .split("-")
                                    .reverse()
                                    .join("-")
                                : "None"}
                            </div>
                            <Link
                              to={`/blog/${latestdata && latestdata[0]?.slug}`}
                              className="blog-link"
                              onMouseOver={() => dispatch(increment())}
                              onMouseLeave={() => dispatch(decrement())}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="29.474"
                                height="29.474"
                                viewBox="0 0 29.474 29.474"
                              >
                                <g
                                  id="Ellipse_1"
                                  data-name="Ellipse 1"
                                  fill="none"
                                  stroke="#1c447d"
                                  strokeWidth="2.2"
                                >
                                  <circle
                                    cx="14.737"
                                    cy="14.737"
                                    r="14.737"
                                    stroke="none"
                                  />
                                  <circle
                                    cx="14.737"
                                    cy="14.737"
                                    r="13.637"
                                    fill="none"
                                  />
                                </g>
                                <path
                                  id="Union_2"
                                  data-name="Union 2"
                                  d="M3.452,0,6.9,3.452Zm0,0L0,3.452Z"
                                  transform="translate(16.591 8.07) rotate(45)"
                                  fill="none"
                                  stroke="#1c447d"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2.2"
                                />
                                <line
                                  id="Line_3"
                                  data-name="Line 3"
                                  y2="12.104"
                                  transform="translate(18.864 10.679) rotate(45)"
                                  fill="none"
                                  stroke="#1c447d"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2.2"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="home-blog-list-inner">
                      <div className="hbl-head">
                        <Link
                          to={`/blog/${latestdata && latestdata[1]?.slug}`}
                          className="hbl-img"
                        >
                          <img
                            src={latestdata && latestdata[1].blog_image}
                            alt="blogimg"
                            onMouseOver={() => dispatch(increment())}
                            onMouseLeave={() => dispatch(decrement())}
                          />
                        </Link>
                        <div className="hbl-con-head">
                          <div className="hbl-con-inner">
                            <Link
                              to={`/blog/${latestdata && latestdata[1]?.slug}`}
                              onMouseOver={() => dispatch(increment())}
                              onMouseLeave={() => dispatch(decrement())}
                              className="sap-sm-heading"
                            >
                              {latestdata && latestdata[1].title}
                            </Link>
                          </div>
                          <div className="hbl-bot">
                            <div className="blog-date">
                              {latestdata
                                ? latestdata[1].created_at
                                    .split("T")
                                    .shift()
                                    .split("-")
                                    .reverse()
                                    .join("-")
                                : "None"}
                            </div>
                            <Link
                              to={`/blog/${latestdata && latestdata[1]?.slug}`}
                              onMouseOver={() => dispatch(increment())}
                              onMouseLeave={() => dispatch(decrement())}
                              className="blog-link"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="29.474"
                                height="29.474"
                                viewBox="0 0 29.474 29.474"
                              >
                                <g
                                  id="Ellipse_1"
                                  data-name="Ellipse 1"
                                  fill="none"
                                  stroke="#1c447d"
                                  strokeWidth="2.2"
                                >
                                  <circle
                                    cx="14.737"
                                    cy="14.737"
                                    r="14.737"
                                    stroke="none"
                                  />
                                  <circle
                                    cx="14.737"
                                    cy="14.737"
                                    r="13.637"
                                    fill="none"
                                  />
                                </g>
                                <path
                                  id="Union_2"
                                  data-name="Union 2"
                                  d="M3.452,0,6.9,3.452Zm0,0L0,3.452Z"
                                  transform="translate(16.591 8.07) rotate(45)"
                                  fill="none"
                                  stroke="#1c447d"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2.2"
                                />
                                <line
                                  id="Line_3"
                                  data-name="Line 3"
                                  y2="12.104"
                                  transform="translate(18.864 10.679) rotate(45)"
                                  fill="none"
                                  stroke="#1c447d"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2.2"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="hbl-head">
                        <Link
                          to={`/blog/${latestdata && latestdata[2]?.slug}`}
                          className="hbl-img"
                        >
                          <img
                            src={latestdata && latestdata[2].blog_image}
                            alt="blogimg"
                            onMouseOver={() => dispatch(increment())}
                            onMouseLeave={() => dispatch(decrement())}
                          />
                        </Link>
                        <div className="hbl-con-head">
                          <div className="hbl-con-inner">
                            <Link
                              to={`/blog/${latestdata && latestdata[2]?.slug}`}
                              onMouseOver={() => dispatch(increment())}
                              onMouseLeave={() => dispatch(decrement())}
                              className="sap-sm-heading"
                            >
                              {latestdata && latestdata[2].title}
                            </Link>
                          </div>
                          <div className="hbl-bot">
                            <div className="blog-date">
                              {latestdata
                                ? latestdata[2].created_at
                                    .split("T")
                                    .shift()
                                    .split("-")
                                    .reverse()
                                    .join("-")
                                : "None"}
                            </div>
                            <Link
                              to={`/blog/${latestdata && latestdata[2]?.slug}`}
                              onMouseOver={() => dispatch(increment())}
                              onMouseLeave={() => dispatch(decrement())}
                              className="blog-link"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="29.474"
                                height="29.474"
                                viewBox="0 0 29.474 29.474"
                              >
                                <g
                                  id="Ellipse_1"
                                  data-name="Ellipse 1"
                                  fill="none"
                                  stroke="#1c447d"
                                  strokeWidth="2.2"
                                >
                                  <circle
                                    cx="14.737"
                                    cy="14.737"
                                    r="14.737"
                                    stroke="none"
                                  />
                                  <circle
                                    cx="14.737"
                                    cy="14.737"
                                    r="13.637"
                                    fill="none"
                                  />
                                </g>
                                <path
                                  id="Union_2"
                                  data-name="Union 2"
                                  d="M3.452,0,6.9,3.452Zm0,0L0,3.452Z"
                                  transform="translate(16.591 8.07) rotate(45)"
                                  fill="none"
                                  stroke="#1c447d"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2.2"
                                />
                                <line
                                  id="Line_3"
                                  data-name="Line 3"
                                  y2="12.104"
                                  transform="translate(18.864 10.679) rotate(45)"
                                  fill="none"
                                  stroke="#1c447d"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2.2"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="blog-listing" id="blg-list">
                <div className="blog-listing-inner container">
                  <div className="blog-search">
                    <div className="col-md-12 form-group">
                      <input
                        value={searchPage}
                        type="text"
                        onChange={(e) => setSearchPage(e.target.value)}
                        className="form-control"
                        placeholder="Search by keyword, name or year..."
                      />
                    </div>
                    <div className="sap-btn-dark">
                      <button onClick={() => setSearchPage("")}>
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                  </div>

                  <div className="home-blog-list-inner">
                    {data.length <= 0 && searchPage ? (
                      <span>No such data found</span>
                    ) : (
                      data &&
                      data?.map((ele, index) => {
                        return (
                          <div className="hbl-head" key={index} id="demo">
                            <Link to={`/blog/${ele?.slug}`} className="hbl-img">
                              <img
                                src={ele?.blog_image}
                                onMouseOver={() => dispatch(increment())}
                                onMouseLeave={() => dispatch(decrement())}
                                alt="blogimg"
                              />
                            </Link>
                            <div className="hbl-con-head">
                              <div className="hbl-con-inner">
                                <Link
                                  to={`/blog/${ele?.slug}`}
                                  onMouseOver={() => dispatch(increment())}
                                  onMouseLeave={() => dispatch(decrement())}
                                  className="sap-sm-heading"
                                >
                                  {ele?.title}
                                </Link>
                              </div>
                              <div className="hbl-bot">
                                <div className="blog-date">
                                  {ele?.created_at
                                    .split("T")
                                    .shift()
                                    .split("-")
                                    .reverse()
                                    .join("-")}
                                </div>
                                <Link
                                  to={`/blog/${ele?.slug}`}
                                  onMouseOver={() => dispatch(increment())}
                                  onMouseLeave={() => dispatch(decrement())}
                                  className="blog-link"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="29.474"
                                    height="29.474"
                                    viewBox="0 0 29.474 29.474"
                                  >
                                    <g
                                      id="Ellipse_1"
                                      data-name="Ellipse 1"
                                      fill="none"
                                      stroke="#1c447d"
                                      strokeWidth="2.2"
                                    >
                                      <circle
                                        cx="14.737"
                                        cy="14.737"
                                        r="14.737"
                                        stroke="none"
                                      ></circle>
                                      <circle
                                        cx="14.737"
                                        cy="14.737"
                                        r="13.637"
                                        fill="none"
                                      ></circle>
                                    </g>
                                    <path
                                      id="Union_2"
                                      data-name="Union 2"
                                      d="M3.452,0,6.9,3.452Zm0,0L0,3.452Z"
                                      transform="translate(16.591 8.07) rotate(45)"
                                      fill="none"
                                      stroke="#1c447d"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2.2"
                                    ></path>
                                    <line
                                      id="Line_3"
                                      data-name="Line 3"
                                      y2="12.104"
                                      transform="translate(18.864 10.679) rotate(45)"
                                      fill="none"
                                      stroke="#1c447d"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2.2"
                                    ></line>
                                  </svg>
                                </Link>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>

              
                                 {loader &&
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
                                </div>}

                <div className="sap-btn-dark">
                  <button
                    type="button"
                    onMouseOver={() => dispatch(increment())}
                    onMouseLeave={() => dispatch(decrement())}
                    onClick={() => setBlogLimit(blogLimit + 1)}
                  >
                    read more
                  </button>
                </div>
              </section>
            </div>
          </section>
        </main>
      )}
    </>
  );
}

export default Blog;
