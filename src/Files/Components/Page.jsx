import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../Redux/Action/Action";

function Page() {
  const [bern, setBern] = useState(false);
  const [svg, setsvg] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });

    setTimeout(() => {
      setsvg(true);
      setBern(true);
    }, 2000);

    setTimeout(() => {
      setBern(true);
    }, 100);
  }, []);
  return (
    <>
      <main className="inner-page" id="error-page">
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
            <div className="contact-page-top-sec">
              <div className="contact-mascot-head">
                <div
                  className={`${
                    !svg ? `callout-mascot` : `callout-mascot flip-left`
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="338.008"
                    height="146.472"
                    viewBox="0 0 338.008 146.472"
                    style={{ opacity: svg ? "1" : "0" }}
                  >
                    <path
                      id="Path_440"
                      data-name="Path 440"
                      d="M698.862,390.151c2.011-6.166,9.762-12.148,16.244-12.345,5.405-.165,263.617-.083,302.511-.034a18.581,18.581,0,0,1,12.56,5.094,16.877,16.877,0,0,1,5.739,10.346,17.714,17.714,0,0,1,.165,2.611v82.37a22.058,22.058,0,0,1-.174,2.581,13.069,13.069,0,0,1-.842,4.327,20.175,20.175,0,0,1-15.236,11.582c-4.242.757-14.228.259-18.5.342-3.491.069-3.546.167-2.637,3.547q2.193,8.157,4.217,16.361a5.486,5.486,0,0,1-2.56,6.421,5.574,5.574,0,0,1-6.212-.268c-1.1-.687-2.172-1.412-3.246-2.138q-14-9.467-27.981-18.961a28.788,28.788,0,0,0-16.206-4.945c-5.33.01-10.66,0-15.99,0-17.972,0-195.091.058-213.062-.031-7.2-.036-12.79-3.268-17.021-9.092a14.308,14.308,0,0,1-2.3-6.548,21,21,0,0,1-.251-3.222V397.008a21.584,21.584,0,0,1,.174-2.882A22.13,22.13,0,0,1,698.862,390.151Z"
                      transform="translate(-698.073 -377.707)"
                      fill="#1c447d"
                    />
                  </svg>
                  <div className="sap-sm-heading">404</div>
                </div>
                <div
                  className={`${bern ? `mascot-head pull-up` : `mascot-head`}`}
                >
                  <div className="mascot-img">
                    <img src="/assets/images/mascot-sad.png" alt="404img" />
                  </div>
                  <div className="mascot-hands">
                    <img src="/assets/images/hand.png" alt="contactusimg" />
                  </div>
                </div>
              </div>
              <form className="hgq-form-right row">
                <div className="sec-heading">
                  <div className="sap-lg-heading">
                    Oops!
                    <br />
                    Page Not Found
                  </div>
                </div>
                <div className="text-para">
                  <p>
                    This page doesn't exist or was removed!
                    <br />
                    We suggest you to back to home
                  </p>
                </div>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <div className="sap-btn-light">
                    <button
                      onMouseOver={() => dispatch(increment())}
                      onMouseLeave={() => dispatch(decrement())}
                    >
                      back to home
                    </button>
                  </div>
                </Link>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Page;
