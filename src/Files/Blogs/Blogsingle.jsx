import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../Redux/Action/Action";
import MetaTags from "react-meta-tags";
import axios from "axios";
import {
  FacebookShareButton,
  TwitterShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
} from "react-share";

function Blogsingle() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [latestdata, setLatestData] = useState([]);
  const [forLoader, setForLoader] = useState(true);
  let { id } = useParams();
  const [slug, setSlug] = useState(id);

  const handleSingleBlogDetails = async () => {
    setForLoader(true);
    window.scroll({
      top: 0,
      behavior: "instant",
    });
    await axios
      .get(`${process.env.REACT_APP_API_ROOT}/Blog-single/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setLatestData(response?.data?.data[0]);
        setForLoader(false);
        setTimeout(() => {
          handleAnchor();
        }, 500);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    handleSingleBlogDetails();
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    return () => {
      dispatch(decrement());
    };
    // eslint-disable-next-line
  }, []);

  const handleAnchor = () => {
    let myDiv = document.getElementById("mukul");
    let aTag = myDiv.getElementsByTagName("a");

    if (aTag) {
      for (let a = 0; a < aTag.length; a++) {
        aTag[a].addEventListener("mouseover", () => {
          dispatch(increment());
        });
        aTag[a].addEventListener("mouseleave", () => {
          dispatch(decrement());
        });
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>{latestdata?.seo_title}</title>
      </Helmet>

      <MetaTags>
        <meta
          id="meta-description"
          name="description"
          content={latestdata?.seo_description}
        />
      </MetaTags>

      {forLoader ? (
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
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAADICAYAAABCmsWgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAiPSURBVHhe7d1XbyRFFIbhPb5dcs78WBBcgEAgghYhkkCIJMSKLBBBIBDwb3adE9322B63T1foruquOv0+0re7bJjpqdCnamps5Pi/68fHx9cA9NhgggBucvTvdabJUtHzQeToHyYJ4LKx+hlAj4tKsl5PZPWzFdRKjLBxMoC6g+js96wEGIHlFuzQbpAJIkd/s3EHXByTZH1jwjwqj7WNY7maSXKHPgO6v0uflIX71mTk6K+eSQLgBBt3wONyJQmtKXMtvah5mMHFOUnMAFz/N1MGmMGw5RaDFimt3wgLjBz9Gbdx7/5l3vSyK2pgGCaHkZMEWBr/JAmdQpSUeNyeqiCHf7STJNUID+l1ZhPq0mzcUw7a9rF8AerSVJI7T2//KUt/6FxguYEK6F9PMtbZY/oCVCDNx1K0CdAG9mn9bixy+PtquQVAxQccAY+wSpKi1lh+Y4tabNrlDzj2JQXtca0Epsnhbyn2JDFlglFVjoWfWwUORTn89S5GLeDAxh3wSDtJ2poUE5RB6xtyHjn8heUW4BI9SXLMKKvbR+4+NsiBb5JM1dMlzRRGN9b4z0mmoj33XAHWzP/uFgMUQ3THTcbIwc9s3AEXZZKUsjkYO3cXfpqMZJpJcne6SpK6JjHO47EuSE4Ofko4SQCD+FgK4KFXkhJrS4qlFzUTA+jnJCXSrjM2wADlLLe0Qa0Fdmj9W2Dk4Ec27oALG3fAI10liX6UBDtxWUARLPYlLucQSw5+uIflFuDAcgtotJVCTfOD7H9PJQFcqCSAR33nJL5gelo/GIrsf8dyC3BhuQV4jKskpdegkt/Kp35XI+wbZveldNo1lxJUQ/a/DakkFZ2uaq8my8n8ck6cqzey+2X/m3u5rwEObNwBjzImSVvLpgrCaG230Mj+1yy3ABeWW4BHXCWxVnNyvUFFbTYl7pzEGu01pghMsbfc0gatL6iH1n+ZI/s369q4n15s+nWSrB4ZaV1t1foOYWXv5n2MDsBhnklS8rS0/mkTbonRxn3AcWhKpl2vpSAa5ySAh+x91Vlucbe54Fp60U6LcXW5hQvdtlkPFsPWcksbzCmCfLT2Liyy9yVvAQMubNwBj5GVJPBQwVKtyv5Nukce1LAuSK7ZuDedMjjNI4TEErUdUqZ9jhFBciy3YjAYbVrvVyWy98X97S8B9KCSAB71T5JOaZwluEprp0oje5+z3AJcJp0k1mejrH4uCXfA8WQ31SShN05NMVNo60ml+3qS6rSjOUNSnHX4siid9p0hsvvZA4tr9mhDWqhtX8wn4aiW3U+ZJIAL5ySAR12TpK15NcYi7XUazTzfCGJoaqW9ltqzICy3AA/Z/SRw476wu0c2se960e6zC19uIQ2tbV3B7Fhu9dEGbMpgGK0tM0d2P855TsKJmlvGpr+EfhijqSSnR+95AjetzXIEYzSV5MGpbmdhyrqaaZQ6jpfYF4ryzkmWSGuHEoITbNwLwJgsz/m9ovlBdj4qbLkFFIZKAngwSVrntbWgLJXWFjNHdj5kuQW4UEmS6J5LpAzCaG2XJk0leWjaSkLditf2VW70S6/pz0kQT2vH1EEvllsl0AatFqSltbES2flg4uUWUBkqCeCxrEnSKaNVp3baayo0dX0jiLGxRHt9NaUiLLcAD9l5P9HGvbK7gylDz1HosyCy814J725NcVpm3RTduMx+apZbp0fv82ZB2rGcJVq7pk5F1DYaFtl59+H2lwhQQ0NVNpSDzdn2G6vJQgJSA+26LWROdt7d0lp2ySmJdn0Vxc45CS7T2miuVI5zEsBDtt9xbNwN3AXQ0Hbz9G0w93ILNtC3o7DcykEblFFpbv05YpHaflqU9giMbL/9SPsQAHpQSQCP8isJdS6PZiWRlaF+K/+cBHlobZ0yhrDcWgptILfBVZ02ku232LgDLlQSwINJMkSnHJtJ6bRrniDL+kYQqWKV9lpLykxk+0bZexL94nK/f7lskmFEXjxifX0nWzcenX6SFD0tcWLoWDbYt/Mst1A+rd9CYhAbd0u0QTs2VmmvtSey9eYMyy2gIlQSwINJsq5TZkknc9CuY+JwTrIeuGltljsFoJIAHrL1xoiNeyEzHaESHuRJT+dXNyb8bSJbrz/GUAccWG7VpL2dlZZaaNceGNl6jUoCuFBJAA/bk6RTNknmpKY9xwyxfU6CaWl9MCaFYLmFQbQxfRYLzl9P84NsvsrGHXChkgAeC6skhX7pqOUe6DuZHySy/xI9tWy+8jjLLcCB5RbgUcckaWsdqT+xtMeYIXWck8AGrW9dKQTLLcTTBnRMSqZcr2y+zMYdcKGSAB5Mkhw65Zo4koP2PCPCN4LIkUVrD/wicvJ/uG1+mTKjXb5G2XzpiSQPC1g13SRhKsKnvXFrZh470y23AB9t3LSZGRt3nNIG51yZmnYNa5HNF9mTlGypndO38hprSHturCYLKTRLpbVFigzBcstFa2UybYbSHmtgOCdxBfPT+iUkCVFJAA+5/ULAxj3xzKxTrq0kgp19KXDUeBzfb81yq3kQX06eaOnB7AaNx/FYblnV3m2tJiXt8Tth4241lmmvd2gCUEkAD/uTRLt7EDvx0f5NZOwvt2Cb1ufrSYDlFsqnDf5uclg9ttx+/slcTwGYQCVBhbTzkLOkJteaSvIUlaR09FCcmLkS0Lack9QQxNHasC8BTC63tLYgy4tG+3u+yK3nCl5ulXtlqEV36TVgTJW93ALGSjCmeHcL0+sO3CkSa+3fyq1neXcLcKGSAB5MkimslW5SQPpof7eJ3HqG5da0cpwKI5427PW+aSpJ+wdkuqAM4X3TVJKn01YS6hJq0s4Nz5hNf04C1CRgzLJxx3DdG2TN0az+jA84kuGxxPH6qCSAB5MkhHaXIXZzZvXfLLdCgmXp9DuVBIuzfv9zpXV8fO3a/wHf0JIXyR9+AAAAAElFTkSuQmCC"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      ) : (
        <main className="inner-page" id="single-blog">
          <section className="single-blog-post">
            <div className="single-blog-post-inner container">
              <div className="row blog-post-top-head">
                <div className="col-md-12 blog-post-details">
                  <div className="sap-md-heading">{latestdata?.title}</div>
                  <div className="blog-date-posted">
                    {`Published on ${
                      latestdata
                        ? latestdata?.created_at
                            ?.split("T")
                            ?.shift()
                            ?.split("-")
                            ?.reverse()
                            ?.join("-")
                        : "None"
                    }`}
                  </div>
                  <div className="blog-social-links">
                    <ul>
                      <FacebookShareButton
                        url={`http://kindlebit.com/blog-single/${slug}`}
                        onMouseOver={() => dispatch(increment())}
                        onMouseLeave={() => dispatch(decrement())}
                      >
                        <li>
                          <a
                            href="https://www.facebook.com/KindleBit"
                            rel="noreferrer"
                            target="_blank"
                          >
                            <i className="fa-brands fa-facebook-f"></i>
                          </a>
                        </li>
                      </FacebookShareButton>
                      <TwitterShareButton
                        url={`http://kindlebit.com/blog-single/${slug}`}
                        onMouseOver={() => dispatch(increment())}
                        onMouseLeave={() => dispatch(decrement())}
                      >
                        <li>
                          <a
                            href="https://twitter.com/KindleBit"
                            rel="noreferrer"
                            target="_blank"
                          >
                            <i className="fa-brands fa-twitter"></i>
                          </a>
                        </li>
                      </TwitterShareButton>
                      <InstapaperShareButton
                        url={`http://kindlebit.com/blog-single/${slug}`}
                        onMouseOver={() => dispatch(increment())}
                        onMouseLeave={() => dispatch(decrement())}
                      >
                        <li>
                          <a
                            href="https://www.instagram.com/kindlebit_solutions/"
                            rel="noreferrer"
                            target="_blank"
                          >
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                        </li>
                      </InstapaperShareButton>
                      <LinkedinShareButton
                        quote={`${latestdata?.title}`}
                        url={`http://kindlebit.com/blog-single/${slug}`}
                        onMouseOver={() => dispatch(increment())}
                        onMouseLeave={() => dispatch(decrement())}
                      >
                        <li>
                          <a
                            href="https://in.linkedin.com/company/kindlebit-solutions"
                            rel="noreferrer"
                            target="_blank"
                          >
                            <i className="fa-brands fa-linkedin-in"></i>
                          </a>
                        </li>
                      </LinkedinShareButton>
                    </ul>
                  </div>
                </div>
                {/* <div className="col-md-12 blog-ban"><img src="/assets/images/blogs-img/single-blog-ban.jpg" alt="blogimg"/></div> */}
              </div>
              <div className="col-md-12 blog-ban">
                <img src={latestdata?.blog_image} alt="blogimg" />
              </div>
              <div className="col-md-12 blog-post-con" id="mukul">
                <div className="sap-sm-heading">
                  {latestdata?.title?.replaceAll("-", " ")}
                </div>
                <div className="text-para">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: latestdata?.description,
                    }}
                  />
                </div>
              </div>

              {/* <div className="row blog-right">
                  <div className="col-md-5 blog-post-img"><img src={ele.blog_image}  alt="blogimg"/></div>
                </div> */}

              <div className="row blog-full"></div>

              {/* <div className="row blog-full">
                  <div className="col-md-4"></div>
                  <div className="col-md-4 blog-post-img"><img src={ele.blog_image}  alt="blogimg"/></div>
                  <div className="col-md-4"></div>
                </div> */}

              {/* <div className="row blog-post-navi">
                      {prevBlog === undefined || "" || null ? (
                        <>
                          <div
                            className="blog-post-navi-inner"
                            id="prev-blog-head"
                          >
                            <div className="blog-arrow"></div>
                            <div className="prev-blog">
                              <div className="sap-sm-heading">
                                Previous Blog not found
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <Link
                          to={`/blog-single/${prevBlog.id}`}
                          onMouseOver={() => dispatch(increment())}
                          onMouseLeave={() => dispatch(decrement())}
                          className="blog-post-navi-inner"
                          id="prev-blog-head"
                        >
                          <div className="blog-arrow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="37.953"
                              height="22.109"
                              viewBox="0 0 37.953 22.109"
                            >
                              <path
                                id="Union_19"
                                data-name="Union 19"
                                d="M10.055,10.055,20.109,0Zm0,0L0,0Z"
                                transform="translate(11.055 1) rotate(90)"
                                fill="rgba(0,0,0,0)"
                                stroke="#c9c9c9"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              />
                              <line
                                id="Line_34"
                                data-name="Line 34"
                                y1="35.259"
                                transform="translate(36.953 11.054) rotate(90)"
                                fill="rgba(0,0,0,0)"
                                stroke="#c9c9c9"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              />
                            </svg>
                          </div>
                          <div className="prev-blog">
                            <div className="sap-sm-heading">
                              {prevBlog ? prevBlog.title : ""}
                            </div>
                          </div>
                        </Link>
                      )}
                      {nextBlog == undefined || "" || null ? (
                        <>
                          <div
                            className="blog-post-navi-inner"
                            id="next-blog-head"
                          >
                            <div className="next-blog">
                              <div className="sap-sm-heading"></div>
                            </div>
                            <div className="blog-arrow"></div>
                          </div>
                        </>
                      ) : (
                        <Link
                          to={`/blog-single/${nextBlog.id}`}
                          onMouseOver={() => dispatch(increment())}
                          onMouseLeave={() => dispatch(decrement())}
                          className="blog-post-navi-inner"
                          id="next-blog-head"
                        >
                          <div className="next-blog">
                            <div className="sap-sm-heading">
                              {nextBlog ? nextBlog.title : ""}
                            </div>
                          </div>
                          <div className="blog-arrow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="37.953"
                              height="22.109"
                              viewBox="0 0 37.953 22.109"
                            >
                              <path
                                id="Union_17"
                                data-name="Union 17"
                                d="M10.055,0,20.109,10.055Zm0,0L0,10.055Z"
                                transform="translate(36.953 1) rotate(90)"
                                fill="rgba(0,0,0,0)"
                                stroke="#c9c9c9"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              />
                              <line
                                id="Line_31"
                                data-name="Line 31"
                                y2="35.26"
                                transform="translate(36.26 11.054) rotate(90)"
                                fill="rgba(0,0,0,0)"
                                stroke="#c9c9c9"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              />
                            </svg>
                          </div>
                        </Link>
                      )}
                    </div> */}

              <div className="row blog-post-navi">
                {latestdata?.previous === "" ? (
                  ""
                ) : (
                  <Link
                    to={`/blog/${latestdata?.previous}`}
                    className="blog-post-navi-inner"
                    id="prev-blog-head"
                    onMouseOver={() => dispatch(increment())}
                    onMouseLeave={() => dispatch(decrement())}
                    onClick={() => {
                      setSlug(latestdata?.previous);
                      window.scroll({
                        top: 0,
                        behavior: "instant",
                      });
                    }}
                  >
                    <div className="blog-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="37.953"
                        height="22.109"
                        viewBox="0 0 37.953 22.109"
                      >
                        <path
                          id="Union_19"
                          data-name="Union 19"
                          d="M10.055,10.055,20.109,0Zm0,0L0,0Z"
                          transform="translate(11.055 1) rotate(90)"
                          fill="rgba(0,0,0,0)"
                          stroke="#c9c9c9"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <line
                          id="Line_34"
                          data-name="Line 34"
                          y1="35.259"
                          transform="translate(36.953 11.054) rotate(90)"
                          fill="rgba(0,0,0,0)"
                          stroke="#c9c9c9"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <div className="prev-blog">
                      <div className="sap-sm-heading">
                        {latestdata?.title1?.replaceAll("-", " ")}
                      </div>
                    </div>
                  </Link>
                )}

                {latestdata?.next === "" ? (
                  ""
                ) : (
                  <Link
                    to={`/blog/${latestdata?.next}`}
                    className="blog-post-navi-inner"
                    id="next-blog-head"
                    onMouseOver={() => dispatch(increment())}
                    onMouseLeave={() => dispatch(decrement())}
                    onClick={() => {
                      setSlug(latestdata?.next);
                      window.scroll({
                        top: 0,
                        behavior: "instant",
                      });
                    }}
                  >
                    <div className="next-blog">
                      <div className="sap-sm-heading">
                        {latestdata?.title2?.replaceAll("-", " ")}
                      </div>
                    </div>
                    <div className="blog-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="37.953"
                        height="22.109"
                        viewBox="0 0 37.953 22.109"
                      >
                        <path
                          id="Union_17"
                          data-name="Union 17"
                          d="M10.055,0,20.109,10.055Zm0,0L0,10.055Z"
                          transform="translate(36.953 1) rotate(90)"
                          fill="rgba(0,0,0,0)"
                          stroke="#c9c9c9"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <line
                          id="Line_31"
                          data-name="Line 31"
                          y2="35.26"
                          transform="translate(36.26 11.054) rotate(90)"
                          fill="rgba(0,0,0,0)"
                          stroke="#c9c9c9"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </Link>
                )}
              </div>

              <div className="sap-btn-dark">
                <button
                  onMouseOver={() => dispatch(increment())}
                  onMouseLeave={() => dispatch(decrement())}
                  onClick={() => {
                    navigate("/blog");
                    setSlug(id);
                  }}
                >
                  go back
                </button>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
}
export default Blogsingle;
