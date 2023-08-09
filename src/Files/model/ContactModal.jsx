import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../Redux/Action/Action";

function ContactModal({ commonModal, setCommonModal }) {
  const dispatch = useDispatch();
  return (
    <>
      {/* Modal section start */}
      <Modal
        show={commonModal}
        animation={true}
        onHide={() => setCommonModal(false)}
        backdrop="static"
        keyboard={false}
        centered
        id="header-contact"
      >
        <Modal.Header
          onMouseOver={() => dispatch(increment())}
          onMouseLeave={() => dispatch(decrement())}
          closeButton
        ></Modal.Header>
        <Modal.Body>
          <div className="sap-lg-heading">
            We're ready
            <br />
            to Talk!
          </div>
          <div className="contact-pop-head">
            <Link
              className="cpop-inner"
              onClick={() => {
                window.open("tel:+91 77430 00840", "_self");
              }}
              onMouseOver={() => dispatch(increment())}
              onMouseLeave={() => dispatch(decrement())}
            >
              <div className="cpop-top">
                <div className="flag-icon">
                  <svg
                    id="Group_332"
                    data-name="Group 332"
                    xmlns="http://www.w3.org/2000/svg"
                    width="33.333"
                    height="25"
                    viewBox="0 0 33.333 25"
                  >
                    <path
                      id="Path_465"
                      data-name="Path 465"
                      d="M0,0H33.333V8.333H0Z"
                      fill="#f93"
                    />
                    <path
                      id="Path_466"
                      data-name="Path 466"
                      d="M0,160H33.333v8.333H0Z"
                      transform="translate(0 -151.667)"
                      fill="#fff"
                    />
                    <path
                      id="Path_467"
                      data-name="Path 467"
                      d="M0,320H33.333v8.333H0Z"
                      transform="translate(0 -303.333)"
                      fill="#128807"
                    />
                    <g
                      id="Group_234"
                      data-name="Group 234"
                      transform="translate(10.826 5.419)"
                    >
                      <circle
                        id="Ellipse_9"
                        data-name="Ellipse 9"
                        cx="3.151"
                        cy="3.151"
                        r="3.151"
                        transform="translate(2.677 4.033)"
                        fill="#008"
                      />
                      <ellipse
                        id="Ellipse_10"
                        data-name="Ellipse 10"
                        cx="3.151"
                        cy="2.836"
                        rx="3.151"
                        ry="2.836"
                        transform="translate(2.677 4.033)"
                        fill="#fff"
                      />
                      <circle
                        id="Ellipse_11"
                        data-name="Ellipse 11"
                        cx="0.583"
                        cy="0.583"
                        r="0.583"
                        transform="translate(5.258 6.498)"
                        fill="#008"
                      />
                      <g id="d" transform="translate(0.538 4.745)">
                        <g id="c" transform="translate(2.761 2.067)">
                          <g id="b" transform="translate(1.691 0.45)">
                            <g id="a" transform="translate(0.751 0.033)">
                              <circle
                                id="Ellipse_12"
                                data-name="Ellipse 12"
                                cx="0.15"
                                cy="0.15"
                                r="0.15"
                                transform="matrix(0.991, 0.131, -0.131, 0.991, 2.863, 0)"
                                fill="#008"
                              />
                              <path
                                id="Path_468"
                                data-name="Path 468"
                                d="M-1.82,8.983l.1-1.75-.1-.833-.1.833Z"
                                transform="translate(1.92 -6.28)"
                                fill="#008"
                              />
                            </g>
                            <g
                              id="Group_211"
                              data-name="Group 211"
                              transform="matrix(0.966, 0.259, -0.259, 0.966, 0.7, 0)"
                            >
                              <circle
                                id="Ellipse_13"
                                data-name="Ellipse 13"
                                cx="0.15"
                                cy="0.15"
                                r="0.15"
                                transform="matrix(0.991, 0.131, -0.131, 0.991, 2.863, 0)"
                                fill="#008"
                              />
                              <path
                                id="Path_469"
                                data-name="Path 469"
                                d="M.1,2.583.2.833.1,0,0,.833Z"
                                transform="translate(0 0.12)"
                                fill="#008"
                              />
                            </g>
                          </g>
                          <g
                            id="Group_213"
                            data-name="Group 213"
                            transform="matrix(0.866, 0.5, -0.5, 0.866, 1.714, 0)"
                          >
                            <g
                              id="a-2"
                              data-name="a"
                              transform="translate(0.751 0.033)"
                            >
                              <circle
                                id="Ellipse_14"
                                data-name="Ellipse 14"
                                cx="0.15"
                                cy="0.15"
                                r="0.15"
                                transform="matrix(0.991, 0.131, -0.131, 0.991, 2.863, 0)"
                                fill="#008"
                              />
                              <path
                                id="Path_470"
                                data-name="Path 470"
                                d="M.1,2.583.2.833.1,0,0,.833Z"
                                transform="translate(0 0.12)"
                                fill="#008"
                              />
                            </g>
                            <g
                              id="Group_212"
                              data-name="Group 212"
                              transform="matrix(0.966, 0.259, -0.259, 0.966, 0.7, 0)"
                            >
                              <circle
                                id="Ellipse_15"
                                data-name="Ellipse 15"
                                cx="0.15"
                                cy="0.15"
                                r="0.15"
                                transform="matrix(0.991, 0.131, -0.131, 0.991, 2.863, 0)"
                                fill="#008"
                              />
                              <path
                                id="Path_471"
                                data-name="Path 471"
                                d="M.1,2.583.2.833.1,0,0,.833Z"
                                transform="translate(0 0.12)"
                                fill="#008"
                              />
                            </g>
                          </g>
                        </g>
                        <g
                          id="Group_217"
                          data-name="Group 217"
                          transform="matrix(0.5, 0.866, -0.866, 0.5, 4.265, 0)"
                        >
                          <g
                            id="b-2"
                            data-name="b"
                            transform="translate(1.691 0.45)"
                          >
                            <g
                              id="a-3"
                              data-name="a"
                              transform="translate(0.751 0.033)"
                            >
                              <circle
                                id="Ellipse_16"
                                data-name="Ellipse 16"
                                cx="0.15"
                                cy="0.15"
                                r="0.15"
                                transform="matrix(0.991, 0.131, -0.131, 0.991, 2.863, 0)"
                                fill="#008"
                              />
                              <path
                                id="Path_472"
                                data-name="Path 472"
                                d="M.1,2.583.2.833.1,0,0,.833Z"
                                transform="translate(0 0.12)"
                                fill="#008"
                              />
                            </g>
                            <g
                              id="Group_214"
                              data-name="Group 214"
                              transform="matrix(0.966, 0.259, -0.259, 0.966, 0.7, 0)"
                            >
                              <circle
                                id="Ellipse_17"
                                data-name="Ellipse 17"
                                cx="0.15"
                                cy="0.15"
                                r="0.15"
                                transform="matrix(0.991, 0.131, -0.131, 0.991, 2.863, 0)"
                                fill="#008"
                              />
                              <path
                                id="Path_473"
                                data-name="Path 473"
                                d="M.1,2.583.2.833.1,0,0,.833Z"
                                transform="translate(0 0.12)"
                                fill="#008"
                              />
                            </g>
                          </g>
                          <g
                            id="Group_216"
                            data-name="Group 216"
                            transform="matrix(0.866, 0.5, -0.5, 0.866, 1.714, 0)"
                          >
                            <g
                              id="a-4"
                              data-name="a"
                              transform="translate(0.751 0.033)"
                            >
                              <circle
                                id="Ellipse_18"
                                data-name="Ellipse 18"
                                cx="0.15"
                                cy="0.15"
                                r="0.15"
                                transform="matrix(0.991, 0.131, -0.131, 0.991, 2.863, 0)"
                                fill="#008"
                              />
                              <path
                                id="Path_474"
                                data-name="Path 474"
                                d="M.1,2.583.2.833.1,0,0,.833Z"
                                transform="translate(0 0.12)"
                                fill="#008"
                              />
                            </g>
                            <g
                              id="Group_215"
                              data-name="Group 215"
                              transform="matrix(0.966, 0.259, -0.259, 0.966, 0.7, 0)"
                            >
                              <circle
                                id="Ellipse_19"
                                data-name="Ellipse 19"
                                cx="0.15"
                                cy="0.15"
                                r="0.15"
                                transform="matrix(0.991, 0.131, -0.131, 0.991, 2.863, 0)"
                                fill="#008"
                              />
                              <path
                                id="Path_475"
                                data-name="Path 475"
                                d="M.1,2.583.2.833.1,0,0,.833Z"
                                transform="translate(0 0.12)"
                                fill="#008"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                      <g
                        id="Group_225"
                        data-name="Group 225"
                        transform="matrix(-0.5, 0.866, -0.866, -0.5, 10.516, 3.657)"
                      >
                        <g
                          id="c-2"
                          data-name="c"
                          transform="translate(2.761 2.067)"
                        >
                          <g
                            id="b-3"
                            data-name="b"
                            transform="translate(1.691 0.45)"
                          >
                            <g
                              id="a-5"
                              data-name="a"
                              transform="translate(0.751 0.033)"
                            >
                              <circle
                                id="Ellipse_20"
                                data-name="Ellipse 20"
                                cx="0.15"
                                cy="0.15"
                                r="0.15"
                                transform="matrix(0.991, 0.131, -0.131, 0.991, 2.863, 0)"
                                fill="#008"
                              />
                              <path
                                id="Path_476"
                                data-name="Path 476"
                                d="M.1,2.583.2.833.1,0,0,.833Z"
                                transform="translate(0 0.12)"
                                fill="#008"
                              />
                            </g>
                            <g
                              id="Group_218"
                              data-name="Group 218"
                              transform="matrix(0.966, 0.259, -0.259, 0.966, 0.7, 0)"
                            >
                              <circle
                                id="Ellipse_21"
                                data-name="Ellipse 21"
                                cx="0.15"
                                cy="0.15"
                                r="0.15"
                                transform="matrix(0.991, 0.131, -0.131, 0.991, 2.863, 0)"
                                fill="#008"
                              />
                              <path
                                id="Path_477"
                                data-name="Path 477"
                                d="M.1,2.583.2.833.1,0,0,.833Z"
                                transform="translate(0 0.12)"
                                fill="#008"
                              />
                            </g>
                          </g>
                          <g
                            id="Group_220"
                            data-name="Group 220"
                            transform="matrix(0.866, 0.5, -0.5, 0.866, 1.714, 0)"
                          >
                            <g
                              id="a-6"
                              data-name="a"
                              transform="translate(0.751 0.033)"
                            >
                              <circle
                                id="Ellipse_22"
                                data-name="Ellipse 22"
                                cx="0.15"
                                cy="0.15"
                                r="0.15"
                                transform="matrix(0.991, 0.131, -0.131, 0.991, 2.863, 0)"
                                fill="#008"
                              />
                              <path
                                id="Path_478"
                                data-name="Path 478"
                                d="M.1,2.583.2.833.1,0,0,.833Z"
                                transform="translate(0 0.12)"
                                fill="#008"
                              />
                            </g>
                            <g
                              id="Group_219"
                              data-name="Group 219"
                              transform="matrix(0.966, 0.259, -0.259, 0.966, 0.7, 0)"
                            >
                              <circle
                                id="Ellipse_23"
                                data-name="Ellipse 23"
                                cx="0.15"
                                cy="0.15"
                                r="0.15"
                                transform="matrix(0.991, 0.131, -0.131, 0.991, 2.863, 0)"
                                fill="#008"
                              />
                              <path
                                id="Path_479"
                                data-name="Path 479"
                                d="M.1,2.583.2.833.1,0,0,.833Z"
                                transform="translate(0 0.12)"
                                fill="#008"
                              />
                            </g>
                          </g>
                        </g>
                        <g
                          id="Group_224"
                          data-name="Group 224"
                          transform="matrix(0.5, 0.866, -0.866, 0.5, 4.265, 0)"
                        >
                          <g
                            id="b-4"
                            data-name="b"
                            transform="translate(1.691 0.45)"
                          >
                            <g
                              id="a-7"
                              data-name="a"
                              transform="translate(0.751 0.033)"
                            >
                              <circle
                                id="Ellipse_24"
                                data-name="Ellipse 24"
                                cx="0.15"
                                cy="0.15"
                                r="0.15"
                                transform="matrix(0.991, 0.131, -0.131, 0.991, 2.863, 0)"
                                fill="#008"
                              />
                              <path
                                id="Path_480"
                                data-name="Path 480"
                                d="M.1,2.583.2.833.1,0,0,.833Z"
                                transform="translate(0 0.12)"
                                fill="#008"
                              />
                            </g>
                            <g
                              id="Group_221"
                              data-name="Group 221"
                              transform="matrix(0.966, 0.259, -0.259, 0.966, 0.7, 0)"
                            >
                              <circle
                                id="Ellipse_25"
                                data-name="Ellipse 25"
                                cx="0.15"
                                cy="0.15"
                                r="0.15"
                                transform="matrix(0.991, 0.131, -0.131, 0.991, 2.863, 0)"
                                fill="#008"
                              />
                              <path
                                id="Path_481"
                                data-name="Path 481"
                                d="M.1,2.583.2.833.1,0,0,.833Z"
                                transform="translate(0 0.12)"
                                fill="#008"
                              />
                            </g>
                          </g>
                          <g
                            id="Group_223"
                            data-name="Group 223"
                            transform="matrix(0.866, 0.5, -0.5, 0.866, 1.714, 0)"
                          >
                            <g
                              id="a-8"
                              data-name="a"
                              transform="translate(0.751 0.033)"
                            >
                              <circle
                                id="Ellipse_26"
                                data-name="Ellipse 26"
                                cx="0.15"
                                cy="0.15"
                                r="0.15"
                                transform="matrix(0.991, 0.131, -0.131, 0.991, 2.863, 0)"
                                fill="#008"
                              />
                              <path
                                id="Path_482"
                                data-name="Path 482"
                                d="M.1,2.583.2.833.1,0,0,.833Z"
                                transform="translate(0 0.12)"
                                fill="#008"
                              />
                            </g>
                            <g
                              id="Group_222"
                              data-name="Group 222"
                              transform="matrix(0.966, 0.259, -0.259, 0.966, 0.7, 0)"
                            >
                              <circle
                                id="Ellipse_27"
                                data-name="Ellipse 27"
                                cx="0.15"
                                cy="0.15"
                                r="0.15"
                                transform="matrix(0.991, 0.131, -0.131, 0.991, 2.863, 0)"
                                fill="#008"
                              />
                              <path
                                id="Path_483"
                                data-name="Path 483"
                                d="M.1,2.583.2.833.1,0,0,.833Z"
                                transform="translate(0 0.12)"
                                fill="#008"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                      <g
                        id="Group_233"
                        data-name="Group 233"
                        transform="matrix(-0.5, -0.866, 0.866, -0.5, 6.469, 12.842)"
                      >
                        <g
                          id="c-3"
                          data-name="c"
                          transform="translate(2.761 2.067)"
                        >
                          <g
                            id="b-5"
                            data-name="b"
                            transform="translate(1.691 0.45)"
                          >
                            <g
                              id="a-9"
                              data-name="a"
                              transform="translate(0.751 0.033)"
                            >
                              <circle
                                id="Ellipse_28"
                                data-name="Ellipse 28"
                                cx="0.15"
                                cy="0.15"
                                r="0.15"
                                transform="matrix(0.991, 0.131, -0.131, 0.991, 2.863, 0)"
                                fill="#008"
                              />
                              <path
                                id="Path_484"
                                data-name="Path 484"
                                d="M.1,2.583.2.833.1,0,0,.833Z"
                                transform="translate(0 0.12)"
                                fill="#008"
                              />
                            </g>
                            <g
                              id="Group_226"
                              data-name="Group 226"
                              transform="matrix(0.966, 0.259, -0.259, 0.966, 0.7, 0)"
                            >
                              <circle
                                id="Ellipse_29"
                                data-name="Ellipse 29"
                                cx="0.15"
                                cy="0.15"
                                r="0.15"
                                transform="matrix(0.991, 0.131, -0.131, 0.991, 2.863, 0)"
                                fill="#008"
                              />
                              <path
                                id="Path_485"
                                data-name="Path 485"
                                d="M.1,2.583.2.833.1,0,0,.833Z"
                                transform="translate(0 0.12)"
                                fill="#008"
                              />
                            </g>
                          </g>
                          <g
                            id="Group_228"
                            data-name="Group 228"
                            transform="matrix(0.866, 0.5, -0.5, 0.866, 1.714, 0)"
                          >
                            <g
                              id="a-10"
                              data-name="a"
                              transform="translate(0.751 0.033)"
                            >
                              <circle
                                id="Ellipse_30"
                                data-name="Ellipse 30"
                                cx="0.15"
                                cy="0.15"
                                r="0.15"
                                transform="matrix(0.991, 0.131, -0.131, 0.991, 2.863, 0)"
                                fill="#008"
                              />
                              <path
                                id="Path_486"
                                data-name="Path 486"
                                d="M.1,2.583.2.833.1,0,0,.833Z"
                                transform="translate(0 0.12)"
                                fill="#008"
                              />
                            </g>
                            <g
                              id="Group_227"
                              data-name="Group 227"
                              transform="matrix(0.966, 0.259, -0.259, 0.966, 0.7, 0)"
                            >
                              <circle
                                id="Ellipse_31"
                                data-name="Ellipse 31"
                                cx="0.15"
                                cy="0.15"
                                r="0.15"
                                transform="matrix(0.991, 0.131, -0.131, 0.991, 2.863, 0)"
                                fill="#008"
                              />
                              <path
                                id="Path_487"
                                data-name="Path 487"
                                d="M.1,2.583.2.833.1,0,0,.833Z"
                                transform="translate(0 0.12)"
                                fill="#008"
                              />
                            </g>
                          </g>
                        </g>
                        <g
                          id="Group_232"
                          data-name="Group 232"
                          transform="matrix(0.5, 0.866, -0.866, 0.5, 4.265, 0)"
                        >
                          <g
                            id="b-6"
                            data-name="b"
                            transform="translate(1.691 0.45)"
                          >
                            <g
                              id="a-11"
                              data-name="a"
                              transform="translate(0.751 0.033)"
                            >
                              <circle
                                id="Ellipse_32"
                                data-name="Ellipse 32"
                                cx="0.15"
                                cy="0.15"
                                r="0.15"
                                transform="matrix(0.991, 0.131, -0.131, 0.991, 2.863, 0)"
                                fill="#008"
                              />
                              <path
                                id="Path_488"
                                data-name="Path 488"
                                d="M.1,2.583.2.833.1,0,0,.833Z"
                                transform="translate(0 0.12)"
                                fill="#008"
                              />
                            </g>
                            <g
                              id="Group_229"
                              data-name="Group 229"
                              transform="matrix(0.966, 0.259, -0.259, 0.966, 0.7, 0)"
                            >
                              <circle
                                id="Ellipse_33"
                                data-name="Ellipse 33"
                                cx="0.15"
                                cy="0.15"
                                r="0.15"
                                transform="matrix(0.991, 0.131, -0.131, 0.991, 2.863, 0)"
                                fill="#008"
                              />
                              <path
                                id="Path_489"
                                data-name="Path 489"
                                d="M.1,2.583.2.833.1,0,0,.833Z"
                                transform="translate(0 0.12)"
                                fill="#008"
                              />
                            </g>
                          </g>
                          <g
                            id="Group_231"
                            data-name="Group 231"
                            transform="matrix(0.866, 0.5, -0.5, 0.866, 1.714, 0)"
                          >
                            <g
                              id="a-12"
                              data-name="a"
                              transform="translate(0.751 0.033)"
                            >
                              <circle
                                id="Ellipse_34"
                                data-name="Ellipse 34"
                                cx="0.15"
                                cy="0.15"
                                r="0.15"
                                transform="matrix(0.991, 0.131, -0.131, 0.991, 2.863, 0)"
                                fill="#008"
                              />
                              <path
                                id="Path_490"
                                data-name="Path 490"
                                d="M.1,2.583.2.833.1,0,0,.833Z"
                                transform="translate(0 0.12)"
                                fill="#008"
                              />
                            </g>
                            <g
                              id="Group_230"
                              data-name="Group 230"
                              transform="matrix(0.966, 0.259, -0.259, 0.966, 0.7, 0)"
                            >
                              <circle
                                id="Ellipse_35"
                                data-name="Ellipse 35"
                                cx="0.15"
                                cy="0.15"
                                r="0.15"
                                transform="matrix(0.991, 0.131, -0.131, 0.991, 2.863, 0)"
                                fill="#008"
                              />
                              <path
                                id="Path_491"
                                data-name="Path 491"
                                d="M.1,2.583.2.833.1,0,0,.833Z"
                                transform="translate(0 0.12)"
                                fill="#008"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="sap-sm-heading">
                  Kindlebit Solutions Pvt. Ltd.
                </div>
              </div>
              <div className="cpop-bot">
                <div className="call-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.977"
                    height="21"
                    viewBox="0 0 20.977 21"
                  >
                    <path
                      id="Path_658"
                      data-name="Path 658"
                      d="M9188.094,6555.64c-.125,0-.256,0-.389-.017a11.074,11.074,0,0,1-4.129-1.3,21.21,21.21,0,0,1-6.092-4.566,20.182,20.182,0,0,1-4.328-6.806,7.924,7.924,0,0,1-.562-2.949,3.014,3.014,0,0,1,.861-2.137c.51-.523,1.055-1.071,1.621-1.628a2.259,2.259,0,0,1,1.127-.6h.273a.383.383,0,0,0,.135.022h.031l.01,0,.059.008a1.723,1.723,0,0,1,1.01.538l.422.415.033.033c.766.746,1.553,1.519,2.285,2.319a1.65,1.65,0,0,1,0,2.295,21.622,21.622,0,0,1-1.547,1.559.475.475,0,0,0-.123.611,12.115,12.115,0,0,0,2.178,3.008,14.794,14.794,0,0,0,2.891,2.441c.176.113.361.212.537.307.127.067.256.136.377.206a.377.377,0,0,0,.506-.086.1.1,0,0,1,.014-.015l.41-.408c.293-.3.627-.63.951-.952a2.025,2.025,0,0,1,1.105-.639,1.962,1.962,0,0,1,.3-.024,1.672,1.672,0,0,1,1.191.521c1.025,1.006,1.871,1.851,2.664,2.658a1.722,1.722,0,0,1,.1,2.525,20.373,20.373,0,0,1-1.941,1.971A2.857,2.857,0,0,1,9188.094,6555.64Zm-11.674-19.49a1.281,1.281,0,0,0-.8.3,3.166,3.166,0,0,0-.264.232c-.166.165-.328.33-.494.5-.293.294-.594.6-.895.889a2.674,2.674,0,0,0-.867,2.027,8.3,8.3,0,0,0,.6,2.861,20.01,20.01,0,0,0,4.2,6.5,20.607,20.607,0,0,0,6.078,4.5,10.56,10.56,0,0,0,3.613,1.147,4.822,4.822,0,0,0,.486.026,2.473,2.473,0,0,0,1.8-.66c.545-.522,1.123-1.113,1.758-1.806a1.2,1.2,0,0,0-.016-1.764c-.791-.814-1.666-1.69-2.754-2.757a1.148,1.148,0,0,0-.807-.349,1.288,1.288,0,0,0-.74.254,2.626,2.626,0,0,0-.332.293q-.352.349-.7.7l-.787.784a.641.641,0,0,1-.449.223.745.745,0,0,1-.338-.094c-.264-.137-.566-.291-.844-.458a14.9,14.9,0,0,1-3.311-2.741,12.3,12.3,0,0,1-2.273-3.219c-.219-.482-.187-.64.193-.992.486-.454,1.055-1,1.576-1.576a1.18,1.18,0,0,0-.01-1.7c-.279-.3-.574-.595-.859-.878,0,0-.154-.152-.217-.217-.16-.161-.318-.322-.477-.483-.4-.4-.8-.817-1.229-1.2A1.249,1.249,0,0,0,9176.42,6536.149Z"
                      transform="translate(-9172.092 -6535.14)"
                      fill="#c9c9c9"
                      stroke="#6b6b6b"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
                <div className="call-num">+91 77430 00840</div>
              </div>
            </Link>
            <Link
              onClick={() => {
                window.open("tel:+16043564 141", "_self");
              }}
              onMouseOver={() => dispatch(increment())}
              onMouseLeave={() => dispatch(decrement())}
              className="cpop-inner"
            >
              <div className="cpop-top">
                <div className="flag-icon">
                  <svg
                    id="Group_337"
                    data-name="Group 337"
                    xmlns="http://www.w3.org/2000/svg"
                    width="35.38"
                    height="25"
                    viewBox="0 0 35.38 25"
                  >
                    <path
                      id="Path_498"
                      data-name="Path 498"
                      d="M150.005,0H167.7V25H150Z"
                      transform="translate(-141.161)"
                      fill="#fff"
                    />
                    <path
                      id="Path_499"
                      data-name="Path 499"
                      d="M-19.7,0h8.844V25H-19.7ZM6.836,0H15.68V25H6.842ZM-8.205,12.083l-.693.229,3.2,2.813c.245.714-.083.927-.292,1.3l3.469-.438-.083,3.49.724-.016-.161-3.469,3.474.417a1.6,1.6,0,0,1-.208-1.417l3.193-2.656-.557-.208c-.458-.354.2-1.7.292-2.547,0,0-1.859.641-1.979.3l-.479-.911-1.7,1.865c-.182.047-.26-.026-.307-.182l.781-3.9-1.24.7a.2.2,0,0,1-.271-.115l-1.2-2.4-1.229,2.49c-.094.089-.188.1-.26.036l-1.193-.661.714,3.859a.222.222,0,0,1-.349.115L-6.184,8.948c-.208.339-.354.891-.635,1.016A6.562,6.562,0,0,1-8.674,9.6c.219.771.885,2.063.469,2.484Z"
                      transform="translate(19.7)"
                      fill="#d52b1e"
                    />
                  </svg>
                </div>
                <div className="sap-sm-heading">Kindlebit Global Inc.</div>
              </div>
              <div className="cpop-bot">
                <div className="call-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.977"
                    height="21"
                    viewBox="0 0 20.977 21"
                  >
                    <path
                      id="Path_658"
                      data-name="Path 658"
                      d="M9188.094,6555.64c-.125,0-.256,0-.389-.017a11.074,11.074,0,0,1-4.129-1.3,21.21,21.21,0,0,1-6.092-4.566,20.182,20.182,0,0,1-4.328-6.806,7.924,7.924,0,0,1-.562-2.949,3.014,3.014,0,0,1,.861-2.137c.51-.523,1.055-1.071,1.621-1.628a2.259,2.259,0,0,1,1.127-.6h.273a.383.383,0,0,0,.135.022h.031l.01,0,.059.008a1.723,1.723,0,0,1,1.01.538l.422.415.033.033c.766.746,1.553,1.519,2.285,2.319a1.65,1.65,0,0,1,0,2.295,21.622,21.622,0,0,1-1.547,1.559.475.475,0,0,0-.123.611,12.115,12.115,0,0,0,2.178,3.008,14.794,14.794,0,0,0,2.891,2.441c.176.113.361.212.537.307.127.067.256.136.377.206a.377.377,0,0,0,.506-.086.1.1,0,0,1,.014-.015l.41-.408c.293-.3.627-.63.951-.952a2.025,2.025,0,0,1,1.105-.639,1.962,1.962,0,0,1,.3-.024,1.672,1.672,0,0,1,1.191.521c1.025,1.006,1.871,1.851,2.664,2.658a1.722,1.722,0,0,1,.1,2.525,20.373,20.373,0,0,1-1.941,1.971A2.857,2.857,0,0,1,9188.094,6555.64Zm-11.674-19.49a1.281,1.281,0,0,0-.8.3,3.166,3.166,0,0,0-.264.232c-.166.165-.328.33-.494.5-.293.294-.594.6-.895.889a2.674,2.674,0,0,0-.867,2.027,8.3,8.3,0,0,0,.6,2.861,20.01,20.01,0,0,0,4.2,6.5,20.607,20.607,0,0,0,6.078,4.5,10.56,10.56,0,0,0,3.613,1.147,4.822,4.822,0,0,0,.486.026,2.473,2.473,0,0,0,1.8-.66c.545-.522,1.123-1.113,1.758-1.806a1.2,1.2,0,0,0-.016-1.764c-.791-.814-1.666-1.69-2.754-2.757a1.148,1.148,0,0,0-.807-.349,1.288,1.288,0,0,0-.74.254,2.626,2.626,0,0,0-.332.293q-.352.349-.7.7l-.787.784a.641.641,0,0,1-.449.223.745.745,0,0,1-.338-.094c-.264-.137-.566-.291-.844-.458a14.9,14.9,0,0,1-3.311-2.741,12.3,12.3,0,0,1-2.273-3.219c-.219-.482-.187-.64.193-.992.486-.454,1.055-1,1.576-1.576a1.18,1.18,0,0,0-.01-1.7c-.279-.3-.574-.595-.859-.878,0,0-.154-.152-.217-.217-.16-.161-.318-.322-.477-.483-.4-.4-.8-.817-1.229-1.2A1.249,1.249,0,0,0,9176.42,6536.149Z"
                      transform="translate(-9172.092 -6535.14)"
                      fill="#c9c9c9"
                      stroke="#6b6b6b"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
                <div className="call-num">+1 604 356 4141</div>
              </div>
            </Link>
            <Link
              href="tel:+16043564141"
              onClick={() => {
                window.open("tel:+61402670798", "_self");
              }}
              onMouseOver={() => dispatch(increment())}
              onMouseLeave={() => dispatch(decrement())}
              className="cpop-inner"
            >
              <div className="cpop-top">
                <div className="flag-icon">
                  <svg
                    id="Group_334"
                    data-name="Group 334"
                    xmlns="http://www.w3.org/2000/svg"
                    width="33.333"
                    height="25"
                    viewBox="0 0 33.333 25"
                  >
                    <path
                      id="Path_492"
                      data-name="Path 492"
                      d="M0,0H33.333V25H0Z"
                      fill="#00008b"
                    />
                    <path
                      id="Path_493"
                      data-name="Path 493"
                      d="M1.953,0,8.307,4.714,14.635,0h2.031V1.615l-6.25,4.661,6.25,4.635V12.5H14.583L8.333,7.839,2.109,12.5H0V10.938L6.224,6.3,0,1.667V0Z"
                      fill="#fff"
                    />
                    <path
                      id="Path_494"
                      data-name="Path 494"
                      d="M11.042,7.318l5.625,4.141V12.5L9.609,7.318ZM6.25,7.839l.156.911-5,3.75H0ZM16.667,0V.078l-6.484,4.9.052-1.146L15.365,0ZM0,0,6.224,4.583H4.661L0,1.094Z"
                      fill="red"
                    />
                    <path
                      id="Path_495"
                      data-name="Path 495"
                      d="M6.276,0V12.5h4.167V0ZM0,4.167V8.333H16.667V4.167Z"
                      fill="#fff"
                    />
                    <path
                      id="Path_496"
                      data-name="Path 496"
                      d="M0,5.026v2.5H16.667v-2.5ZM7.109,0V12.5h2.5V0Z"
                      fill="red"
                    />
                    <path
                      id="Path_497"
                      data-name="Path 497"
                      d="M109.064,78.39,108,78.525l.115,1.068-.771-.75-.766.755.1-1.068-1.068-.125.9-.583-.568-.911,1.021.339.359-1.016.37,1.01,1.016-.349-.557.917.906.578Zm-.193-6.1.141-.677-.51-.469.688-.078.286-.63.286.63.688.078-.51.469.141.677-.6-.344-.6.344Zm-5.422-3.125-1.057.115.094,1.057-.75-.755-.771.734.125-1.057-1.052-.141.9-.563-.547-.911,1.005.354.375-.995L102.121,68l1.01-.328-.568.9.891.583Zm10.615-1.708-1.089.141.12,1.089-.786-.766-.781.771.109-1.094-1.089-.125.922-.6-.578-.932,1.042.349.365-1.031.375,1.031,1.036-.359-.573.937ZM109.058,63.1l-1.078.12.1,1.083-.766-.771-.786.75.125-1.078-1.078-.146.922-.573-.557-.932,1.026.359.38-1.016.354,1.026,1.031-.339-.578.917ZM93.8,77.817l-2.385.281.24,2.391L89.949,78.8,88.23,80.478l.255-2.391-2.385-.3,2.026-1.292-1.25-2.052,2.271.781.823-2.26.807,2.266,2.276-.766L91.787,76.5l2.021,1.307Z"
                      transform="translate(-81.616 -57.728)"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <div className="sap-sm-heading">Kindlebit Solutions</div>
              </div>
              <div className="cpop-bot">
                <div className="call-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.977"
                    height="21"
                    viewBox="0 0 20.977 21"
                  >
                    <path
                      id="Path_658"
                      data-name="Path 658"
                      d="M9188.094,6555.64c-.125,0-.256,0-.389-.017a11.074,11.074,0,0,1-4.129-1.3,21.21,21.21,0,0,1-6.092-4.566,20.182,20.182,0,0,1-4.328-6.806,7.924,7.924,0,0,1-.562-2.949,3.014,3.014,0,0,1,.861-2.137c.51-.523,1.055-1.071,1.621-1.628a2.259,2.259,0,0,1,1.127-.6h.273a.383.383,0,0,0,.135.022h.031l.01,0,.059.008a1.723,1.723,0,0,1,1.01.538l.422.415.033.033c.766.746,1.553,1.519,2.285,2.319a1.65,1.65,0,0,1,0,2.295,21.622,21.622,0,0,1-1.547,1.559.475.475,0,0,0-.123.611,12.115,12.115,0,0,0,2.178,3.008,14.794,14.794,0,0,0,2.891,2.441c.176.113.361.212.537.307.127.067.256.136.377.206a.377.377,0,0,0,.506-.086.1.1,0,0,1,.014-.015l.41-.408c.293-.3.627-.63.951-.952a2.025,2.025,0,0,1,1.105-.639,1.962,1.962,0,0,1,.3-.024,1.672,1.672,0,0,1,1.191.521c1.025,1.006,1.871,1.851,2.664,2.658a1.722,1.722,0,0,1,.1,2.525,20.373,20.373,0,0,1-1.941,1.971A2.857,2.857,0,0,1,9188.094,6555.64Zm-11.674-19.49a1.281,1.281,0,0,0-.8.3,3.166,3.166,0,0,0-.264.232c-.166.165-.328.33-.494.5-.293.294-.594.6-.895.889a2.674,2.674,0,0,0-.867,2.027,8.3,8.3,0,0,0,.6,2.861,20.01,20.01,0,0,0,4.2,6.5,20.607,20.607,0,0,0,6.078,4.5,10.56,10.56,0,0,0,3.613,1.147,4.822,4.822,0,0,0,.486.026,2.473,2.473,0,0,0,1.8-.66c.545-.522,1.123-1.113,1.758-1.806a1.2,1.2,0,0,0-.016-1.764c-.791-.814-1.666-1.69-2.754-2.757a1.148,1.148,0,0,0-.807-.349,1.288,1.288,0,0,0-.74.254,2.626,2.626,0,0,0-.332.293q-.352.349-.7.7l-.787.784a.641.641,0,0,1-.449.223.745.745,0,0,1-.338-.094c-.264-.137-.566-.291-.844-.458a14.9,14.9,0,0,1-3.311-2.741,12.3,12.3,0,0,1-2.273-3.219c-.219-.482-.187-.64.193-.992.486-.454,1.055-1,1.576-1.576a1.18,1.18,0,0,0-.01-1.7c-.279-.3-.574-.595-.859-.878,0,0-.154-.152-.217-.217-.16-.161-.318-.322-.477-.483-.4-.4-.8-.817-1.229-1.2A1.249,1.249,0,0,0,9176.42,6536.149Z"
                      transform="translate(-9172.092 -6535.14)"
                      fill="#c9c9c9"
                      stroke="#6b6b6b"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
                <div className="call-num">+6 140 267 0798</div>
              </div>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ContactModal;
