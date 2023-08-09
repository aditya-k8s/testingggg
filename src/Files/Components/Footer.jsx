import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../Redux/Action/Action";
import PrivacyPolicyModal from "../model/PrivacyPolicyModal";
import CookiePolicyModal from "../model/CookiePolicyModal";
import TermsModal from "../model/TermsModal";
import axios from "axios";

function Footer() {
  const [emaildata, setEmaildata] = useState("");
  const [PrivacyPolicyModalstate, SetPrivacyPolicyModalstate] = useState(false);
  const [CookiePolicyModalstate, setCookiePolicyModalState] = useState(false);
  const [TermsModalstate, SetTermsModalstate] = useState(false);
  const dispatch = useDispatch();

  function isValidEmail(emaildata) {
    return /\S+@\S+\.\S+/.test(emaildata);
  }

  const handleSendEmail = () => {
    if (!emaildata) {
      toast.error("Please enter your Email");
    } else if (!isValidEmail(emaildata)) {
      toast.error("Please enter valid Email");
    } else {
      axios
        .post("https://kindlebit.com/api/newletters", {
          email: emaildata,
        })
        .then(function (response) {
          if (response?.data?.message === "Your email id already exists!") {
            toast.success("You already connect with our news letters");
            setEmaildata("");
          } else {
            toast.success("Thank you");
            setEmaildata("");
          }
        })
        .catch(function (error) {
          console.log("error", error);
        });
    }
  };

  return (
    <>
      <footer className="dark" id="dark3">
        <div className="footer-inner container">
          <div className="foot-left">
            <div className="foot-kbit-info">
              <div className="kbit-logo">
                <img
                  src="/assets/images/logo-light.svg"
                  alt="./images/career-ban.png"
                />
              </div>
              <div className="kbit-con">
                The foundation of business growth lies in a winning combination
                of expertise and innovation. Kindlebit Solutions leverages the
                power of both digital and human experiences to drive success for
                businesses.
              </div>
            </div>
            <div className="foot-links-head">
              <div className="foot-links-inner">
                <ul>
                  <li className="sap-sm-heading">Services</li>
                  <li>
                    <Link
                      to="/design"
                      onMouseOver={() => dispatch(increment())}
                      onMouseLeave={() => dispatch(decrement())}
                      onClick={() =>
                        window.scroll({
                          top: 0,
                          behavior: "instant",
                        })
                      }
                    >
                      Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/development"
                      onMouseOver={() => dispatch(increment())}
                      onMouseLeave={() => dispatch(decrement())}
                      onClick={() =>
                        window.scroll({
                          top: 0,
                          behavior: "instant",
                        })
                      }
                    >
                      Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/marketing"
                      onMouseOver={() => dispatch(increment())}
                      onMouseLeave={() => dispatch(decrement())}
                      onClick={() =>
                        window.scroll({
                          top: 0,
                          behavior: "instant",
                        })
                      }
                    >
                      Marketing
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="foot-links-inner">
                <ul>
                  <li className="sap-sm-heading">Case Studies</li>
                  <li>
                    <Link
                      to="/case-study/automobile"
                      onMouseOver={() => dispatch(increment())}
                      onMouseLeave={() => dispatch(decrement())}
                      onClick={() =>
                        window.scroll({
                          top: 0,
                          behavior: "instant",
                        })
                      }
                    >
                      Automobile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/case-study/finance"
                      onMouseOver={() => dispatch(increment())}
                      onMouseLeave={() => dispatch(decrement())}
                      onClick={() =>
                        window.scroll({
                          top: 0,
                          behavior: "instant",
                        })
                      }
                    >
                      Finance
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/case-study/hotels-hospitality"
                      onMouseOver={() => dispatch(increment())}
                      onMouseLeave={() => dispatch(decrement())}
                      onClick={() =>
                        window.scroll({
                          top: 0,
                          behavior: "instant",
                        })
                      }
                    >
                      Hotels & Hospitality
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/case-study/sports"
                      onMouseOver={() => dispatch(increment())}
                      onMouseLeave={() => dispatch(decrement())}
                      onClick={() =>
                        window.scroll({
                          top: 0,
                          behavior: "instant",
                        })
                      }
                    >
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/case-study/automobile"
                      onMouseOver={() => dispatch(increment())}
                      onMouseLeave={() => dispatch(decrement())}
                      onClick={() =>
                        window.scroll({
                          top: 0,
                          behavior: "instant",
                        })
                      }
                    >
                      and more...
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="foot-links-inner" id="foot-links-multi">
                <ul>
                  <li className="sap-sm-heading">Locate Us</li>
                  <li>
                    <a
                      onMouseOver={() => dispatch(increment())}
                      onMouseLeave={() => dispatch(decrement())}
                      href="https://goo.gl/maps/1iTmfkKVgoDuKDds6"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Plot No I-35, IT City, Sector 83 A,
                      <br />
                      Mohali, Punjab 140306
                    </a>
                  </li>
                </ul>
                <ul>
                  <li className="sap-sm-heading">Let's have a Call!</li>
                  <li>
                    <a
                      href="tel:+917743000840"
                      onMouseOver={() => dispatch(increment())}
                      onMouseLeave={() => dispatch(decrement())}
                    >
                      +91 77430 00840
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+917743000841"
                      onMouseOver={() => dispatch(increment())}
                      onMouseLeave={() => dispatch(decrement())}
                    >
                      +91 77430 00841
                    </a>
                  </li>
                </ul>
                <ul>
                  <li className="sap-sm-heading">Let's Talk!</li>
                  <li>
                    <a
                      href="mailto:info@kindlebit.com"
                      onMouseOver={() => dispatch(increment())}
                      onMouseLeave={() => dispatch(decrement())}
                    >
                      info@kindlebit.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:support@kindlebit.com"
                      onMouseOver={() => dispatch(increment())}
                      onMouseLeave={() => dispatch(decrement())}
                    >
                      support@kindlebit.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="foot-right">
            <div className="foot-sub">
              <div className="sec-heading">
                <div className="sap-caption-head">
                  <div className="sap-caption">get our latest updates</div>
                </div>
                <div className="sap-lg-heading">
                  Subscribe To
                  <br />
                  Our Newsletter
                </div>
              </div>
              <form className="foot-sub-form">
                <div className="form-group">
                  <input
                    type="text"
                    value={emaildata}
                    onChange={(e) => setEmaildata(e.target.value)}
                    className="form-control"
                    placeholder="Enter your mail..."
                  />
                </div>
                <div className="sap-btn-light">
                  <button
                    type="button"
                    onClick={() => handleSendEmail()}
                    onMouseOver={() => dispatch(increment())}
                    onMouseLeave={() => dispatch(decrement())}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19.207"
                      height="11.624"
                      viewBox="0 0 19.207 11.624"
                    >
                      <path
                        id="Union_7"
                        data-name="Union 7"
                        d="M4.812,0,9.624,4.812Zm0,0L0,4.812Z"
                        transform="translate(18.207 1) rotate(90)"
                        fill="rgba(0,0,0,0)"
                        stroke="#00224b"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                      <line
                        id="Line_10"
                        data-name="Line 10"
                        y2="16.875"
                        transform="translate(17.875 5.812) rotate(90)"
                        fill="rgba(0,0,0,0)"
                        stroke="#00224b"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
            <div className="foot-social-links">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/KindleBit"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i
                      className="fa-brands fa-facebook-f"
                      onMouseOver={() => dispatch(increment())}
                      onMouseLeave={() => dispatch(decrement())}
                    ></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/KindleBit"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i
                      className="fa-brands fa-twitter"
                      onMouseOver={() => dispatch(increment())}
                      onMouseLeave={() => dispatch(decrement())}
                    ></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/kindlebit_solutions"
                    rel="noreferrer"
                    target="_blank"
                    onMouseOver={() => dispatch(increment())}
                    onMouseLeave={() => dispatch(decrement())}
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://in.linkedin.com/company/kindlebit-solutions"
                    rel="noreferrer"
                    target="_blank"
                    onMouseOver={() => dispatch(increment())}
                    onMouseLeave={() => dispatch(decrement())}
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="foot-bot">
          <ul>
            <li>© 2022 Kindlebit Solutions Pvt. Ltd.</li>
            <li
              onClick={() => SetTermsModalstate(true)}
              onMouseOver={() => dispatch(increment())}
              onMouseLeave={() => dispatch(decrement())}
              style={{ cursor: "pointer" }}
            >
              Terms of Use
            </li>
            <li
              onClick={() => SetPrivacyPolicyModalstate(true)}
              onMouseOver={() => dispatch(increment())}
              onMouseLeave={() => dispatch(decrement())}
              style={{ cursor: "pointer" }}
            >
              Privacy Policy
            </li>
            <li
              onClick={() => setCookiePolicyModalState(true)}
              onMouseOver={() => dispatch(increment())}
              onMouseLeave={() => dispatch(decrement())}
              style={{ cursor: "pointer" }}
            >
              Cookie Policy
            </li>
          </ul>
        </div>
      </footer>
      {/* {Cookie Modal} */}
      {CookiePolicyModalstate && (
        <CookiePolicyModal
          CookiePolicyModalstate={CookiePolicyModalstate}
          setCookiePolicyModalState={setCookiePolicyModalState}
        />
      )}
      {/* {Privacy Modal} */}
      {PrivacyPolicyModalstate && (
        <PrivacyPolicyModal
          PrivacyPolicyModalstate={PrivacyPolicyModalstate}
          SetPrivacyPolicyModalstate={SetPrivacyPolicyModalstate}
        />
      )}
      {/* TermsModalstate */}
      {TermsModalstate && (
        <TermsModal
          TermsModalstate={TermsModalstate}
          SetTermsModalstate={SetTermsModalstate}
        />
      )}
    </>
  );
}
export default Footer;
