import React, { useEffect, useState } from "react";

import { NavLink, Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import ContactModal from "../model/ContactModal";
import UseScroll from "../Custom hook/UseScroll";
import { useUserAuth } from "../../context/AppContext";

import { increment, decrement } from "../../Redux/Action/Action";
import $ from "jquery";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [commonModal, setCommonModal] = useState(false);
  const scroll = UseScroll();
  const dispatch = useDispatch();
  const {
    heroOffset,
    serviceOffset,
    dealsOffset,
    howWeWorkOffeset,
    testimonialOffset,
    techWorkOffset,
    homeFromLightOffset,
    homeBlogOffset,
    footerOffset,
    apiFooter,
  } = useUserAuth();

  // const {hamBurger,hamBurgerClass,setHamBurgerClass} = useUserAuth();

  // useEffect(()=>{
  //   if(hamBurger>0 && hamBurger<560){
  //     setHamBurgerClass("")
  //   }else if(hamBurger>570 && hamBurger<1382){
  //     setHamBurgerClass("head-dark")
  //   }else if(hamBurger>1382 && hamBurger<1910){
  //     setHamBurgerClass("")
  //   }else if(hamBurger>1910 && hamBurger<2610){
  //     setHamBurgerClass("head-dark")
  //   }else if(hamBurger>2610 && hamBurger<5175){
  //     setHamBurgerClass("")
  //   }
  // },[hamBurger])

  // useEffect(() => {
  //   if (scroll.y > 150 && scroll.y - scroll.lastY > 0) {
  //     document.getElementById("_nav").classList.remove("nav-down");
  //     document.getElementById("_nav").classList.add("nav-up");
  //   } else {
  //     document.getElementById("_nav").classList.remove("nav-up");
  //     document.getElementById("_nav").classList.add("nav-down");
  //   }
  //   document.getElementById("_nav").classList.remove("nav-down");
  // }, [scroll.y, scroll.lastY]);

  const [hamBurger, setHamBurger] = useState("");

  const scrollPosition = window.pageYOffset;

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const heroSec = heroOffset;
  //       const serviceSec = serviceOffset - 80;
  //       const dealsSec = dealsOffset - 80;
  //       const howWeWorkSec = howWeWorkOffeset - 80;
  //       const testimonialSec = testimonialOffset - 80;
  //       const techWorkSec = techWorkOffset - 80;
  //       const homeFromLightSec = homeFromLightOffset - 80;
  //       const homeBlogSec = homeBlogOffset - 80;
  //       const footerSec = footerOffset - 80;

  //       if ((scrollPosition <= heroSec) || (scrollPosition < serviceSec)) {
  //         setHamBurger("");
  //       } else if ((scrollPosition <= serviceSec) || (scrollPosition < dealsSec)) {
  //         setHamBurger("head-dark");
  //       } else if ((scrollPosition <= dealsSec) || (scrollPosition < howWeWorkSec)) {
  //         setHamBurger("");
  //       } else if ((scrollPosition <= howWeWorkSec) || (scrollPosition < testimonialSec)) {
  //         setHamBurger("head-dark");
  //       } else if ((scrollPosition <= testimonialSec) || (scrollPosition < techWorkSec)) {
  //         setHamBurger("");
  //       } else if ((scrollPosition <= techWorkSec) || (scrollPosition < homeFromLightSec)) {
  //         setHamBurger("");
  //       } else if ((scrollPosition <= homeFromLightSec) || (scrollPosition < homeBlogSec)) {
  //         setHamBurger("");
  //       } else if ((scrollPosition <= homeBlogSec) || (scrollPosition < footerSec)) {
  //         setHamBurger("");
  //       } else if ((scrollPosition <= footerSec)) {
  //         setHamBurger("head-dark");
  //       } else {
  //         setHamBurger("head-dark");
  //       }
  //     };

  //     window.addEventListener('scroll', handleScroll);

  //     return () => {
  //       window.removeEventListener('scroll', handleScroll);
  //     };
  //   }, [scrollPosition, apiFooter]);

  useEffect(() => {
    // $(document).ready(function () {
    //   $('#sap-nav-button svg').css('stroke', '#fff');
    // });
    $(document).ready(function () {
      var s = $("header");
      var pos = s.position();
      $(window).scroll(function () {
        var windowpos = $(window).scrollTop();
        var length = $(".dark").length;
        var vars = {};
        for (var i = 1; i <= length; i++) {
          var j = i - 1;
          vars["dark" + i] = $(".dark").eq(j).offset().top;
          vars["height" + i] = $(".dark").eq(j).innerHeight();
          vars["requiredValue" + i] =
            $(".dark").eq(j).offset().top + vars["height" + i];
        }
        if (
          (windowpos >= pos.top) &
            (windowpos >= vars["dark1"]) &
            (windowpos <= vars["requiredValue1"]) ||
          (windowpos >= pos.top) &
            (windowpos >= vars["dark2"]) &
            (windowpos <= vars["requiredValue2"]) ||
          (windowpos >= pos.top) &
            (windowpos >= vars["dark3"]) &
            (windowpos <= vars["requiredValue3"]) ||
          (windowpos >= pos.top) &
            (windowpos >= vars["dark4"]) &
            (windowpos <= vars["requiredValue4"])
        ) {
          s.addClass("head-dark");
        } else {
          s.removeClass("head-dark");
        }
      });
    });
  }, []);

  const handleMenuClick = () => {
    setToggle(!toggle);
    document.body.classList.add("no-scroll");
  };

  if (!toggle) {
    document.body.classList.remove("no-scroll");
  }

  return (
    <>
      <header className={`nav-down head-dark`} id="_nav">
        <div className="header-inner">
          <NavLink to="/" className="logo">
            <img
              src="/assets/images/logo-dark.svg"
              alt="Navimg"
              onMouseOver={() => dispatch(increment())}
              onMouseLeave={() => dispatch(decrement())}
            />
          </NavLink>

          <div
            onClick={() => setCommonModal(true)}
            onMouseOver={() => dispatch(increment())}
            onMouseLeave={() => dispatch(decrement())}
            className="sap-btn-light header-btn"
          >
            <button data-bs-toggle="modal" data-bs-target="#header-contact">
              call now
            </button>
          </div>

          <div className="header-menu">
            <div
              className={`sap-nav-button ${toggle ? `-menu-open` : ``}`}
              onClick={() => handleMenuClick()}
              onMouseOver={() => dispatch(increment())}
              onMouseLeave={() => dispatch(decrement())}
              id="sap-nav-button"
            >
              <svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1">
                <g>
                  <line x1="0" y1="17" x2="48" y2="17" strokeWidth="3" />
                  <line x1="0" y1="31" x2="48" y2="31" strokeWidth="3" />
                </g>

                <g>
                  <line x1="0" y1="24" x2="48" y2="24" strokeWidth="3" />
                  <line x1="0" y1="24" x2="48" y2="24" strokeWidth="3" />
                </g>
              </svg>
            </div>

            <nav className={`menu ${toggle ? `-open` : ``}`}>
              <div className="menu-inner">
                <div className="menu-services" id="menu-services1">
                  <div className="sap-sm-heading">Services</div>
                  <div className="sap-menu-card">
                    <div className="menu-services-inner">
                      <div className="menu-sm-heading">
                        <Link
                          to="/design"
                          onMouseOver={() => dispatch(increment())}
                          onMouseLeave={() => dispatch(decrement())}
                          onClick={() => {
                            setToggle(!toggle);
                            window.scroll({
                              top: 0,
                              behavior: "instant",
                            });
                          }}
                        >
                          Design
                        </Link>
                      </div>
                      <div className="msi-head">
                        <ul>
                          <li>
                            <Link
                              to="/design/website-design"
                              onMouseOver={() => dispatch(increment())}
                              onMouseLeave={() => dispatch(decrement())}
                              onClick={() => {
                                setToggle(!toggle);
                              }}
                            >
                              Website Design
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/design/desktop-design"
                              onMouseOver={() => dispatch(increment())}
                              onMouseLeave={() => dispatch(decrement())}
                              onClick={() => {
                                setToggle(!toggle);
                              }}
                            >
                              Desktop Design
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/design/mobile-application-design"
                              onMouseOver={() => dispatch(increment())}
                              onMouseLeave={() => dispatch(decrement())}
                              onClick={() => {
                                setToggle(!toggle);
                              }}
                            >
                              Mobile App Design
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/design/desktop-design/Marketing-design"
                              onMouseOver={() => dispatch(increment())}
                              onMouseLeave={() => dispatch(decrement())}
                              onClick={() => {
                                setToggle(!toggle);
                              }}
                            >
                              Marketing Design
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="menu-services-inner">
                      <div className="menu-sm-heading">
                        <Link
                          to="/development"
                          onMouseOver={() => dispatch(increment())}
                          onMouseLeave={() => dispatch(decrement())}
                          onClick={() => {
                            setToggle(!toggle);
                            window.scroll({
                              top: 0,
                              behavior: "instant",
                            });
                          }}
                        >
                          Development
                        </Link>
                      </div>
                      <div className="msi-head">
                        <div className="msi-inner">
                          <ul>
                            <li>
                              <Link
                                to="/development/website-development"
                                onMouseOver={() => dispatch(increment())}
                                onMouseLeave={() => dispatch(decrement())}
                                onClick={() => setToggle(!toggle)}
                              >
                                Website Development
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/development/web-app-development"
                                onMouseOver={() => dispatch(increment())}
                                onMouseLeave={() => dispatch(decrement())}
                                onClick={() => setToggle(!toggle)}
                              >
                                Web App Development
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/development/mobile-app-development"
                                onMouseOver={() => dispatch(increment())}
                                onMouseLeave={() => dispatch(decrement())}
                                onClick={() => setToggle(!toggle)}
                              >
                                Mobile App Development
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/development/desktop-app-development"
                                onMouseOver={() => dispatch(increment())}
                                onMouseLeave={() => dispatch(decrement())}
                                onClick={() => setToggle(!toggle)}
                              >
                                Desktop App Development
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="msi-inner">
                          <ul>
                            <li className="slashed-link">
                              <Link
                                to="/development/customer-relationship-management"
                                onMouseOver={() => dispatch(increment())}
                                onMouseLeave={() => dispatch(decrement())}
                                onClick={() => setToggle(!toggle)}
                              >
                                CRM
                              </Link>
                              <span className="divider">/</span>
                              <Link
                                to="/development/content-management-system"
                                onMouseOver={() => dispatch(increment())}
                                onMouseLeave={() => dispatch(decrement())}
                                onClick={() => setToggle(!toggle)}
                              >
                                CMS
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/development/Web3"
                                onMouseOver={() => dispatch(increment())}
                                onMouseLeave={() => dispatch(decrement())}
                                onClick={() => setToggle(!toggle)}
                              >
                                Web 3
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/development/Web3/blockchain-development"
                                onMouseOver={() => dispatch(increment())}
                                onMouseLeave={() => dispatch(decrement())}
                                onClick={() => setToggle(!toggle)}
                              >
                                Blockchain Development
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/development/cloud-infrastructure"
                                onMouseOver={() => dispatch(increment())}
                                onMouseLeave={() => dispatch(decrement())}
                                onClick={() => setToggle(!toggle)}
                              >
                                Cloud Infrastructure
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="menu-services-inner">
                      <div className="menu-sm-heading">
                        <Link
                          to="/marketing"
                          onMouseOver={() => dispatch(increment())}
                          onMouseLeave={() => dispatch(decrement())}
                          onClick={() => {
                            setToggle(!toggle);
                            window.scroll({
                              top: 0,
                              behavior: "instant",
                            });
                          }}
                        >
                          Marketing
                        </Link>
                      </div>
                      <div className="msi-head">
                        <div className="msi-inner">
                          <ul>
                            <li>
                              <Link
                                to="/marketing/search-engine-optimization"
                                onMouseOver={() => dispatch(increment())}
                                onMouseLeave={() => dispatch(decrement())}
                                onClick={() => setToggle(!toggle)}
                              >
                                Search Engine Optimization
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/marketing/social-media-management"
                                onMouseOver={() => dispatch(increment())}
                                onMouseLeave={() => dispatch(decrement())}
                                onClick={() => setToggle(!toggle)}
                              >
                                Social Media Management
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/marketing/paid-marketing"
                                onMouseOver={() => dispatch(increment())}
                                onMouseLeave={() => dispatch(decrement())}
                                onClick={() => setToggle(!toggle)}
                              >
                                Paid Marketing
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/marketing/app-store-optimization"
                                onMouseOver={() => dispatch(increment())}
                                onMouseLeave={() => dispatch(decrement())}
                                onClick={() => setToggle(!toggle)}
                              >
                                Mobile App Marketing
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="msi-inner">
                          <ul>
                            <li>
                              <Link
                                to="/marketing/content-marketing"
                                onMouseOver={() => dispatch(increment())}
                                onMouseLeave={() => dispatch(decrement())}
                                onClick={() => setToggle(!toggle)}
                              >
                                Content Marketing
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/marketing/email-marketing"
                                onMouseOver={() => dispatch(increment())}
                                onMouseLeave={() => dispatch(decrement())}
                                onClick={() => setToggle(!toggle)}
                              >
                                E-Mail Marketing
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/marketing/digital-branding"
                                onMouseOver={() => dispatch(increment())}
                                onMouseLeave={() => dispatch(decrement())}
                                onClick={() => setToggle(!toggle)}
                              >
                                Digital Branding
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/marketing/analytics-and-reporting"
                                onMouseOver={() => dispatch(increment())}
                                onMouseLeave={() => dispatch(decrement())}
                                onClick={() => setToggle(!toggle)}
                              >
                                Analytics And Reporting
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="menu-services" id="menu-services2">
                  <div className="sap-sm-heading">Technologies</div>
                  <div className="sap-menu-card">
                    <div className="ms-left">
                      <Link
                        to="/web"
                        onMouseOver={() => dispatch(increment())}
                        onMouseLeave={() => dispatch(decrement())}
                        style={{ textDecoration: "none" }}
                        onClick={() => {
                          setToggle(!toggle);
                          window.scroll({
                            top: 0,
                            behavior: "instant",
                          });
                        }}
                      >
                        <div className="menu-sm-heading">
                          <a href="#/">Web</a>
                        </div>
                      </Link>
                      <div className="menu-services-head">
                        <div className="menu-services-inner">
                          <div className="menu-sm-white">
                            <Link
                              to="/web/frontend"
                              onMouseOver={() => dispatch(increment())}
                              onMouseLeave={() => dispatch(decrement())}
                              onClick={() => setToggle(!toggle)}
                            >
                              Frontend
                            </Link>
                          </div>
                          <div className="msi-head">
                            <div className="msi-inner">
                              <ul>
                                <li>
                                  <Link
                                    to="/web/frontend/angular-js"
                                    onMouseOver={() => dispatch(increment())}
                                    onMouseLeave={() => dispatch(decrement())}
                                    onClick={() => setToggle(!toggle)}
                                  >
                                    Angular JS
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/web/frontend/react-js"
                                    onMouseOver={() => dispatch(increment())}
                                    onMouseLeave={() => dispatch(decrement())}
                                    onClick={() => setToggle(!toggle)}
                                  >
                                    React JS
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/web/frontend/vue-js"
                                    onMouseOver={() => dispatch(increment())}
                                    onMouseLeave={() => dispatch(decrement())}
                                    onClick={() => setToggle(!toggle)}
                                  >
                                    Vue JS
                                  </Link>
                                </li>
                                {/* <li>
                                  <Link
                                    to="/web/frontend/node-js"
                                    onMouseOver={() => dispatch(increment())}
                                    onMouseLeave={() => dispatch(decrement())}
                                    onClick={() => setToggle(!toggle)}
                                  >
                                    Node JS
                                  </Link>
                                </li> */}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="menu-services-inner">
                          <div className="menu-sm-white">
                            <Link
                              to="/web/backend"
                              onMouseOver={() => dispatch(increment())}
                              onMouseLeave={() => dispatch(decrement())}
                              onClick={() => setToggle(!toggle)}
                            >
                              Backend
                            </Link>
                          </div>
                          <div className="msi-head">
                            <div className="msi-inner">
                              <ul>
                                <li>
                                  <Link
                                    to="/web/backend/node-js"
                                    onMouseOver={() => dispatch(increment())}
                                    onMouseLeave={() => dispatch(decrement())}
                                    onClick={() => setToggle(!toggle)}
                                  >
                                    Node JS
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/web/backend/php"
                                    onMouseOver={() => dispatch(increment())}
                                    onMouseLeave={() => dispatch(decrement())}
                                    onClick={() => setToggle(!toggle)}
                                  >
                                    PHP
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/web/backend/ruby-on-rails"
                                    onMouseOver={() => dispatch(increment())}
                                    onMouseLeave={() => dispatch(decrement())}
                                    onClick={() => setToggle(!toggle)}
                                  >
                                    Ruby on Rails
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/web/backend/java"
                                    onMouseOver={() => dispatch(increment())}
                                    onMouseLeave={() => dispatch(decrement())}
                                    onClick={() => setToggle(!toggle)}
                                  >
                                    Java
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/web/backend/python"
                                    onMouseOver={() => dispatch(increment())}
                                    onMouseLeave={() => dispatch(decrement())}
                                    onClick={() => setToggle(!toggle)}
                                  >
                                    Python
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="msi-inner">
                              <ul>
                                <li>
                                  <Link
                                    to="/web/backend/.net"
                                    onMouseOver={() => dispatch(increment())}
                                    onMouseLeave={() => dispatch(decrement())}
                                    onClick={() => setToggle(!toggle)}
                                  >
                                    .NET
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/web/backend/golang"
                                    onMouseOver={() => dispatch(increment())}
                                    onMouseLeave={() => dispatch(decrement())}
                                    onClick={() => setToggle(!toggle)}
                                  >
                                    Golang
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/web/backend/magento"
                                    onMouseOver={() => dispatch(increment())}
                                    onMouseLeave={() => dispatch(decrement())}
                                    onClick={() => setToggle(!toggle)}
                                  >
                                    Magneto
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/web/backend/laravel"
                                    onMouseOver={() => dispatch(increment())}
                                    onMouseLeave={() => dispatch(decrement())}
                                    onClick={() => setToggle(!toggle)}
                                  >
                                    Laravel
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="menu-services-inner">
                          <div className="menu-sm-white">
                            <Link
                              to="/web/others"
                              onMouseOver={() => dispatch(increment())}
                              onMouseLeave={() => dispatch(decrement())}
                              onClick={() => setToggle(!toggle)}
                            >
                              Others
                            </Link>
                          </div>
                          <div className="msi-head">
                            <div className="msi-inner">
                              <ul>
                                <li>
                                  <Link
                                    to="/web/others/mean-stack"
                                    onMouseOver={() => dispatch(increment())}
                                    onMouseLeave={() => dispatch(decrement())}
                                    onClick={() => setToggle(!toggle)}
                                  >
                                    MEAN Stack
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/web/others/mern-stack"
                                    onMouseOver={() => dispatch(increment())}
                                    onMouseLeave={() => dispatch(decrement())}
                                    onClick={() => setToggle(!toggle)}
                                  >
                                    MERN Stack
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/web/others/mevn-stack"
                                    onMouseOver={() => dispatch(increment())}
                                    onMouseLeave={() => dispatch(decrement())}
                                    onClick={() => setToggle(!toggle)}
                                  >
                                    MEVN Stack
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/web/others/devops-azure"
                                    onMouseOver={() => dispatch(increment())}
                                    onMouseLeave={() => dispatch(decrement())}
                                    onClick={() => setToggle(!toggle)}
                                  >
                                    Devops - Azure
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="msi-inner">
                              <ul>
                                <li>
                                  <Link
                                    to="/web/others/devops-aws"
                                    onMouseOver={() => dispatch(increment())}
                                    onMouseLeave={() => dispatch(decrement())}
                                    onClick={() => setToggle(!toggle)}
                                  >
                                    Devops - AWS
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/web/others/testing"
                                    onMouseOver={() => dispatch(increment())}
                                    onMouseLeave={() => dispatch(decrement())}
                                    onClick={() => setToggle(!toggle)}
                                  >
                                    Testing
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/web/others/c-mvc"
                                    onMouseOver={() => dispatch(increment())}
                                    onMouseLeave={() => dispatch(decrement())}
                                    onClick={() => setToggle(!toggle)}
                                  >
                                    C# / MVC
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="ms-right">
                      <Link
                        to="/mobile"
                        style={{ textDecoration: "none", color: "white" }}
                        onMouseOver={() => dispatch(increment())}
                        onMouseLeave={() => dispatch(decrement())}
                        onClick={() => {
                          setToggle(!toggle);
                          window.scroll({
                            top: 0,
                            behavior: "instant",
                          });
                        }}
                      >
                        <div className="menu-sm-heading">
                          <a href="#/">Mobile</a>
                        </div>
                      </Link>
                      <div className="menu-services-head">
                        <div className="menu-services-inner">
                          <div className="menu-sm-white">
                            <Link
                              to="/mobile/hybrid-development/flutter"
                              onMouseOver={() => dispatch(increment())}
                              onMouseLeave={() => dispatch(decrement())}
                              onClick={() => setToggle(!toggle)}
                            >
                              Hybrid Development
                            </Link>
                          </div>
                          <div className="msi-head">
                            <div className="msi-inner">
                              <ul>
                                <li>
                                  <Link
                                    to="/mobile/hybrid-development/flutter"
                                    onMouseOver={() => dispatch(increment())}
                                    onMouseLeave={() => dispatch(decrement())}
                                    onClick={() => setToggle(!toggle)}
                                  >
                                    Flutter
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/mobile/hybrid-development/flutter-flow"
                                    onMouseOver={() => dispatch(increment())}
                                    onMouseLeave={() => dispatch(decrement())}
                                    onClick={() => setToggle(!toggle)}
                                  >
                                    Flutter Flow
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/mobile/hybrid-development/react-native"
                                    onMouseOver={() => dispatch(increment())}
                                    onMouseLeave={() => dispatch(decrement())}
                                    onClick={() => setToggle(!toggle)}
                                  >
                                    React Native
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/mobile/hybrid-development/ionic"
                                    onMouseOver={() => dispatch(increment())}
                                    onMouseLeave={() => dispatch(decrement())}
                                    onClick={() => setToggle(!toggle)}
                                  >
                                    Ionic
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="menu-services-inner">
                          <div className="menu-sm-white">
                            <Link
                              to="/mobile/native-development/swift-ui"
                              onMouseOver={() => dispatch(increment())}
                              onMouseLeave={() => dispatch(decrement())}
                              onClick={() => setToggle(!toggle)}
                            >
                              Native Development
                            </Link>
                          </div>
                          <div className="msi-head">
                            <div className="msi-inner">
                              <ul>
                                <li>
                                  <Link
                                    to="/mobile/native-development/swift-ui"
                                    onMouseOver={() => dispatch(increment())}
                                    onMouseLeave={() => dispatch(decrement())}
                                    onClick={() => setToggle(!toggle)}
                                  >
                                    Swift UI
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/mobile/native-development/swift"
                                    onMouseOver={() => dispatch(increment())}
                                    onMouseLeave={() => dispatch(decrement())}
                                    onClick={() => setToggle(!toggle)}
                                  >
                                    Swift
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/mobile/native-development/kotlin"
                                    onMouseOver={() => dispatch(increment())}
                                    onMouseLeave={() => dispatch(decrement())}
                                    onClick={() => setToggle(!toggle)}
                                  >
                                    Kotlin
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/mobile/native-development/objective-c"
                                    onMouseOver={() => dispatch(increment())}
                                    onMouseLeave={() => dispatch(decrement())}
                                    onClick={() => setToggle(!toggle)}
                                  >
                                    Objective C
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="menu-other">
                  <ul>
                    <li>
                      <Link
                        to="/aboutus"
                        className="sap-sm-heading"
                        onMouseOver={() => dispatch(increment())}
                        onMouseLeave={() => dispatch(decrement())}
                        onClick={() => {
                          setToggle(!toggle);
                          window.scroll({
                            top: 0,
                            behavior: "instant",
                          });
                        }}
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/case-study"
                        className="sap-sm-heading"
                        onMouseOver={() => dispatch(increment())}
                        onMouseLeave={() => dispatch(decrement())}
                        onClick={() => {
                          setToggle(!toggle);
                          window.scroll({
                            top: 0,
                            behavior: "instant",
                          });
                        }}
                      >
                        Case Studies
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/portfolio"
                        className="sap-sm-heading"
                        onMouseOver={() => dispatch(increment())}
                        onMouseLeave={() => dispatch(decrement())}
                        onClick={() => {
                          setToggle(!toggle);
                          window.scroll({
                            top: 0,
                            behavior: "instant",
                          });
                        }}
                      >
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        className="sap-sm-heading"
                        onMouseOver={() => dispatch(increment())}
                        onMouseLeave={() => dispatch(decrement())}
                        onClick={() => {
                          setToggle(!toggle);
                          window.scroll({
                            top: 0,
                            behavior: "instant",
                          });
                        }}
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/career"
                        className="sap-sm-heading"
                        onMouseOver={() => dispatch(increment())}
                        onMouseLeave={() => dispatch(decrement())}
                        onClick={() => {
                          setToggle(!toggle);
                          window.scroll({
                            top: 0,
                            behavior: "instant",
                          });
                        }}
                      >
                        Career
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contactus"
                        className="sap-sm-heading"
                        onMouseOver={() => dispatch(increment())}
                        onMouseLeave={() => dispatch(decrement())}
                        onClick={() => {
                          setToggle(!toggle);
                          window.scroll({
                            top: 0,
                            behavior: "instant",
                          });
                        }}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <ul className="menu-social-links">
                  <li>
                    <a
                      href="https://www.facebook.com/KindleBit"
                      rel="noreferrer"
                      target="_blank"
                      onMouseOver={() => dispatch(increment())}
                      onMouseLeave={() => dispatch(decrement())}
                      onClick={() => setToggle(!toggle)}
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/KindleBit"
                      rel="noreferrer"
                      target="_blank"
                      onMouseOver={() => dispatch(increment())}
                      onMouseLeave={() => dispatch(decrement())}
                      onClick={() => setToggle(!toggle)}
                    >
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/kindlebit_solutions"
                      onClick={() => setToggle(!toggle)}
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
                      onClick={() => setToggle(!toggle)}
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Contact modal */}
      {commonModal && (
        <ContactModal
          commonModal={commonModal}
          setCommonModal={setCommonModal}
        />
      )}
    </>
  );
}

export default Navbar;
