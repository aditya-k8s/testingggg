import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";

function HowWeWork() {
  const hwwRef = useRef();
  const [rocketUp, setRocketUp] = useState("");
  const [afterRocket, setAfterRocket] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const sectionElement = hwwRef.current;
      const { offsetTop } = sectionElement;
      if (scrollPosition >= offsetTop - 200) {
        setRocketUp("rocket-up");
        setTimeout(() => {
          setAfterRocket(true);
        }, 700);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const artHorSvg = useSpring({
    opacity: afterRocket ? 1 : 0,
    transform: afterRocket ? "translateX(0px)" : "translateX(-100px)",
    duration: 800,
    delay: 1000,
    offset: 500,
  });

  const artVerSvg = useSpring({
    opacity: afterRocket ? 1 : 0,
    transform: afterRocket ? "translateX(0px)" : "translateX(100px)",
    duration: 800,
    delay: 1000,
    offset: 500,
  });

  const hwwSapCaptionHead = useSpring({
    opacity: afterRocket ? 1 : 0,
    transform: afterRocket
      ? "translate3d(0, 0, 0)"
      : "translate3d(0, 100px, 0)",
    duration: 800,
    delay: 800,
    offset: 0,
  });

  const hwwSapLgHeading = useSpring({
    opacity: afterRocket ? 1 : 0,
    transform: afterRocket
      ? "translate3d(0, 0, 0)"
      : "translate3d(0, -100px, 0)",
    duration: 800,
    delay: 300,
    offset: 0,
  });

  const textPara = useSpring({
    opacity: afterRocket ? 1 : 0,
    transform: afterRocket ? "translateX(0px)" : "translateX(100px)",
    duration: 800,
    delay: 800,
    offset: 0,
  });

  const dottedLine = useSpring({
    opacity: afterRocket ? 1 : 0,
    duration: 1200,
    delay: 2500,
    offset: 100,
  });

  const hwwIcon1 = useSpring({
    opacity: afterRocket ? 1 : 0,
    transform: afterRocket
      ? "translate3d(0, 0, 0)"
      : "translate3d(0, 100px, 0)",
    duration: 800,
    delay: 500,
    offset: 100,
  });

  const hwwIcon2 = useSpring({
    opacity: afterRocket ? 1 : 0,
    transform: afterRocket
      ? "translate3d(0, 0, 0)"
      : "translate3d(0, 100px, 0)",
    duration: 800,
    delay: 700,
    offset: 100,
  });

  const hwwIcon3 = useSpring({
    opacity: afterRocket ? 1 : 0,
    transform: afterRocket
      ? "translate3d(0, 0, 0)"
      : "translate3d(0, 100px, 0)",
    duration: 800,
    delay: 900,
    offset: 100,
  });

  const hwwIcon4 = useSpring({
    opacity: afterRocket ? 1 : 0,
    transform: afterRocket
      ? "translate3d(0, 0, 0)"
      : "translate3d(0, 100px, 0)",
    duration: 800,
    delay: 1100,
    offset: 100,
  });

  const smHeadingCon1 = useSpring({
    opacity: afterRocket ? 1 : 0,
    duration: 1200,
    delay: 900,
    offset: 100,
  });

  const smHeadingCon2 = useSpring({
    opacity: afterRocket ? 1 : 0,
    duration: 1200,
    delay: 1100,
    offset: 100,
  });

  const smHeadingCon3 = useSpring({
    opacity: afterRocket ? 1 : 0,
    duration: 1200,
    delay: 1300,
    offset: 100,
  });

  const smHeadingCon4 = useSpring({
    opacity: afterRocket ? 1 : 0,
    duration: 1200,
    delay: 1500,
    offset: 100,
  });

  return (
    <section className={`hww dark ${rocketUp}`} id="hwwMain" ref={hwwRef}>
      <animated.svg
        className="back-white-art-hor"
        style={artHorSvg}
        // data-aos="fade-right"
        // data-aos-duration= "800"
        // data-aos-delay= "1000"
        // data-aos-offset= "500"
        id="Group_70"
        data-name="Group 70"
        xmlns="http://www.w3.org/2000/svg"
        width="252.883"
        height="123.877"
        viewBox="0 0 252.883 123.877"
      >
        <rect
          id="Rectangle_99"
          data-name="Rectangle 99"
          width="123.877"
          height="252.883"
          rx="61.939"
          transform="translate(252.883) rotate(90)"
          fill="#fff"
          opacity="0.05"
        />
        <rect
          id="Rectangle_100"
          data-name="Rectangle 100"
          width="74.596"
          height="202.142"
          rx="37.298"
          transform="translate(227.513 24.641) rotate(90)"
          fill="#fff"
          opacity="0.05"
        />
        <rect
          id="Rectangle_101"
          data-name="Rectangle 101"
          width="35.472"
          height="150.653"
          rx="17.736"
          transform="translate(201.769 44.203) rotate(90)"
          fill="#fff"
          opacity="0.05"
        />
        <rect
          id="Rectangle_102"
          data-name="Rectangle 102"
          width="10.297"
          height="111.304"
          rx="5.148"
          transform="translate(182.094 56.79) rotate(90)"
          fill="#fff"
          opacity="0.05"
        />
      </animated.svg>
      <animated.svg
        className="back-white-art-ver"
        style={artVerSvg}
        id="Group_69"
        data-name="Group 69"
        xmlns="http://www.w3.org/2000/svg"
        width="194.877"
        height="397.823"
        viewBox="0 0 194.877 397.823"
      >
        <rect
          id="Rectangle_90"
          data-name="Rectangle 90"
          width="194.877"
          height="397.823"
          rx="97.439"
          transform="translate(0)"
          fill="#fff"
          opacity="0.05"
        />
        <rect
          id="Rectangle_93"
          data-name="Rectangle 93"
          width="117.351"
          height="318"
          rx="58.675"
          transform="translate(38.763 39.912)"
          fill="#fff"
          opacity="0.05"
        />
        <rect
          id="Rectangle_94"
          data-name="Rectangle 94"
          width="55.803"
          height="237"
          rx="27.901"
          transform="translate(69.537 80.411)"
          fill="#fff"
          opacity="0.05"
        />
        <rect
          id="Rectangle_95"
          data-name="Rectangle 95"
          width="16.199"
          height="175.098"
          rx="8.099"
          transform="translate(89.339 111.362)"
          fill="#fff"
          opacity="0.05"
        />
      </animated.svg>
      <div className="hww-inner container" id="howWeWork">
        <div className="sec-dual-heading">
          <div className="sec-heading">
            <animated.div
              className="sap-caption-head"
              style={hwwSapCaptionHead}
            >
              <div className="sap-caption">our effort achieves the glory</div>
            </animated.div>
            <animated.div className="sap-lg-heading" style={hwwSapLgHeading}>
              How we work?
            </animated.div>
          </div>
          <animated.div className="text-para" style={textPara}>
            Uncover a new level of transparency and accountability in
            consulting. With Kindlebit, you'll experience clear communication
            and tangible outcomes, breaking away from traditional "black-box"
            methods. Our approach begins with a deep understanding of your
            challenges and ends with delivering the most cost-effective
            solution. We are committed to using a proven, systematic process to
            drive meaningful change and create lasting value for you.
          </animated.div>
        </div>
        <div className="hww-list-head">
          <animated.svg
            className="dotted-line"
            style={dottedLine}
            xmlns="http://www.w3.org/2000/svg"
            width="800.903"
            height="60.023"
            viewBox="0 0 800.903 60.023"
          >
            <path
              id="Path_653"
              data-name="Path 653"
              d="M1615,2748s101-36,208,0,202.565,58.495,295.919,26.574S2310.444,2711.79,2415.24,2748"
              transform="translate(-1614.664 -2730.769)"
              fill="none"
              stroke="#9cb5d4"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
          </animated.svg>
          <div className="hww-list-inner">
            <animated.div className="hww-icon" style={hwwIcon1}>
              <svg
                id="Group_34"
                data-name="Group 34"
                xmlns="http://www.w3.org/2000/svg"
                width="70.474"
                height="70"
                viewBox="0 0 70.474 70"
              >
                <path
                  id="Path_190"
                  data-name="Path 190"
                  d="M7451.279,5003.71a3.233,3.233,0,0,1-2.46-.975,3.325,3.325,0,0,1-.783-2.6c.018-.221.033-.441.048-.661a9.806,9.806,0,0,1,.465-2.823,6.952,6.952,0,0,1,3.454-3.834c1.111-.568,2.108-1.064,3.048-1.518a1.49,1.49,0,0,1,.628-.164.7.7,0,0,1,.67.437c.275.575-.15.948-.558,1.159-1,.52-1.979,1.011-2.914,1.461a5.3,5.3,0,0,0-3.141,4.6c-.047.552-.081,1.1-.1,1.638a1.609,1.609,0,0,0,.389,1.236,1.5,1.5,0,0,0,1.121.412l.1,0,.23-.008a14.342,14.342,0,0,0,2.229-.194,5.15,5.15,0,0,0,3.731-2.859q.22-.44.44-.881c.385-.773.784-1.573,1.189-2.349a.737.737,0,0,1,.7-.482,1.2,1.2,0,0,1,.172.013.727.727,0,0,1,.638.6.473.473,0,0,1,.038.194c-.167.359-.33.728-.493,1.1a14.985,14.985,0,0,1-2.426,4.214,6.593,6.593,0,0,1-4.531,2.142c-.417.031-.833.066-1.249.1l-.55.046Z"
                  transform="translate(-7443.481 -4938.066)"
                  fill="#9cb5d4"
                />
                <path
                  id="Path_191"
                  data-name="Path 191"
                  d="M7429.818,5056.958a.808.808,0,0,1-.8-.781.8.8,0,0,1,.245-.552.808.808,0,0,1,.562-.251h.024a.823.823,0,0,1,.772.815.8.8,0,0,1-.8.768Z"
                  transform="translate(-7429.02 -4986.96)"
                  fill="#9cb5d4"
                />
                <path
                  id="Path_192"
                  data-name="Path 192"
                  d="M7464.232,4839a.879.879,0,0,1-.353-.082c-.221-.1-.43-.262-.458-.832q-.182-3.625-.375-7.251l-.155-2.953c-.082-1.568-.408-7.893-.408-7.893l-.76.279c-.028.011-.053.017-.074.023a.813.813,0,0,0-.385.211,1.7,1.7,0,0,1-1.188.626,1.814,1.814,0,0,1-1.1-.476,1.117,1.117,0,0,0-.706-.271,1.3,1.3,0,0,0-.832.361c-.62.522-1.245,1.037-1.871,1.553-.818.674-1.665,1.372-2.487,2.075a1.176,1.176,0,0,1-.794.354,1.587,1.587,0,0,1-.712-.207,17.943,17.943,0,0,1-7.983-8.009,1.086,1.086,0,0,1,.133-1.394c.586-.684,1.166-1.373,1.746-2.063.611-.726,1.242-1.477,1.87-2.208a1.158,1.158,0,0,0,.076-1.684c-.009-.012-.033-.058-.05-.091s-.039-.074-.061-.11a2.993,2.993,0,0,1-.507-1.12,3.118,3.118,0,0,1,.662-1.067c.042-.055.08-.112.134-.2l.087-.133.583-.873-2.859-.151c-1.3-.069-2.588-.138-3.871-.2l-5.342-.27-6.189-.312c-.623-.032-.807-.282-.915-.548-.118-.294-.111-.575.308-.988,1.07-1.053,2.14-2.138,3.174-3.188,1.924-1.954,3.913-3.973,5.97-5.844a22.624,22.624,0,0,1,12.554-5.722,23.829,23.829,0,0,1,3.13-.178c.83,0,1.678.027,2.5.052.54.017,1.079.034,1.619.044l.248,0c.944.017,1.92.034,2.871.1.051,0,.1,0,.147,0a1.709,1.709,0,0,0,1.407-.726l.426-.53a60.411,60.411,0,0,1,6.419-7.19,41.977,41.977,0,0,1,20.288-10.2,41.217,41.217,0,0,1,5.879-.714c.179-.009.348-.014.51-.014,1.673,0,2.3.456,2.959,2.2v1.122a.985.985,0,0,0-.072.4v.1a.981.981,0,0,0,.072.4v.282a6.679,6.679,0,0,0-.309,1.771c-.021.261-.041.508-.076.75a41.556,41.556,0,0,1-12.851,24.828,61.13,61.13,0,0,1-4.929,4.056l-.767.588a1.635,1.635,0,0,0-.682,1.395c-.008.97,0,1.954.012,2.9.021,2.021.042,4.111-.112,6.15a22.9,22.9,0,0,1-4.038,11.337,31.972,31.972,0,0,1-3.881,4.438c-2.219,2.21-4.517,4.509-6.829,6.834-.394.4-.646.442-.8.442Zm13.072-30.911a.953.953,0,0,0-.228.127l-2.975,2.308c-3.1,2.4-6.3,4.89-9.459,7.326a1.446,1.446,0,0,0-.581,1.333q.139,2.659.267,5.318.1,1.989.2,3.975c.074,1.458.154,2.915.238,4.436l.189,3.478.952-.982c.884-.913,1.792-1.8,2.67-2.655a67.559,67.559,0,0,0,4.7-4.9,20.975,20.975,0,0,0,4.912-12.184c.111-1.508.1-3.032.092-4.5,0-.76-.009-1.545,0-2.314a.741.741,0,0,0-.6-.805l-.2-.041Zm-28.431,3.864a.927.927,0,0,0-.715.412l-.2.235c-.757.905-1.54,1.842-2.32,2.751a1.071,1.071,0,0,0-.113,1.359,16.233,16.233,0,0,0,5.936,5.921,1.193,1.193,0,0,0,.606.182,1.148,1.148,0,0,0,.749-.311c.8-.68,1.618-1.362,2.411-2.022l1.137-.947-.1-.372a.634.634,0,0,0-.233-.4,34.149,34.149,0,0,1-6.461-6.415A.857.857,0,0,0,7448.873,4811.95Zm12.5-6.251a.727.727,0,0,1,.515.239c.458.455.153.975-.183,1.331-.075.079-.153.155-.229.232l-1.673,1.674c-1.609,1.611-3.272,3.277-4.919,4.9a1.179,1.179,0,0,0-.434.861,1.141,1.141,0,0,0,.472.812,39.546,39.546,0,0,0,4.095,3.05,1.644,1.644,0,0,0,.914.315,1.677,1.677,0,0,0,1.024-.417c6.345-4.945,13.246-10.3,21.1-16.386a40.252,40.252,0,0,0,15.812-30.025,1.668,1.668,0,0,0-.26-1.326,1.474,1.474,0,0,0-1.143-.342c-.188,0-.417.008-.693.02a39.574,39.574,0,0,0-7.455,1.145,38.907,38.907,0,0,0-20.6,12.726c-4.222,5.038-8.426,10.231-12.491,15.252-2,2.465-4.059,5.014-6.1,7.511a1.155,1.155,0,0,0-.074,1.476,40.541,40.541,0,0,0,2.82,3.911,1.4,1.4,0,0,0,1.053.651,1.487,1.487,0,0,0,1.029-.557c1.918-1.976,3.909-3.952,5.833-5.862l.779-.773A1.234,1.234,0,0,1,7461.369,4805.7Zm-7.2-15.919a21.125,21.125,0,0,0-14.814,5.727c-1.533,1.421-3.027,2.925-4.473,4.38q-.981.987-1.966,1.968l-.018.017a.751.751,0,0,0-.148,1.034l.167.241,3.548.187c4.06.213,8.257.433,12.384.665l.115,0a1.6,1.6,0,0,0,1.309-.679q2.25-2.788,4.511-5.566l1.608-1.981,4.058-5-.3-.982h-.44c-.536,0-1.072,0-1.607,0s-1.067,0-1.6,0c-.723,0-1.322,0-1.885-.014C7454.468,4789.781,7454.32,4789.78,7454.173,4789.78Z"
                  transform="translate(-7429.022 -4768.997)"
                  fill="#9cb5d4"
                />
                <path
                  id="Path_193"
                  data-name="Path 193"
                  d="M7580.4,4907.437a.8.8,0,0,1-.781-.784.848.848,0,0,1,.794-.8.8.8,0,0,1,.565.258.791.791,0,0,1,.236.563.8.8,0,0,1-.8.76Z"
                  transform="translate(-7543.639 -4873.161)"
                  fill="#9cb5d4"
                />
                <path
                  id="Path_194"
                  data-name="Path 194"
                  d="M7625.172,4840.6a5.375,5.375,0,1,1,3.89-9.11,5.242,5.242,0,0,1,1.527,3.779,5.416,5.416,0,0,1-5.348,5.331Zm.038-9.132a3.711,3.711,0,0,0-3.747,3.726,3.762,3.762,0,0,0,1.1,2.689,3.7,3.7,0,0,0,2.639,1.1h.045a3.828,3.828,0,0,0,3.729-3.786,3.768,3.768,0,0,0-3.764-3.732Z"
                  transform="translate(-7574.261 -4815.315)"
                  fill="#9cb5d4"
                />
              </svg>
            </animated.div>
            <animated.div className="sap-sm-heading" style={smHeadingCon1}>
              Visualize
              <span className="hww-num">01.</span>
            </animated.div>
            <animated.div className="hww-con" style={smHeadingCon1}>
              Immerse in directive sessions to fully understand the vision of
              your business and drive the delivery of effective solutions.{" "}
            </animated.div>
          </div>
          <div className="hww-list-inner">
            <animated.div className="hww-icon" style={hwwIcon2}>
              <svg
                id="Group_37"
                data-name="Group 37"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="56.1"
                viewBox="0 0 70 56.1"
              >
                <path
                  id="Path_202"
                  data-name="Path 202"
                  d="M6945.659,4843.724a4.772,4.772,0,0,1-4.549-2.917,1.111,1.111,0,0,0-1.111-.73h-.058c-.358.009-.716.015-1.073.015a14.476,14.476,0,0,1-4.918-.71,12.295,12.295,0,0,1,1.59-23.615,14.5,14.5,0,0,1,2.836-.268h.04q1.125,0,2.247,0h2.725q2.177,0,4.355.011h.035a1.021,1.021,0,0,0,1.189-.957,4.963,4.963,0,0,1,4.714-3.894h.111a4.883,4.883,0,0,1,4.874,3.7,1.286,1.286,0,0,0,1.5,1.153h.041c2.586-.013,5.153-.015,7.1-.015l6.855,0a10.713,10.713,0,0,0,10.977-11.457,10.673,10.673,0,0,0-9.336-9.884c-.954-.091-1.973-.132-3.3-.132-.563,0-1.126.007-1.689.014s-1.12.014-1.68.014c-.478,0-.9,0-1.3-.016h-.034a.9.9,0,0,0-.863.624l-.025.052a4.831,4.831,0,0,1-4.6,2.95,4.768,4.768,0,0,1-4.541-2.921,1.127,1.127,0,0,0-1.163-.7q-4.443.011-8.869.008h-6.132l-3.788,0c-1.478,0-2.61,0-3.672-.014h-.024a1.162,1.162,0,0,0-1.19.757,5.042,5.042,0,0,1-4.532,2.908,4.927,4.927,0,0,1-1.049-.113,5.076,5.076,0,0,1-3.983-4.75,5.019,5.019,0,0,1,3.771-5.045,4.954,4.954,0,0,1,6.133,3.722,1.064,1.064,0,0,0,1.2.965c3.6-.013,7.288-.02,10.979-.02,3.525,0,7.158.006,10.794.019a1.066,1.066,0,0,0,1.207-.96,4.987,4.987,0,0,1,4.838-3.9h.095a5.031,5.031,0,0,1,4.861,4.071.878.878,0,0,0,1.022.772c.251,0,.5,0,.754,0,.595,0,1.19-.007,1.786-.016s1.184-.015,1.776-.015c1.174,0,2.12.032,2.979.1a12.3,12.3,0,0,1-1.25,24.546h-5.94q-4.392,0-8.783-.009a1.18,1.18,0,0,0-1.209.739,4.779,4.779,0,0,1-4.524,2.867h-.051a4.782,4.782,0,0,1-4.5-2.887,1.136,1.136,0,0,0-1.144-.722c-1.056.007-2.1.009-3.136.009l-3.336,0q-1.816,0-3.633.012a10.65,10.65,0,0,0-10.6,9.266,10.781,10.781,0,0,0,8.176,11.861,13.736,13.736,0,0,0,3.293.278c.326,0,.653,0,.979.01h.032a.745.745,0,0,0,.779-.736c.006-.035.011-.07.019-.1a5.019,5.019,0,0,1,4.93-3.986,5.445,5.445,0,0,1,.582.031,4.952,4.952,0,0,1,4.28,3.842,1.062,1.062,0,0,0,1.219.963q6.592-.015,13.167-.014,6.237,0,12.476.011a1.24,1.24,0,0,0,1.347-.817,2.835,2.835,0,0,1,1.576-1.538.939.939,0,0,0,.62-.973c-.02-4.06-.034-8.382-.045-13.6,0-.571.018-1.079.057-1.554a.748.748,0,0,1,.71-.758c.738.015.789.471.806.622a.844.844,0,0,0,.989.818c.7,0,1.383,0,2.062,0h2.633c1.178,0,2.57,0,3.969-.017h.039a1.364,1.364,0,0,1,1.214.492v.643a7.482,7.482,0,0,1-1.148,1.866c-.186.244-.377.5-.555.756a1.168,1.168,0,0,0,.011,1.519c.154.222.317.439.479.657a8.605,8.605,0,0,1,1.214,1.971v.634a1.407,1.407,0,0,1-1.22.477h-.04c-1.224-.013-2.427-.015-3.544-.015h-1.961q-1.532,0-3.064-.011h-.031a.866.866,0,0,0-1.014,1.024c.041,1.555.024,3.1,0,4.4a1.054,1.054,0,0,0,.665,1.071,3.345,3.345,0,0,1,1.888,3.517,3.43,3.43,0,0,1-2.714,2.809,3.482,3.482,0,0,1-.618.056,3.3,3.3,0,0,1-2.963-1.826,1.126,1.126,0,0,0-1.134-.66q-6.16.005-12.312.006-6.973,0-13.947-.011a1.133,1.133,0,0,0-1.149.74,4.773,4.773,0,0,1-4.549,2.9Zm0-8.473a3.455,3.455,0,0,0-.028,6.909h.043a3.455,3.455,0,0,0,.026-6.909Zm36.065,2.178a1.782,1.782,0,0,0-1.762,1.713,1.737,1.737,0,0,0,1.725,1.821h.036a1.767,1.767,0,0,0,0-3.535Zm1.529-15.141a.744.744,0,0,0-.55.2.83.83,0,0,0-.189.638s0,.72,0,1.057c0,.98.009,1.993-.013,2.986a.97.97,0,0,0,.219.729.956.956,0,0,0,.712.232h.03c1.123-.013,2.252-.015,3.207-.015h3.213l.031,0a1.028,1.028,0,0,0,.134.01.557.557,0,0,0,.544-.391l.067-.184-.111-.16q-.166-.239-.329-.48c-.249-.362-.5-.736-.77-1.1a.9.9,0,0,1,0-1.2c.268-.368.525-.746.8-1.145.127-.186.258-.378.4-.579l.409-.591h-4.325c-1.166,0-2.317,0-3.469-.006Zm-29.4-10.043a3.438,3.438,0,0,0-2.452,1.018,3.383,3.383,0,0,0-1,2.417,3.451,3.451,0,0,0,5.9,2.413,3.379,3.379,0,0,0,.992-2.417,3.416,3.416,0,0,0-3.446-3.43Zm-25.474-23.039a3.454,3.454,0,0,0,.017,6.908h.038a3.454,3.454,0,0,0-.023-6.908Zm33.946,0a3.464,3.464,0,0,0-3.434,3.422,3.388,3.388,0,0,0,.994,2.43,3.463,3.463,0,0,0,2.432,1.046,3.5,3.5,0,0,0,3.474-3.428,3.467,3.467,0,0,0-3.429-3.47Z"
                  transform="translate(-6923.373 -4787.624)"
                  fill="#9cb5d4"
                />
              </svg>
            </animated.div>
            <animated.div className="sap-sm-heading" style={smHeadingCon2}>
              Strategies
              <span className="hww-num">02.</span>
            </animated.div>
            <animated.div className="hww-con" style={smHeadingCon2}>
              Implement an effective Sprint planning process using proficient
              project management tools to effectively adopt an agile approach.
            </animated.div>
          </div>
          <div className="hww-list-inner">
            <animated.div className="hww-icon" style={hwwIcon3}>
              <svg
                id="Group_35"
                data-name="Group 35"
                xmlns="http://www.w3.org/2000/svg"
                width="69.972"
                height="70"
                viewBox="0 0 69.972 70"
              >
                <path
                  id="Path_195"
                  data-name="Path 195"
                  d="M6450.521,4863.145a.708.708,0,0,0-.339-.071h-.1a.742.742,0,0,0-.355.071H6447.2a.686.686,0,0,0-.322-.074c-.032,0-.065,0-.1,0l-.053,0-.048-.006-.064.006-.056,0c-.033,0-.065,0-.1,0a.672.672,0,0,0-.323.074h-.5a6.736,6.736,0,0,0-1.821-.375c-.315-.034-.613-.066-.907-.123a29.366,29.366,0,0,1-17.057-9.85,28.044,28.044,0,0,1-6.8-14.888,29.008,29.008,0,0,1,8.563-25.488,28.433,28.433,0,0,1,16.474-8.175,31.013,31.013,0,0,1,4.36-.313,29.367,29.367,0,0,1,14.436,3.838c.263.146.838.548.521,1.125a.605.605,0,0,1-.555.359,1.427,1.427,0,0,1-.667-.21,28.261,28.261,0,0,0-13.97-3.646q-.348,0-.7.008a28.149,28.149,0,0,0-7.692,54.973,27.525,27.525,0,0,0,8.458,1.333,28.3,28.3,0,0,0,27.487-22.013,27.889,27.889,0,0,0-2.843-19.817c-.029-.054-.061-.107-.092-.16s-.073-.123-.1-.187a.762.762,0,0,1,.224-1.07.711.711,0,0,1,.355-.1.847.847,0,0,1,.7.488,27.6,27.6,0,0,1,1.957,4.1,29.658,29.658,0,0,1-19.37,39.02,28.856,28.856,0,0,1-5.542,1.034l-.035,0a.621.621,0,0,0-.4.134Z"
                  transform="translate(-6418.742 -4793.145)"
                  fill="#9cb5d4"
                />
                <path
                  id="Path_196"
                  data-name="Path 196"
                  d="M6487.986,4890.645a17.346,17.346,0,0,1-17.251-18.557,17.348,17.348,0,0,1,17.23-16.082c.361,0,.728.012,1.089.034a17.387,17.387,0,0,1,6,1.468,1.267,1.267,0,0,1,.717.6.613.613,0,0,1-.04.487.605.605,0,0,1-.593.416,1.793,1.793,0,0,1-.68-.17,16.374,16.374,0,0,0-6.486-1.351,15.826,15.826,0,0,0-13.05,24.755,15.577,15.577,0,0,0,11.1,6.809,17.1,17.1,0,0,0,1.918.109,15.889,15.889,0,0,0,15.758-13.428,15.527,15.527,0,0,0-1.1-8.65c-.027-.064-.057-.128-.086-.192a2.534,2.534,0,0,1-.156-.394.708.708,0,0,1,.433-.9.74.74,0,0,1,.267-.054.762.762,0,0,1,.666.5,16.088,16.088,0,0,1,1.457,4.953,17.318,17.318,0,0,1-12.53,19.012,16.1,16.1,0,0,1-4.455.629Z"
                  transform="translate(-6458.438 -4832.936)"
                  fill="#9cb5d4"
                />
                <path
                  id="Path_197"
                  data-name="Path 197"
                  d="M6541.728,4799.312a.755.755,0,0,1-.644-.631,1.747,1.747,0,0,1,.63-1.031l3.79-3.791c5.081-5.082,10.334-10.337,15.509-15.5a1.357,1.357,0,0,0,.415-1.5c-.418-1.493-.822-3.017-1.214-4.491-.314-1.185-.629-2.371-.954-3.554a1.111,1.111,0,0,1,.317-1.249c1.937-1.92,3.9-3.882,5.792-5.778q1.577-1.578,3.155-3.154a1.277,1.277,0,0,1,.806-.447c.439,0,.652.614.723.877l.491,1.821c.55,2.04,1.119,4.148,1.658,6.228a1.3,1.3,0,0,0,1.049,1.066c1.478.379,2.976.785,4.425,1.178,1.165.315,2.37.642,3.559.953a1.5,1.5,0,0,1,.968.6v.441l-.164.188c-.184.211-.357.411-.544.6q-1.421,1.425-2.847,2.846c-1.886,1.884-3.835,3.833-5.741,5.762a1.237,1.237,0,0,1-.92.445h0a1.868,1.868,0,0,1-.5-.079c-1.339-.373-2.7-.735-4.024-1.086-1.3-.344-2.641-.7-3.955-1.066a1.729,1.729,0,0,0-.462-.07,1.361,1.361,0,0,0-.98.466c-5.37,5.384-10.838,10.85-16.125,16.136l-3.212,3.212A1.673,1.673,0,0,1,6541.728,4799.312Zm26.75-38.5-.1.07a1.3,1.3,0,0,0-.2.157l-2.05,2.048q-2.489,2.49-4.986,4.972a1.066,1.066,0,0,0-.263,1.164c.727,2.66,1.376,5.095,1.986,7.444a1.113,1.113,0,0,0,.9.874c2.18.567,4.753,1.244,7.305,1.957a1.759,1.759,0,0,0,.473.073,1.236,1.236,0,0,0,.921-.43c1.481-1.5,3-3.017,4.463-4.483q1.129-1.131,2.259-2.263c.02-.02.042-.038.065-.056a.786.786,0,0,0,.346-.677l-.016-.271-.263-.071q-.995-.268-1.99-.54c-1.741-.474-3.541-.963-5.319-1.421a1.147,1.147,0,0,1-.964-.933c-.461-1.785-.954-3.6-1.43-5.363q-.275-1.017-.552-2.043l-.143-.529Z"
                  transform="translate(-6512.23 -4758.189)"
                  fill="#9cb5d4"
                />
              </svg>
            </animated.div>
            <animated.div className="sap-sm-heading" style={smHeadingCon3}>
              Objective
              <span className="hww-num">03.</span>
            </animated.div>
            <animated.div className="hww-con" style={smHeadingCon3}>
              A promise to navigate perfection in all the intricate projects
              toward shaping and edifying extraordinary abilities with a
              pragmatic approach.
            </animated.div>
          </div>
          <div className="hww-list-inner">
            <animated.div className="hww-icon" style={hwwIcon4}>
              <svg
                id="Group_36"
                data-name="Group 36"
                xmlns="http://www.w3.org/2000/svg"
                width="70.057"
                height="70"
                viewBox="0 0 70.057 70"
              >
                <path
                  id="Path_198"
                  data-name="Path 198"
                  d="M7933.35,4799.343a.622.622,0,0,1-.088,0,3.716,3.716,0,0,1-.11-.63c-1.816-14.254,3.1-25.784,14.606-34.269a31.474,31.474,0,0,1,17.1-6.159c.915-.054,1.829-.082,2.717-.082,12.705,0,22.834,5.595,30.106,16.63a2.36,2.36,0,0,0,.153.21.462.462,0,0,0,.222.142l.044.016.394.157s.313-1.154.415-1.526c.263-.964.536-1.961.787-2.948a1.019,1.019,0,0,1,.07-.209.74.74,0,0,1,.188.032l.084.023a3.141,3.141,0,0,1,.876.3,3.36,3.36,0,0,1-.193.956l-.284,1.043c-.474,1.739-.964,3.538-1.429,5.312-.02.073-.034.124-.046.157-.027-.007-.063-.02-.111-.039-2.376-.951-4.714-1.855-6.949-2.687a.919.919,0,0,1-.166-.077,1.25,1.25,0,0,1,.068-.2l.019-.047a3.2,3.2,0,0,1,.408-.847h0a.089.089,0,0,1,.026,0,3.926,3.926,0,0,1,.893.287c.656.253,1.307.5,2,.761l2.011.764-.58-.944a32.765,32.765,0,0,0-6.268-7.492,33.807,33.807,0,0,0-18.567-8.359,32.879,32.879,0,0,0-4.062-.253,34.039,34.039,0,0,0-32.761,25.925,32.958,32.958,0,0,0-.467,13.365c.063.365.027.479,0,.514s-.108.1-.454.128l-.168.017C7933.624,4799.327,7933.463,4799.343,7933.35,4799.343Z"
                  transform="translate(-7932.783 -4758.198)"
                  fill="#9cb5d4"
                />
                <path
                  id="Path_199"
                  data-name="Path 199"
                  d="M7974.027,4921.682c-12.56,0-22.632-5.563-29.936-16.535l-.736-1.117-.219.809c-.11.411-.22.813-.328,1.208-.273,1-.532,1.953-.777,2.917a.656.656,0,0,1-.092.249,2.029,2.029,0,0,1-.2-.046l-.073-.022a3.1,3.1,0,0,1-.852-.315,3.283,3.283,0,0,1,.193-.971l.341-1.257c.447-1.646.91-3.347,1.346-5.026a1.356,1.356,0,0,1,.062-.191.929.929,0,0,1,.147.047c2.584,1.028,4.857,1.905,6.949,2.685a.909.909,0,0,1,.14.063,1.482,1.482,0,0,1-.059.175l-.014.037c-.221.563-.35.882-.449.882a3.977,3.977,0,0,1-.933-.3q-1.367-.521-2.73-1.037l-.064-.024-.085,0a.628.628,0,0,0-.1.009l-.074.009-.585.061.3.507a27.249,27.249,0,0,0,2.782,3.873,33.4,33.4,0,0,0,21.44,11.8,34.27,34.27,0,0,0,4.6.313,33.864,33.864,0,0,0,33.1-27.43,32.274,32.274,0,0,0,.136-11.849c-.06-.34-.02-.44,0-.468s.1-.091.43-.132l.1-.013a5.453,5.453,0,0,1,.569-.056.526.526,0,0,1,.086.005,3.739,3.739,0,0,1,.138.737c1.647,12.2-1.973,22.646-10.76,31.049a32.579,32.579,0,0,1-20.993,9.268C7975.885,4921.652,7974.943,4921.682,7974.027,4921.682Z"
                  transform="translate(-7938.911 -4851.682)"
                  fill="#9cb5d4"
                />
                <path
                  id="Path_200"
                  data-name="Path 200"
                  d="M8009.533,4855.234q-1.3-.01-2.6-.01t-2.608.01c-.559,0-.78-.188-.861-.721-.13-.855-.269-1.709-.408-2.563-.182-1.123-.371-2.284-.535-3.427a1.108,1.108,0,0,0-.853-1l-.233-.073a4.149,4.149,0,0,1-1.03-.416,1.872,1.872,0,0,0-1.027-.342,2.189,2.189,0,0,0-1.333.572c-1,.8-2.072,1.566-3.1,2.306q-.561.4-1.121.807a1.381,1.381,0,0,1-.691.339c-.163,0-.362-.129-.665-.431q-1.763-1.755-3.516-3.521c-.545-.55-.554-.7-.078-1.355l.807-1.112c.861-1.187,1.75-2.413,2.646-3.6a1.147,1.147,0,0,0,.113-1.383l-.075-.137a4.174,4.174,0,0,1-.511-1.215c-.189-1.137-1.029-1.255-1.644-1.342-1.04-.146-2.1-.315-3.118-.479-.79-.126-1.579-.253-2.37-.371-.533-.079-.72-.305-.716-.864.015-1.7.015-3.446,0-5.2,0-.555.185-.78.721-.861.886-.134,1.77-.277,2.653-.42,1.094-.176,2.225-.358,3.338-.521a1.107,1.107,0,0,0,.994-.857l.056-.175a4.8,4.8,0,0,1,.5-1.209,1.609,1.609,0,0,0-.209-2.107c-.811-1.062-1.609-2.164-2.381-3.23l-.816-1.125c-.473-.648-.463-.8.088-1.354q1.087-1.092,2.178-2.179l1.36-1.359c.242-.242.39-.38.61-.38l.055,0,.028,0,.039,0a.977.977,0,0,1,.5.253l.042.031q.587.428,1.177.855c1.165.845,2.369,1.719,3.534,2.6a1.391,1.391,0,0,0,.827.326,1.338,1.338,0,0,0,.7-.217,3.742,3.742,0,0,1,1.148-.486c1.174-.216,1.383-1.068,1.486-1.851.141-1.068.318-2.153.489-3.2.116-.712.233-1.424.339-2.137.079-.526.3-.712.847-.712.883.008,1.748.012,2.612.012s1.742,0,2.612-.011h0c.565,0,.787.187.867.713.146.952.3,1.9.454,2.854.169,1.052.346,2.14.507,3.211a.994.994,0,0,0,.768.894,7.517,7.517,0,0,1,1.538.626,1.508,1.508,0,0,0,1.907-.148c1.051-.814,2.15-1.608,3.213-2.376q.628-.454,1.255-.91a1.4,1.4,0,0,1,.7-.345c.163,0,.359.126.658.422,1.126,1.118,2.31,2.3,3.517,3.519.549.554.559.706.084,1.357l-.7.97c-.9,1.233-1.82,2.508-2.75,3.744a1.134,1.134,0,0,0-.112,1.388,4.011,4.011,0,0,1,.5,1.153,1.855,1.855,0,0,0,1.874,1.561c1.092.137,2.2.32,3.272.5.676.112,1.375.228,2.064.331.533.08.72.306.716.865-.014,1.712-.014,3.463,0,5.2,0,.557-.184.783-.72.865-.915.141-1.83.289-2.743.438-1.088.177-2.212.359-3.319.525a.992.992,0,0,0-.9.762l-.037.112a6.744,6.744,0,0,1-.589,1.423,1.552,1.552,0,0,0,.2,1.973c.884,1.151,1.751,2.35,2.589,3.51l.7.961c.415.571.4.758-.078,1.244-1.265,1.278-2.45,2.462-3.622,3.62-.335.331-.5.374-.609.374h0a1.245,1.245,0,0,1-.637-.3l-.939-.682c-1.263-.915-2.568-1.861-3.835-2.813a1.242,1.242,0,0,0-.76-.294,1.287,1.287,0,0,0-.623.18l-.023.013a4.767,4.767,0,0,1-1.273.544c-1.106.216-1.3,1.016-1.4,1.748-.145,1.067-.321,2.15-.491,3.2-.12.738-.24,1.477-.35,2.215-.08.529-.3.716-.848.716Zm-2.579-1.3c.5,0,.995.007,1.48.02h.042a.836.836,0,0,0,.877-.832c.114-.755.233-1.51.353-2.265.176-1.1.357-2.246.515-3.374a.927.927,0,0,1,.771-.911,11.662,11.662,0,0,0,3.062-1.253,1.268,1.268,0,0,1,.646-.213,1.234,1.234,0,0,1,.737.3c.8.6,1.615,1.195,2.407,1.771.7.51,1.427,1.037,2.132,1.564a1.044,1.044,0,0,0,.614.253.915.915,0,0,0,.657-.345c.669-.722,1.306-1.357,1.946-1.943a.933.933,0,0,0,.141-1.447c-.595-.778-1.182-1.585-1.749-2.366-.5-.692-1.024-1.408-1.55-2.1a1.023,1.023,0,0,1-.113-1.32,11.606,11.606,0,0,0,1.269-3.056.958.958,0,0,1,.94-.829c1.135-.151,2.281-.34,3.39-.522l.883-.146c.155-.025.33-.038.515-.052a2.2,2.2,0,0,0,1.428-.427,1.609,1.609,0,0,0,.271-1.421,2.431,2.431,0,0,1-.031-.516l0-.024v-.024c0-.186,0-.36-.005-.527-.006-.349-.01-.65.012-.948a.914.914,0,0,0-.9-1.108c-1.018-.143-2.052-.307-3.052-.465-.845-.134-1.719-.272-2.582-.4a.9.9,0,0,1-.852-.752,11.7,11.7,0,0,0-1.252-3.062,1.115,1.115,0,0,1,.125-1.443c.633-.832,1.254-1.69,1.856-2.521.453-.626.923-1.274,1.392-1.9a.908.908,0,0,0-.1-1.392,24.044,24.044,0,0,1-1.835-1.833,1.14,1.14,0,0,0-.821-.455,1.207,1.207,0,0,0-.737.3c-.861.657-1.755,1.3-2.619,1.93-.641.463-1.281.928-1.916,1.4a1.017,1.017,0,0,1-.6.239.961.961,0,0,1-.475-.145,14.036,14.036,0,0,0-3.317-1.37.859.859,0,0,1-.686-.827c-.138-.95-.289-1.913-.437-2.843-.145-.916-.294-1.862-.43-2.793a.882.882,0,0,0-.951-.9h-.069c-.477.017-.956.026-1.424.026s-.942-.009-1.4-.026h-.069a.893.893,0,0,0-.94.908c-.142.972-.3,1.959-.448,2.916-.143.906-.286,1.812-.419,2.72a.862.862,0,0,1-.691.825,13.358,13.358,0,0,0-3.253,1.341,1.023,1.023,0,0,1-.515.159,1.159,1.159,0,0,1-.685-.279c-.787-.591-1.595-1.179-2.377-1.748-.73-.53-1.485-1.08-2.22-1.629a1.035,1.035,0,0,0-.612-.251.925.925,0,0,0-.66.346c-.687.738-1.324,1.374-1.948,1.943a.929.929,0,0,0-.135,1.445c.638.837,1.268,1.705,1.878,2.545.474.653.965,1.329,1.457,1.987a.96.96,0,0,1,.1,1.2,12.7,12.7,0,0,0-1.321,3.185.937.937,0,0,1-.928.759c-1.092.154-2.2.329-3.265.5-.791.125-1.582.251-2.374.369a.841.841,0,0,0-.813.936c.025.976.025,1.954,0,2.909a.861.861,0,0,0,.837.992c.865.125,1.743.264,2.593.4,1,.157,2.028.321,3.045.463a.927.927,0,0,1,.913.77,11.762,11.762,0,0,0,1.253,3.06,1.074,1.074,0,0,1-.094,1.386c-.613.812-1.221,1.649-1.808,2.458-.5.685-1.011,1.394-1.525,2.082a.838.838,0,0,0,.092,1.273c.806.749,1.439,1.383,1.995,2a.982.982,0,0,0,.711.379,1.15,1.15,0,0,0,.68-.286c.708-.53,1.435-1.061,2.138-1.573.789-.574,1.6-1.168,2.4-1.767a1.123,1.123,0,0,1,.668-.269,1.181,1.181,0,0,1,.592.191,12.1,12.1,0,0,0,3.122,1.292.931.931,0,0,1,.761.923c.155,1.087.329,2.188.5,3.253.126.795.252,1.589.372,2.386a.839.839,0,0,0,.891.816h.042C8005.956,4853.945,8006.461,4853.938,8006.955,4853.938Z"
                  transform="translate(-7971.926 -4797.307)"
                  fill="#9cb5d4"
                />
                <path
                  id="Path_201"
                  data-name="Path 201"
                  d="M8053.019,4887.073a8.716,8.716,0,0,1-.125-17.432h.028a8.716,8.716,0,1,1,.109,17.432Zm-.116-16.16a7.44,7.44,0,1,0,5.369,12.695,7.456,7.456,0,0,0-5.334-12.695Z"
                  transform="translate(-8017.972 -4843.357)"
                  fill="#9cb5d4"
                />
              </svg>
            </animated.div>
            <animated.div className="sap-sm-heading" style={smHeadingCon4}>
              Execution
              <span className="hww-num">04.</span>
            </animated.div>
            <animated.div className="hww-con" style={smHeadingCon4}>
              Executing innovative solutions by spanning all development and
              design phases along with using human-centered design tools.{" "}
            </animated.div>
          </div>
        </div>
      </div>
      <svg
        className="fly-rocket"
        xmlns="http://www.w3.org/2000/svg"
        width="141.899"
        height="141.9"
        viewBox="0 0 141.899 141.9"
      >
        <g
          id="Group_328"
          data-name="Group 328"
          transform="translate(0 71.189) rotate(-45)"
        >
          <path
            id="Path_190"
            data-name="Path 190"
            d="M7452.676,5009.1a4.617,4.617,0,0,1-3.514-1.393,4.747,4.747,0,0,1-1.119-3.718c.026-.315.048-.63.069-.944a13.965,13.965,0,0,1,.665-4.033,9.93,9.93,0,0,1,4.934-5.478c1.588-.812,3.013-1.521,4.354-2.168a2.135,2.135,0,0,1,.9-.234,1,1,0,0,1,.958.624c.394.821-.215,1.354-.8,1.655-1.426.742-2.827,1.444-4.163,2.088a7.574,7.574,0,0,0-4.486,6.57c-.067.788-.115,1.575-.14,2.34a2.3,2.3,0,0,0,.556,1.766,2.136,2.136,0,0,0,1.6.588l.14,0,.329-.011a20.6,20.6,0,0,0,3.185-.278,7.356,7.356,0,0,0,5.331-4.084q.315-.628.628-1.259c.551-1.1,1.12-2.247,1.7-3.356a1.051,1.051,0,0,1,1-.688,1.693,1.693,0,0,1,.246.019,1.038,1.038,0,0,1,.911.862.669.669,0,0,1,.055.277c-.238.514-.472,1.04-.705,1.567a21.4,21.4,0,0,1-3.465,6.021,9.42,9.42,0,0,1-6.473,3.06c-.595.045-1.189.095-1.783.144l-.786.065Z"
            transform="translate(-7441.536 -4915.323)"
            fill="#9cb5d4"
          />
          <path
            id="Path_191"
            data-name="Path 191"
            d="M7430.161,5057.636a1.131,1.131,0,0,1,.012-2.262h.034a1.177,1.177,0,0,1,1.1,1.164,1.137,1.137,0,0,1-1.138,1.1Z"
            transform="translate(-7429.021 -4957.64)"
            fill="#9cb5d4"
          />
          <path
            id="Path_192"
            data-name="Path 192"
            d="M7479.322,4869a1.262,1.262,0,0,1-.5-.116c-.315-.136-.613-.375-.654-1.188q-.259-5.18-.536-10.359l-.222-4.218c-.116-2.24-.583-11.275-.583-11.275l-1.086.4c-.041.016-.076.024-.106.034a1.158,1.158,0,0,0-.55.3,2.431,2.431,0,0,1-1.7.9,2.59,2.59,0,0,1-1.571-.679,1.593,1.593,0,0,0-1.009-.387,1.85,1.85,0,0,0-1.188.516c-.885.746-1.778,1.481-2.673,2.218-1.169.963-2.379,1.96-3.554,2.965a1.681,1.681,0,0,1-1.134.5,2.268,2.268,0,0,1-1.018-.3,25.627,25.627,0,0,1-11.4-11.441,1.551,1.551,0,0,1,.189-1.991c.838-.977,1.666-1.961,2.494-2.947.873-1.037,1.774-2.11,2.672-3.153a1.654,1.654,0,0,0,.108-2.405c-.013-.017-.047-.083-.071-.13s-.056-.106-.087-.158a4.274,4.274,0,0,1-.724-1.6,4.453,4.453,0,0,1,.945-1.525c.06-.078.114-.16.192-.28l.125-.19.832-1.247-4.084-.216c-1.864-.1-3.7-.2-5.53-.29q-3.817-.195-7.632-.385-4.419-.221-8.841-.446c-.89-.045-1.153-.4-1.307-.783-.169-.42-.159-.822.439-1.412,1.529-1.5,3.057-3.055,4.534-4.555,2.748-2.791,5.59-5.675,8.528-8.348a32.318,32.318,0,0,1,17.935-8.174,34.052,34.052,0,0,1,4.472-.254c1.186,0,2.4.039,3.57.074.771.024,1.541.049,2.313.063l.354.007c1.349.024,2.744.049,4.1.14.072.006.142.007.21.007a2.442,2.442,0,0,0,2.011-1.036l.608-.758a86.25,86.25,0,0,1,9.17-10.272,59.965,59.965,0,0,1,28.982-14.567,58.844,58.844,0,0,1,8.4-1.02c.256-.013.5-.02.729-.02,2.391,0,3.283.651,4.228,3.143v1.6a1.4,1.4,0,0,0-.1.574v.136a1.4,1.4,0,0,0,.1.575v.4a9.534,9.534,0,0,0-.441,2.531c-.03.373-.059.726-.108,1.071a59.367,59.367,0,0,1-18.358,35.469,87.422,87.422,0,0,1-7.041,5.795l-1.1.84a2.335,2.335,0,0,0-.974,1.992c-.013,1.386,0,2.792.017,4.15.03,2.887.062,5.873-.16,8.786a32.716,32.716,0,0,1-5.768,16.2,45.706,45.706,0,0,1-5.544,6.341c-3.171,3.157-6.453,6.441-9.756,9.763-.563.566-.924.632-1.146.632ZM7498,4824.838a1.35,1.35,0,0,0-.325.181l-4.25,3.3c-4.426,3.434-9,6.985-13.513,10.465a2.066,2.066,0,0,0-.83,1.9q.2,3.8.381,7.6.139,2.84.282,5.679c.105,2.082.22,4.164.339,6.336l.271,4.968,1.359-1.4c1.264-1.3,2.561-2.57,3.814-3.792a96.48,96.48,0,0,0,6.717-7,29.957,29.957,0,0,0,7.017-17.406c.159-2.155.146-4.331.132-6.435-.007-1.085-.013-2.208,0-3.307a1.06,1.06,0,0,0-.856-1.15l-.285-.058Zm-40.616,5.521a1.324,1.324,0,0,0-1.021.588l-.281.336c-1.081,1.293-2.2,2.632-3.314,3.93a1.53,1.53,0,0,0-.161,1.942,23.184,23.184,0,0,0,8.479,8.459,1.7,1.7,0,0,0,.866.26,1.642,1.642,0,0,0,1.069-.444c1.141-.971,2.312-1.945,3.443-2.889l1.624-1.353-.149-.532a.907.907,0,0,0-.333-.569,48.774,48.774,0,0,1-9.23-9.164A1.222,1.222,0,0,0,7457.38,4830.359Zm17.852-8.93a1.036,1.036,0,0,1,.735.341c.654.649.22,1.392-.262,1.9-.106.113-.218.222-.327.331l-2.391,2.391c-2.3,2.3-4.675,4.681-7.027,7.007a1.684,1.684,0,0,0-.619,1.23,1.63,1.63,0,0,0,.674,1.16,56.427,56.427,0,0,0,5.85,4.356,2.347,2.347,0,0,0,1.306.45,2.4,2.4,0,0,0,1.464-.6c9.063-7.064,18.923-14.72,30.142-23.409a57.5,57.5,0,0,0,22.588-42.893,2.381,2.381,0,0,0-.371-1.895,2.1,2.1,0,0,0-1.632-.489c-.27,0-.6.012-.99.028a56.558,56.558,0,0,0-10.649,1.636,55.581,55.581,0,0,0-29.429,18.18c-6.031,7.2-12.037,14.616-17.845,21.79-2.852,3.521-5.8,7.162-8.711,10.729a1.649,1.649,0,0,0-.106,2.108,57.854,57.854,0,0,0,4.029,5.587,2,2,0,0,0,1.5.931,2.126,2.126,0,0,0,1.47-.8c2.74-2.823,5.584-5.646,8.333-8.374l1.113-1.1A1.764,1.764,0,0,1,7475.231,4821.429Zm-10.28-22.741a30.178,30.178,0,0,0-21.163,8.181c-2.19,2.03-4.325,4.178-6.39,6.257q-1.4,1.411-2.809,2.812l-.024.024a1.074,1.074,0,0,0-.213,1.477l.239.345,5.068.266c5.8.3,11.795.618,17.69.95.057,0,.111,0,.165,0a2.283,2.283,0,0,0,1.869-.97q3.215-3.982,6.444-7.952l2.3-2.83,5.8-7.149-.435-1.4h-.629c-.765,0-1.531,0-2.3.007s-1.524.007-2.287.007c-1.033,0-1.888-.005-2.692-.02Q7465.268,4798.687,7464.951,4798.688Z"
            transform="translate(-7429.022 -4768.997)"
            fill="#9cb5d4"
          />
          <path
            id="Path_193"
            data-name="Path 193"
            d="M7580.731,4908.114a1.14,1.14,0,0,1-1.115-1.12,1.212,1.212,0,0,1,1.134-1.139,1.13,1.13,0,1,1,0,2.259Z"
            transform="translate(-7528.222 -4859.149)"
            fill="#9cb5d4"
          />
          <path
            id="Path_194"
            data-name="Path 194"
            d="M7627.453,4845.211a7.679,7.679,0,1,1,5.558-13.015,7.491,7.491,0,0,1,2.182,5.4,7.737,7.737,0,0,1-7.64,7.615Zm.055-13.046a5.3,5.3,0,0,0-5.353,5.322,5.376,5.376,0,0,0,1.575,3.843,5.285,5.285,0,0,0,3.77,1.577h.063a5.468,5.468,0,0,0,5.328-5.409,5.383,5.383,0,0,0-5.377-5.332Z"
            transform="translate(-7554.723 -4809.085)"
            fill="#9cb5d4"
          />
        </g>
      </svg>
    </section>
  );
}
export default HowWeWork;
