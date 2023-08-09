import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import CountUp from "react-countup";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../Redux/Action/Action";
import { Helmet } from "react-helmet";

function Hero() {
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>KindleBit Welcome's you </title>
      </Helmet>
      <section className="hero dark hero-white-nav">
        <div className="hero-inner container">
          <div className="hero-left">
            <div
              className="hero-heading sap-lg-heading"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-offset="0"
            >
              <main>
                We are in the world <span className="orange-text">Business </span>
                of 
                <span className="typed-text">
                  <Typewriter
                    options={{
                      strings: [
                        "understanding",
                        "optimizing",
                        "growing",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
                your Business.
              </main>
            </div>
            <div className="prg-counter">
              <div className="prg-container row"
                  data-aos="fade-in"
                  data-aos-duration="800"
                  data-aos-delay="800"
                  data-aos-offset="0"
              >
                <div
                  className="col-md-2"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="800"
                  data-aos-offset="0"
                >
                  <h3 className="prg-count" data-count="15">
                    <CountUp start={0} end={15} duration={3} />
                  </h3>
                  <h4 className="prg-count-title">experience</h4>
                </div>
                <div
                  className="col-md-2"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="1000"
                  data-aos-offset="0"
                >
                  <h3 className="prg-count" data-count="9200">
                    <CountUp start={0} end={9200} duration={3} />
                  </h3>
                  <h4 className="prg-count-title">happy clients</h4>
                </div>
                <div
                  className="col-md-2"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="1200"
                  data-aos-offset="0"
                >
                  <h3 className="prg-count" data-count="9500">
                    <CountUp start={0} end={9500} duration={3} />
                  </h3>
                  <h4 className="prg-count-title">delivered projects</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-backdrop-vid">
          <video width="320" height="240" autoPlay preload="auto" loop muted onLoadedMetadata="true" playsInline="true">
            <source
              src="/assets/videos/first_fold_video.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>
    </>
  );
}
export default Hero;
