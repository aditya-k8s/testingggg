import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import ApplyModal from "../model/ApplyModal";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../Redux/Action/Action";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { useUserAuth } from "../../context/AppContext";

function Career() {
  const { subActive, setSubActive } = useUserAuth();
  const [vacancyData, setvacancyData] = useState([]);
  const [applyModal, setApplyModal] = useState(false);
  const dispatch = useDispatch();

  const routePath = useLocation();
  const accuratePath = routePath.pathname;

  let i = 0;
  for (let x = 0; x < vacancyData.length; x++) {
    let y = `/career/${vacancyData[x]?.name.replace(/\s+/g, "-").trim()}`;
    if (y === accuratePath) {
      setSubActive(i);
      break;
    }
    i++;
  }

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });
    axios
      .get(`${process.env.REACT_APP_API_ROOT}/careervacancies`)
      .then(function (response) {
        setvacancyData(response.data.data);
      })
      .catch(function (error) {});
  }, []);

  return (
    <>
      <Helmet>
        <title>kindlebit-Career</title>
      </Helmet>
      <main className="inner-page" id="career">
        <section className="banner">
          <img
            className="banner-img"
            src="./assets/images/career-ban.png"
            alt="Careerimg"
          />
          <div className="banner-inner container">
            <div className="banner-heading">
              <div className="sap-lg-heading">Career</div>
              <div className="text-para">
                We are always interested in hearing from great talent
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
            <div className="sec-dual-heading">
              <div className="sec-heading">
                <div className="sap-caption-head">
                  <div className="sap-caption">are you ready?</div>
                </div>
                <div className="sap-lg-heading">
                  Join our Kindle<span className="orange-text">Bit</span> Family
                </div>
              </div>
              <div className="sec-dual-logo">
                <img src="/assets/images/logo-dark.svg" alt="Careerimg" />
              </div>
            </div>
            <div className="sap-tab-vert d-flex align-items-start">
              <Tabs
                selectedIndex={subActive}
                onSelect={(index) => setSubActive(index)}
              >
                <TabList className="nav flex-column nav-pills me-3 react-tabs__tab-list">
                  {vacancyData &&
                    vacancyData?.map((ele) => (
                      <Tab>
                        <Link
                          to={`/career/${ele?.name
                            .replace(/\s+/g, "-")
                            .trim()}`}
                        >
                          <div
                            className="sap-sm-heading"
                            onMouseOver={() => dispatch(increment())}
                            onMouseLeave={() => dispatch(decrement())}
                          >
                            {ele?.name}
                          </div>
                        </Link>
                      </Tab>
                    ))}
                </TabList>

                <div className="tab-content">
                  {vacancyData &&
                    vacancyData?.map((ele) => (
                      <TabPanel>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1 }}
                        >
                          <div className="inner-page-con">
                            <div className="career-counter">
                              <div className="career-counter-inner">
                                vacancy - {ele?.total_vacancies}
                              </div>
                            </div>
                            <div className="ipc">
                              <div className="sap-md-heading">{ele?.name}</div>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: ele?.description,
                                }}
                              />
                            </div>
                            <div className="dual-btn">
                              <div
                                className="sap-btn-light"
                                onClick={() => setApplyModal(true)}
                              >
                                <button
                                  onMouseOver={() => dispatch(increment())}
                                  onMouseLeave={() => dispatch(decrement())}
                                >
                                  Apply now
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </TabPanel>
                    ))}
                </div>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      {applyModal && (
        <ApplyModal applyModal={applyModal} setApplyModal={setApplyModal} />
      )}
    </>
  );
}
export default Career;
