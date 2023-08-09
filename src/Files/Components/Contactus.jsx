import React, { useState, useEffect, useRef } from "react";
import $ from "jquery";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../Redux/Action/Action";
import axios from "axios";

function Contactus() {
  const [validateform, setValidateForm] = useState(false);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [message, setMessageForm] = useState("");
  const sapCardRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [flipMsg, setFlipMsg] = useState(false);

  const dispatch = useDispatch();

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if(!first_name && !email && !phone && !message){
      setValidateForm(true);
      // toast.error("All fields are required", { autoClose: 2000 });
    } else {
    if (!first_name) {
      setValidateForm(true);
      // toast.error("Please enter the first name", { autoClose: 2000 });
    } else if (!email) {
      setValidateForm(true);
      // toast.error("Please enter email address", { autoClose: 2000 });
    } else if (!isValidEmail(email)) {
      setValidateForm(true);
      // toast.error("Invalid email address", { autoClose: 2000 });
    } else if (!phone) {
      setValidateForm(true);
      // toast.error("Please enter phone number", { autoClose: 2000 });
    } else if (phone?.length < 10) {
      setValidateForm(true);
      // toast.error("Invalid phone number", { autoClose: 2000 });
    } else if (!message) {
      setValidateForm(true);
      // toast.error("Please enter the message", { autoClose: 2000 });
    } else {
      let payload = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone,
        message: message,
      };
      await axios
        .post(`${process.env.REACT_APP_API_ROOT}/contact-form`, payload)
        .then(function (response) {
          toast.success(response?.data?.message, { autoClose: 2000 });
          setValidateForm(false);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhoneNumber("");
          setMessageForm("");
        })
        .catch(function (error) {
          console.log("error", error);
        });
    }}
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const sectionElement = sapCardRef.current;
      const { offsetTop } = sectionElement;
      if (scrollPosition >= (offsetTop - 150)) {
        setIsVisible("true");
        setTimeout(() => {
          setFlipMsg(true);
        }, 2000);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const handleKeyDown = (event) => {
    if (event.keyCode === 32) {
      event.preventDefault();
    }
  };
  
  return (
    <>
      <Helmet>
        <title>kindleBit - Contact </title>
      </Helmet>
      <main className="inner-page" id="contact-page">
        <section className="banner dark">
          {/* eslint-disable-next-line */}
          <img
            className="banner-img"
            src="./assets/images/contact-ban.png"
            alt="contact us image"
          />
          <div className="banner-inner container">
            <div className="banner-heading">
              <div className="sap-lg-heading">Contact</div>
              <div className="text-para">
                Get in touch and let us know how we can help. Our team of
                experts is readily available to answer your questions.
              </div>
            </div>
          </div>
        </section>
        <section className="sap-card" ref={sapCardRef}>
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
                    !flipMsg ? `callout-mascot` : `callout-mascot flip-left`
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="338.008"
                    height="146.472"
                    viewBox="0 0 338.008 146.472"
                    style={{ opacity: flipMsg ? "1" : "0" }}
                  >
                    <path
                      id="Path_440"
                      data-name="Path 440"
                      d="M698.862,390.151c2.011-6.166,9.762-12.148,16.244-12.345,5.405-.165,263.617-.083,302.511-.034a18.581,18.581,0,0,1,12.56,5.094,16.877,16.877,0,0,1,5.739,10.346,17.714,17.714,0,0,1,.165,2.611v82.37a22.058,22.058,0,0,1-.174,2.581,13.069,13.069,0,0,1-.842,4.327,20.175,20.175,0,0,1-15.236,11.582c-4.242.757-14.228.259-18.5.342-3.491.069-3.546.167-2.637,3.547q2.193,8.157,4.217,16.361a5.486,5.486,0,0,1-2.56,6.421,5.574,5.574,0,0,1-6.212-.268c-1.1-.687-2.172-1.412-3.246-2.138q-14-9.467-27.981-18.961a28.788,28.788,0,0,0-16.206-4.945c-5.33.01-10.66,0-15.99,0-17.972,0-195.091.058-213.062-.031-7.2-.036-12.79-3.268-17.021-9.092a14.308,14.308,0,0,1-2.3-6.548,21,21,0,0,1-.251-3.222V397.008a21.584,21.584,0,0,1,.174-2.882A22.13,22.13,0,0,1,698.862,390.151Z"
                      transform="translate(-698.073 -377.707)"
                      fill="#1c447d"
                    />
                  </svg>
                  <div className="sap-sm-heading">
                    believes in never ending business relations...
                  </div>
                </div>

                {/* <div className="mascot-head pull-up" {scroll ? "bg-black" : "bg-white"}> */}
                <div className={`mascot-head ${isVisible ? "pull-up" : ""}`}>
                  <div className="mascot-img">
                    <img
                      src="/assets/images/mascot.png"
                      alt="contact us"
                    />
                  </div>
                  <div className="mascot-hands">
                    <img src="/assets/images/hand.png" alt="contact us" />
                  </div>
                </div>
              </div>

              <form className="hgq-form-right row">
                <div className="sec-heading">
                  <div className="sap-caption-head">
                    <div className="sap-caption">we're right here</div>
                  </div>
                  <div className="sap-lg-heading">Don't worry, Lets talk!</div>
                </div>
                <div
                  className={`col-md-6 form-group ${
                    validateform && !first_name ? `sap-error-val` : ``
                  }`}
                >
                  <input
                    type="text"
                    className="form-control"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="first name"
                    onKeyDown={handleKeyDown}
                    onKeyPress={(e) => {
                      if (!/^[A-Za-z]+$/.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="last name"
                    onKeyDown={handleKeyDown}
                    onKeyPress={(e) => {
                      if (!/^[A-Za-z]+$/.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                  />
                </div>
                <div
                  className={`col-md-6 form-group ${
                    validateform && (!email || !isValidEmail(email))
                      ? `sap-error-val`
                      : ``
                  }`}
                >
                  <input
                    type="email"
                    className="form-control"
                    placeholder="your mail"
                    onKeyDown={handleKeyDown}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {(validateform && (!isValidEmail(email)) && email) && <span className="form-error-caption">{`Invalid email address!`}</span>}
                </div>
                <div
                  className={`col-md-6 form-group ${
                    validateform && (!phone || phone?.length < 10)
                      ? `sap-error-val`
                      : ``
                  }`}
                >
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="phone number"
                    maxLength={15}
                    value={phone}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    onKeyPress={(e) => {
                      // if (!/(?<=^| )\d+(\.\d+)?(?=$| )/.test(e.key)) {
                      //   e.preventDefault();
                      // }
                      if (!/(?:^| )\d+(\.\d+)?(?=$| )/.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                  />
                   {(validateform && ( phone?.length < 10) && phone) && <span className="form-error-caption">{`Invalid phone number!`}</span>}
                </div>
                <div
                  className={`col-md-12 form-group ${
                    validateform && !message ? `sap-error-val` : ``
                  }`}
                >
                  <textarea
                    className="form-control"
                    value={message}
                    onChange={(e) => setMessageForm(e.target.value)}
                    cols="30"
                    rows="10"
                    placeholder="message or query?"
                  ></textarea>
                </div>
                <div className="col-md-12">
                  <div className="sap-btn-dark">
                    <button
                      type="button"
                      onClick={(e) => handleFormSubmit(e)}
                      onMouseOver={() => dispatch(increment())}
                      onMouseLeave={() => dispatch(decrement())}
                    >
                      send us!
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="con-mail-sec">
              <div className="sec-heading">
                <div className="sap-caption-head">
                  <div className="sap-caption">have a query?</div>
                </div>
                <div className="sap-lg-heading">Drop us a mail</div>
              </div>

              <div className="con-mail-sec-head">
                <div className="cms-inner">
                  <div className="sap-sm-heading">Sales</div>
                  <a
                    href="mailto:sales@kindlebit.com"
                    onMouseOver={() => dispatch(increment())}
                    onMouseLeave={() => dispatch(decrement())}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.997"
                      height="14.772"
                      viewBox="0 0 20.997 14.772"
                    >
                      <path
                        id="Path_575"
                        data-name="Path 575"
                        d="M9732.337,6597.5h-8.022a1.865,1.865,0,0,1-1.969-1.97c0-3.757,0-6.884,0-9.841a1.865,1.865,0,0,1,1.976-1.959h16.028a1.866,1.866,0,0,1,1.992,1.99c0,3.25,0,6.545,0,9.794a1.877,1.877,0,0,1-1.977,1.987Zm1.3-.5h6.822a1.361,1.361,0,0,0,.789-.239l.108-.073-.071-.111-.015-.025a.466.466,0,0,0-.041-.06l-.983-1.121c-1.482-1.69-3.017-3.438-4.521-5.161a.3.3,0,0,0-.22-.121.311.311,0,0,0-.209.1l-.015.013c-.845.748-1.728,1.528-2.7,2.386a.414.414,0,0,1-.237.132.4.4,0,0,1-.233-.129l-.516-.455c-.707-.622-1.437-1.264-2.149-1.9a.383.383,0,0,0-.249-.123.357.357,0,0,0-.258.151c-.906,1.041-1.832,2.094-2.727,3.113l-.8.909c-.158.18-.316.36-.473.54-.453.517-.92,1.052-1.387,1.571a.335.335,0,0,0-.115.291c.029.125.164.177.236.2a1.537,1.537,0,0,0,.546.1h9.417ZM9723.2,6584.8c-.138,0-.2.129-.227.2a1.483,1.483,0,0,0-.127.619q0,2.127,0,4.252,0,2.864,0,5.727v.047a.731.731,0,0,0,.1.443l.093.14.145-.149c.021-.021.039-.041.058-.062l.657-.748c1.539-1.755,3.131-3.569,4.7-5.35a.284.284,0,0,0-.036-.463c-.643-.562-1.293-1.137-1.922-1.692l-.485-.429-.566-.5c-.718-.633-1.46-1.287-2.185-1.936A.326.326,0,0,0,9723.2,6584.8Zm18.234,0-.019.011a.278.278,0,0,0-.063.042l-.973.858c-1.389,1.227-2.826,2.5-4.24,3.74a.28.28,0,0,0-.027.461c1.148,1.3,2.313,2.629,3.438,3.913l.857.978,1.253,1.425.094-.166a.87.87,0,0,0,.091-.485c0-.026,0-.052,0-.078q0-3.293,0-6.587v-2.165c0-.377,0-.754,0-1.132a1.248,1.248,0,0,0-.233-.781l-.073-.1Zm-9.5-.586c-1.846,0-7.887.007-8.15.092l-.219.07.211.2c.023.022.041.04.061.056l1.791,1.581c2.127,1.878,4.327,3.82,6.488,5.734a.358.358,0,0,0,.234.108.377.377,0,0,0,.245-.118c1.886-1.669,3.806-3.363,5.663-5l1.832-1.618c.214-.187.426-.376.641-.567l.395-.35-.2-.082C9740.676,6584.214,9733.386,6584.209,9731.928,6584.209Z"
                        transform="translate(-9721.846 -6583.223)"
                        fill="#c9c9c9"
                        stroke="#c9c9c9"
                        strokeWidth="1"
                      />
                    </svg>
                    sales@kindlebit.com
                  </a>
                </div>
                <div className="cms-inner">
                  <div className="sap-sm-heading">Support</div>
                  <a
                    href="mailto:support@kindlebit.com"
                    onMouseOver={() => dispatch(increment())}
                    onMouseLeave={() => dispatch(decrement())}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.997"
                      height="14.772"
                      viewBox="0 0 20.997 14.772"
                    >
                      <path
                        id="Path_575"
                        data-name="Path 575"
                        d="M9732.337,6597.5h-8.022a1.865,1.865,0,0,1-1.969-1.97c0-3.757,0-6.884,0-9.841a1.865,1.865,0,0,1,1.976-1.959h16.028a1.866,1.866,0,0,1,1.992,1.99c0,3.25,0,6.545,0,9.794a1.877,1.877,0,0,1-1.977,1.987Zm1.3-.5h6.822a1.361,1.361,0,0,0,.789-.239l.108-.073-.071-.111-.015-.025a.466.466,0,0,0-.041-.06l-.983-1.121c-1.482-1.69-3.017-3.438-4.521-5.161a.3.3,0,0,0-.22-.121.311.311,0,0,0-.209.1l-.015.013c-.845.748-1.728,1.528-2.7,2.386a.414.414,0,0,1-.237.132.4.4,0,0,1-.233-.129l-.516-.455c-.707-.622-1.437-1.264-2.149-1.9a.383.383,0,0,0-.249-.123.357.357,0,0,0-.258.151c-.906,1.041-1.832,2.094-2.727,3.113l-.8.909c-.158.18-.316.36-.473.54-.453.517-.92,1.052-1.387,1.571a.335.335,0,0,0-.115.291c.029.125.164.177.236.2a1.537,1.537,0,0,0,.546.1h9.417ZM9723.2,6584.8c-.138,0-.2.129-.227.2a1.483,1.483,0,0,0-.127.619q0,2.127,0,4.252,0,2.864,0,5.727v.047a.731.731,0,0,0,.1.443l.093.14.145-.149c.021-.021.039-.041.058-.062l.657-.748c1.539-1.755,3.131-3.569,4.7-5.35a.284.284,0,0,0-.036-.463c-.643-.562-1.293-1.137-1.922-1.692l-.485-.429-.566-.5c-.718-.633-1.46-1.287-2.185-1.936A.326.326,0,0,0,9723.2,6584.8Zm18.234,0-.019.011a.278.278,0,0,0-.063.042l-.973.858c-1.389,1.227-2.826,2.5-4.24,3.74a.28.28,0,0,0-.027.461c1.148,1.3,2.313,2.629,3.438,3.913l.857.978,1.253,1.425.094-.166a.87.87,0,0,0,.091-.485c0-.026,0-.052,0-.078q0-3.293,0-6.587v-2.165c0-.377,0-.754,0-1.132a1.248,1.248,0,0,0-.233-.781l-.073-.1Zm-9.5-.586c-1.846,0-7.887.007-8.15.092l-.219.07.211.2c.023.022.041.04.061.056l1.791,1.581c2.127,1.878,4.327,3.82,6.488,5.734a.358.358,0,0,0,.234.108.377.377,0,0,0,.245-.118c1.886-1.669,3.806-3.363,5.663-5l1.832-1.618c.214-.187.426-.376.641-.567l.395-.35-.2-.082C9740.676,6584.214,9733.386,6584.209,9731.928,6584.209Z"
                        transform="translate(-9721.846 -6583.223)"
                        fill="#c9c9c9"
                        stroke="#c9c9c9"
                        strokeWidth="1"
                      />
                    </svg>
                    support@kindlebit.com
                  </a>
                </div>
                <div className="cms-inner">
                  <div className="sap-sm-heading">Information</div>
                  <a
                    href="mailto:info@kindlebit.com"
                    onMouseOver={() => dispatch(increment())}
                    onMouseLeave={() => dispatch(decrement())}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.997"
                      height="14.772"
                      viewBox="0 0 20.997 14.772"
                    >
                      <path
                        id="Path_575"
                        data-name="Path 575"
                        d="M9732.337,6597.5h-8.022a1.865,1.865,0,0,1-1.969-1.97c0-3.757,0-6.884,0-9.841a1.865,1.865,0,0,1,1.976-1.959h16.028a1.866,1.866,0,0,1,1.992,1.99c0,3.25,0,6.545,0,9.794a1.877,1.877,0,0,1-1.977,1.987Zm1.3-.5h6.822a1.361,1.361,0,0,0,.789-.239l.108-.073-.071-.111-.015-.025a.466.466,0,0,0-.041-.06l-.983-1.121c-1.482-1.69-3.017-3.438-4.521-5.161a.3.3,0,0,0-.22-.121.311.311,0,0,0-.209.1l-.015.013c-.845.748-1.728,1.528-2.7,2.386a.414.414,0,0,1-.237.132.4.4,0,0,1-.233-.129l-.516-.455c-.707-.622-1.437-1.264-2.149-1.9a.383.383,0,0,0-.249-.123.357.357,0,0,0-.258.151c-.906,1.041-1.832,2.094-2.727,3.113l-.8.909c-.158.18-.316.36-.473.54-.453.517-.92,1.052-1.387,1.571a.335.335,0,0,0-.115.291c.029.125.164.177.236.2a1.537,1.537,0,0,0,.546.1h9.417ZM9723.2,6584.8c-.138,0-.2.129-.227.2a1.483,1.483,0,0,0-.127.619q0,2.127,0,4.252,0,2.864,0,5.727v.047a.731.731,0,0,0,.1.443l.093.14.145-.149c.021-.021.039-.041.058-.062l.657-.748c1.539-1.755,3.131-3.569,4.7-5.35a.284.284,0,0,0-.036-.463c-.643-.562-1.293-1.137-1.922-1.692l-.485-.429-.566-.5c-.718-.633-1.46-1.287-2.185-1.936A.326.326,0,0,0,9723.2,6584.8Zm18.234,0-.019.011a.278.278,0,0,0-.063.042l-.973.858c-1.389,1.227-2.826,2.5-4.24,3.74a.28.28,0,0,0-.027.461c1.148,1.3,2.313,2.629,3.438,3.913l.857.978,1.253,1.425.094-.166a.87.87,0,0,0,.091-.485c0-.026,0-.052,0-.078q0-3.293,0-6.587v-2.165c0-.377,0-.754,0-1.132a1.248,1.248,0,0,0-.233-.781l-.073-.1Zm-9.5-.586c-1.846,0-7.887.007-8.15.092l-.219.07.211.2c.023.022.041.04.061.056l1.791,1.581c2.127,1.878,4.327,3.82,6.488,5.734a.358.358,0,0,0,.234.108.377.377,0,0,0,.245-.118c1.886-1.669,3.806-3.363,5.663-5l1.832-1.618c.214-.187.426-.376.641-.567l.395-.35-.2-.082C9740.676,6584.214,9733.386,6584.209,9731.928,6584.209Z"
                        transform="translate(-9721.846 -6583.223)"
                        fill="#c9c9c9"
                        stroke="#c9c9c9"
                        strokeWidth="1"
                      />
                    </svg>
                    info@kindlebit.com
                  </a>
                </div>
                <div className="cms-inner">
                  <div className="sap-sm-heading">Career</div>
                  <a
                    href="mailto:career@kindlebit.com"
                    onMouseOver={() => dispatch(increment())}
                    onMouseLeave={() => dispatch(decrement())}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.997"
                      height="14.772"
                      viewBox="0 0 20.997 14.772"
                    >
                      <path
                        id="Path_575"
                        data-name="Path 575"
                        d="M9732.337,6597.5h-8.022a1.865,1.865,0,0,1-1.969-1.97c0-3.757,0-6.884,0-9.841a1.865,1.865,0,0,1,1.976-1.959h16.028a1.866,1.866,0,0,1,1.992,1.99c0,3.25,0,6.545,0,9.794a1.877,1.877,0,0,1-1.977,1.987Zm1.3-.5h6.822a1.361,1.361,0,0,0,.789-.239l.108-.073-.071-.111-.015-.025a.466.466,0,0,0-.041-.06l-.983-1.121c-1.482-1.69-3.017-3.438-4.521-5.161a.3.3,0,0,0-.22-.121.311.311,0,0,0-.209.1l-.015.013c-.845.748-1.728,1.528-2.7,2.386a.414.414,0,0,1-.237.132.4.4,0,0,1-.233-.129l-.516-.455c-.707-.622-1.437-1.264-2.149-1.9a.383.383,0,0,0-.249-.123.357.357,0,0,0-.258.151c-.906,1.041-1.832,2.094-2.727,3.113l-.8.909c-.158.18-.316.36-.473.54-.453.517-.92,1.052-1.387,1.571a.335.335,0,0,0-.115.291c.029.125.164.177.236.2a1.537,1.537,0,0,0,.546.1h9.417ZM9723.2,6584.8c-.138,0-.2.129-.227.2a1.483,1.483,0,0,0-.127.619q0,2.127,0,4.252,0,2.864,0,5.727v.047a.731.731,0,0,0,.1.443l.093.14.145-.149c.021-.021.039-.041.058-.062l.657-.748c1.539-1.755,3.131-3.569,4.7-5.35a.284.284,0,0,0-.036-.463c-.643-.562-1.293-1.137-1.922-1.692l-.485-.429-.566-.5c-.718-.633-1.46-1.287-2.185-1.936A.326.326,0,0,0,9723.2,6584.8Zm18.234,0-.019.011a.278.278,0,0,0-.063.042l-.973.858c-1.389,1.227-2.826,2.5-4.24,3.74a.28.28,0,0,0-.027.461c1.148,1.3,2.313,2.629,3.438,3.913l.857.978,1.253,1.425.094-.166a.87.87,0,0,0,.091-.485c0-.026,0-.052,0-.078q0-3.293,0-6.587v-2.165c0-.377,0-.754,0-1.132a1.248,1.248,0,0,0-.233-.781l-.073-.1Zm-9.5-.586c-1.846,0-7.887.007-8.15.092l-.219.07.211.2c.023.022.041.04.061.056l1.791,1.581c2.127,1.878,4.327,3.82,6.488,5.734a.358.358,0,0,0,.234.108.377.377,0,0,0,.245-.118c1.886-1.669,3.806-3.363,5.663-5l1.832-1.618c.214-.187.426-.376.641-.567l.395-.35-.2-.082C9740.676,6584.214,9733.386,6584.209,9731.928,6584.209Z"
                        transform="translate(-9721.846 -6583.223)"
                        fill="#c9c9c9"
                        stroke="#c9c9c9"
                        strokeWidth="1"
                      />
                    </svg>
                    career@kindlebit.com
                  </a>
                </div>
              </div>
            </div>

            <div className="con-locate">
              <div className="sec-dual-heading">
                <div className="sec-heading">
                  <div className="sap-caption-head">
                    <div className="sap-caption">wanna meet in person?</div>
                  </div>
                  <div className="sap-lg-heading">Locate Us</div>
                </div>
                <div className="sec-dual-logo">
                  <img
                    src="/assets/images/logo-dark.svg"
                    alt="contact us image"
                  />
                </div>
              </div>

              <div className="con-locate-head">
                <div className="con-locate-inner">
                  <div className="sap-sm-heading">
                    <svg
                      id="Group_339"
                      data-name="Group 339"
                      xmlns="http://www.w3.org/2000/svg"
                      width="37.496"
                      height="24.997"
                      viewBox="0 0 37.496 24.997"
                    >
                      <path
                        id="Path_661"
                        data-name="Path 661"
                        d="M0,0H37.5V25H0Z"
                        fill="#f93"
                      />
                      <path
                        id="Path_662"
                        data-name="Path 662"
                        d="M0,200H37.5v16.665H0Z"
                        transform="translate(0 -191.668)"
                        fill="#fff"
                      />
                      <path
                        id="Path_663"
                        data-name="Path 663"
                        d="M0,400H37.5v8.332H0Z"
                        transform="translate(0 -383.335)"
                        fill="#128807"
                      />
                      <g
                        id="Group_362"
                        data-name="Group 362"
                        transform="translate(12.915 5.423)"
                      >
                        <circle
                          id="Ellipse_63"
                          data-name="Ellipse 63"
                          cx="3.333"
                          cy="3.333"
                          r="3.333"
                          transform="translate(2.5 3.742)"
                          fill="#008"
                        />
                        <circle
                          id="Ellipse_64"
                          data-name="Ellipse 64"
                          cx="2.916"
                          cy="2.916"
                          r="2.916"
                          transform="translate(2.917 4.159)"
                          fill="#fff"
                        />
                        <circle
                          id="Ellipse_65"
                          data-name="Ellipse 65"
                          cx="0.583"
                          cy="0.583"
                          r="0.583"
                          transform="translate(5.25 6.492)"
                          fill="#008"
                        />
                        <g id="d" transform="translate(0.534 4.741)">
                          <g id="c" transform="translate(2.758 2.067)">
                            <g id="b" transform="translate(1.69 0.45)">
                              <g id="a" transform="translate(0.751 0.033)">
                                <circle
                                  id="Ellipse_66"
                                  data-name="Ellipse 66"
                                  cx="0.146"
                                  cy="0.146"
                                  r="0.146"
                                  transform="matrix(0.991, 0.131, -0.131, 0.991, 2.866, 0)"
                                  fill="#008"
                                />
                                <path
                                  id="Path_664"
                                  data-name="Path 664"
                                  d="M-2.3,10.583l.1-1.75L-2.3,8l-.1.833Z"
                                  transform="translate(2.4 -7.884)"
                                  fill="#008"
                                />
                              </g>
                              <g
                                id="Group_339-2"
                                data-name="Group 339"
                                transform="matrix(0.966, 0.259, -0.259, 0.966, 0.699, 0)"
                              >
                                <circle
                                  id="Ellipse_67"
                                  data-name="Ellipse 67"
                                  cx="0.146"
                                  cy="0.146"
                                  r="0.146"
                                  transform="matrix(0.991, 0.131, -0.131, 0.991, 2.866, 0)"
                                  fill="#008"
                                />
                                <path
                                  id="Path_665"
                                  data-name="Path 665"
                                  d="M.1,2.583.2.833.1,0,0,.833Z"
                                  transform="translate(0 0.116)"
                                  fill="#008"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_341"
                              data-name="Group 341"
                              transform="matrix(0.866, 0.5, -0.5, 0.866, 1.712, 0)"
                            >
                              <g
                                id="a-2"
                                data-name="a"
                                transform="translate(0.751 0.033)"
                              >
                                <circle
                                  id="Ellipse_68"
                                  data-name="Ellipse 68"
                                  cx="0.146"
                                  cy="0.146"
                                  r="0.146"
                                  transform="matrix(0.991, 0.131, -0.131, 0.991, 2.866, 0)"
                                  fill="#008"
                                />
                                <path
                                  id="Path_666"
                                  data-name="Path 666"
                                  d="M.1,2.583.2.833.1,0,0,.833Z"
                                  transform="translate(0 0.116)"
                                  fill="#008"
                                />
                              </g>
                              <g
                                id="Group_340"
                                data-name="Group 340"
                                transform="matrix(0.966, 0.259, -0.259, 0.966, 0.699, 0)"
                              >
                                <circle
                                  id="Ellipse_69"
                                  data-name="Ellipse 69"
                                  cx="0.146"
                                  cy="0.146"
                                  r="0.146"
                                  transform="matrix(0.991, 0.131, -0.131, 0.991, 2.866, 0)"
                                  fill="#008"
                                />
                                <path
                                  id="Path_667"
                                  data-name="Path 667"
                                  d="M.1,2.583.2.833.1,0,0,.833Z"
                                  transform="translate(0 0.116)"
                                  fill="#008"
                                />
                              </g>
                            </g>
                          </g>
                          <g
                            id="Group_345"
                            data-name="Group 345"
                            transform="matrix(0.5, 0.866, -0.866, 0.5, 4.259, 0)"
                          >
                            <g
                              id="b-2"
                              data-name="b"
                              transform="translate(1.69 0.45)"
                            >
                              <g
                                id="a-3"
                                data-name="a"
                                transform="translate(0.751 0.033)"
                              >
                                <circle
                                  id="Ellipse_70"
                                  data-name="Ellipse 70"
                                  cx="0.146"
                                  cy="0.146"
                                  r="0.146"
                                  transform="matrix(0.991, 0.131, -0.131, 0.991, 2.866, 0)"
                                  fill="#008"
                                />
                                <path
                                  id="Path_668"
                                  data-name="Path 668"
                                  d="M.1,2.583.2.833.1,0,0,.833Z"
                                  transform="translate(0 0.116)"
                                  fill="#008"
                                />
                              </g>
                              <g
                                id="Group_342"
                                data-name="Group 342"
                                transform="matrix(0.966, 0.259, -0.259, 0.966, 0.699, 0)"
                              >
                                <circle
                                  id="Ellipse_71"
                                  data-name="Ellipse 71"
                                  cx="0.146"
                                  cy="0.146"
                                  r="0.146"
                                  transform="matrix(0.991, 0.131, -0.131, 0.991, 2.866, 0)"
                                  fill="#008"
                                />
                                <path
                                  id="Path_669"
                                  data-name="Path 669"
                                  d="M.1,2.583.2.833.1,0,0,.833Z"
                                  transform="translate(0 0.116)"
                                  fill="#008"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_344"
                              data-name="Group 344"
                              transform="matrix(0.866, 0.5, -0.5, 0.866, 1.712, 0)"
                            >
                              <g
                                id="a-4"
                                data-name="a"
                                transform="translate(0.751 0.033)"
                              >
                                <circle
                                  id="Ellipse_72"
                                  data-name="Ellipse 72"
                                  cx="0.146"
                                  cy="0.146"
                                  r="0.146"
                                  transform="matrix(0.991, 0.131, -0.131, 0.991, 2.866, 0)"
                                  fill="#008"
                                />
                                <path
                                  id="Path_670"
                                  data-name="Path 670"
                                  d="M.1,2.583.2.833.1,0,0,.833Z"
                                  transform="translate(0 0.116)"
                                  fill="#008"
                                />
                              </g>
                              <g
                                id="Group_343"
                                data-name="Group 343"
                                transform="matrix(0.966, 0.259, -0.259, 0.966, 0.699, 0)"
                              >
                                <circle
                                  id="Ellipse_73"
                                  data-name="Ellipse 73"
                                  cx="0.146"
                                  cy="0.146"
                                  r="0.146"
                                  transform="matrix(0.991, 0.131, -0.131, 0.991, 2.866, 0)"
                                  fill="#008"
                                />
                                <path
                                  id="Path_671"
                                  data-name="Path 671"
                                  d="M.1,2.583.2.833.1,0,0,.833Z"
                                  transform="translate(0 0.116)"
                                  fill="#008"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                        <g
                          id="Group_353"
                          data-name="Group 353"
                          transform="matrix(-0.5, 0.866, -0.866, -0.5, 10.504, 3.653)"
                        >
                          <g
                            id="c-2"
                            data-name="c"
                            transform="translate(2.758 2.067)"
                          >
                            <g
                              id="b-3"
                              data-name="b"
                              transform="translate(1.69 0.45)"
                            >
                              <g
                                id="a-5"
                                data-name="a"
                                transform="translate(0.751 0.033)"
                              >
                                <circle
                                  id="Ellipse_74"
                                  data-name="Ellipse 74"
                                  cx="0.146"
                                  cy="0.146"
                                  r="0.146"
                                  transform="matrix(0.991, 0.131, -0.131, 0.991, 2.866, 0)"
                                  fill="#008"
                                />
                                <path
                                  id="Path_672"
                                  data-name="Path 672"
                                  d="M.1,2.583.2.833.1,0,0,.833Z"
                                  transform="translate(0 0.116)"
                                  fill="#008"
                                />
                              </g>
                              <g
                                id="Group_346"
                                data-name="Group 346"
                                transform="matrix(0.966, 0.259, -0.259, 0.966, 0.699, 0)"
                              >
                                <circle
                                  id="Ellipse_75"
                                  data-name="Ellipse 75"
                                  cx="0.146"
                                  cy="0.146"
                                  r="0.146"
                                  transform="matrix(0.991, 0.131, -0.131, 0.991, 2.866, 0)"
                                  fill="#008"
                                />
                                <path
                                  id="Path_673"
                                  data-name="Path 673"
                                  d="M.1,2.583.2.833.1,0,0,.833Z"
                                  transform="translate(0 0.116)"
                                  fill="#008"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_348"
                              data-name="Group 348"
                              transform="matrix(0.866, 0.5, -0.5, 0.866, 1.712, 0)"
                            >
                              <g
                                id="a-6"
                                data-name="a"
                                transform="translate(0.751 0.033)"
                              >
                                <circle
                                  id="Ellipse_76"
                                  data-name="Ellipse 76"
                                  cx="0.146"
                                  cy="0.146"
                                  r="0.146"
                                  transform="matrix(0.991, 0.131, -0.131, 0.991, 2.866, 0)"
                                  fill="#008"
                                />
                                <path
                                  id="Path_674"
                                  data-name="Path 674"
                                  d="M.1,2.583.2.833.1,0,0,.833Z"
                                  transform="translate(0 0.116)"
                                  fill="#008"
                                />
                              </g>
                              <g
                                id="Group_347"
                                data-name="Group 347"
                                transform="matrix(0.966, 0.259, -0.259, 0.966, 0.699, 0)"
                              >
                                <circle
                                  id="Ellipse_77"
                                  data-name="Ellipse 77"
                                  cx="0.146"
                                  cy="0.146"
                                  r="0.146"
                                  transform="matrix(0.991, 0.131, -0.131, 0.991, 2.866, 0)"
                                  fill="#008"
                                />
                                <path
                                  id="Path_675"
                                  data-name="Path 675"
                                  d="M.1,2.583.2.833.1,0,0,.833Z"
                                  transform="translate(0 0.116)"
                                  fill="#008"
                                />
                              </g>
                            </g>
                          </g>
                          <g
                            id="Group_352"
                            data-name="Group 352"
                            transform="matrix(0.5, 0.866, -0.866, 0.5, 4.259, 0)"
                          >
                            <g
                              id="b-4"
                              data-name="b"
                              transform="translate(1.69 0.45)"
                            >
                              <g
                                id="a-7"
                                data-name="a"
                                transform="translate(0.751 0.033)"
                              >
                                <circle
                                  id="Ellipse_78"
                                  data-name="Ellipse 78"
                                  cx="0.146"
                                  cy="0.146"
                                  r="0.146"
                                  transform="matrix(0.991, 0.131, -0.131, 0.991, 2.866, 0)"
                                  fill="#008"
                                />
                                <path
                                  id="Path_676"
                                  data-name="Path 676"
                                  d="M.1,2.583.2.833.1,0,0,.833Z"
                                  transform="translate(0 0.116)"
                                  fill="#008"
                                />
                              </g>
                              <g
                                id="Group_349"
                                data-name="Group 349"
                                transform="matrix(0.966, 0.259, -0.259, 0.966, 0.699, 0)"
                              >
                                <circle
                                  id="Ellipse_79"
                                  data-name="Ellipse 79"
                                  cx="0.146"
                                  cy="0.146"
                                  r="0.146"
                                  transform="matrix(0.991, 0.131, -0.131, 0.991, 2.866, 0)"
                                  fill="#008"
                                />
                                <path
                                  id="Path_677"
                                  data-name="Path 677"
                                  d="M.1,2.583.2.833.1,0,0,.833Z"
                                  transform="translate(0 0.116)"
                                  fill="#008"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_351"
                              data-name="Group 351"
                              transform="matrix(0.866, 0.5, -0.5, 0.866, 1.712, 0)"
                            >
                              <g
                                id="a-8"
                                data-name="a"
                                transform="translate(0.751 0.033)"
                              >
                                <circle
                                  id="Ellipse_80"
                                  data-name="Ellipse 80"
                                  cx="0.146"
                                  cy="0.146"
                                  r="0.146"
                                  transform="matrix(0.991, 0.131, -0.131, 0.991, 2.866, 0)"
                                  fill="#008"
                                />
                                <path
                                  id="Path_678"
                                  data-name="Path 678"
                                  d="M.1,2.583.2.833.1,0,0,.833Z"
                                  transform="translate(0 0.116)"
                                  fill="#008"
                                />
                              </g>
                              <g
                                id="Group_350"
                                data-name="Group 350"
                                transform="matrix(0.966, 0.259, -0.259, 0.966, 0.699, 0)"
                              >
                                <circle
                                  id="Ellipse_81"
                                  data-name="Ellipse 81"
                                  cx="0.146"
                                  cy="0.146"
                                  r="0.146"
                                  transform="matrix(0.991, 0.131, -0.131, 0.991, 2.866, 0)"
                                  fill="#008"
                                />
                                <path
                                  id="Path_679"
                                  data-name="Path 679"
                                  d="M.1,2.583.2.833.1,0,0,.833Z"
                                  transform="translate(0 0.116)"
                                  fill="#008"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                        <g
                          id="Group_361"
                          data-name="Group 361"
                          transform="matrix(-0.5, -0.866, 0.866, -0.5, 6.461, 12.831)"
                        >
                          <g
                            id="c-3"
                            data-name="c"
                            transform="translate(2.758 2.067)"
                          >
                            <g
                              id="b-5"
                              data-name="b"
                              transform="translate(1.69 0.45)"
                            >
                              <g
                                id="a-9"
                                data-name="a"
                                transform="translate(0.751 0.033)"
                              >
                                <circle
                                  id="Ellipse_82"
                                  data-name="Ellipse 82"
                                  cx="0.146"
                                  cy="0.146"
                                  r="0.146"
                                  transform="matrix(0.991, 0.131, -0.131, 0.991, 2.866, 0)"
                                  fill="#008"
                                />
                                <path
                                  id="Path_680"
                                  data-name="Path 680"
                                  d="M.1,2.583.2.833.1,0,0,.833Z"
                                  transform="translate(0 0.116)"
                                  fill="#008"
                                />
                              </g>
                              <g
                                id="Group_354"
                                data-name="Group 354"
                                transform="matrix(0.966, 0.259, -0.259, 0.966, 0.699, 0)"
                              >
                                <circle
                                  id="Ellipse_83"
                                  data-name="Ellipse 83"
                                  cx="0.146"
                                  cy="0.146"
                                  r="0.146"
                                  transform="matrix(0.991, 0.131, -0.131, 0.991, 2.866, 0)"
                                  fill="#008"
                                />
                                <path
                                  id="Path_681"
                                  data-name="Path 681"
                                  d="M.1,2.583.2.833.1,0,0,.833Z"
                                  transform="translate(0 0.116)"
                                  fill="#008"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_356"
                              data-name="Group 356"
                              transform="matrix(0.866, 0.5, -0.5, 0.866, 1.712, 0)"
                            >
                              <g
                                id="a-10"
                                data-name="a"
                                transform="translate(0.751 0.033)"
                              >
                                <circle
                                  id="Ellipse_84"
                                  data-name="Ellipse 84"
                                  cx="0.146"
                                  cy="0.146"
                                  r="0.146"
                                  transform="matrix(0.991, 0.131, -0.131, 0.991, 2.866, 0)"
                                  fill="#008"
                                />
                                <path
                                  id="Path_682"
                                  data-name="Path 682"
                                  d="M.1,2.583.2.833.1,0,0,.833Z"
                                  transform="translate(0 0.116)"
                                  fill="#008"
                                />
                              </g>
                              <g
                                id="Group_355"
                                data-name="Group 355"
                                transform="matrix(0.966, 0.259, -0.259, 0.966, 0.699, 0)"
                              >
                                <circle
                                  id="Ellipse_85"
                                  data-name="Ellipse 85"
                                  cx="0.146"
                                  cy="0.146"
                                  r="0.146"
                                  transform="matrix(0.991, 0.131, -0.131, 0.991, 2.866, 0)"
                                  fill="#008"
                                />
                                <path
                                  id="Path_683"
                                  data-name="Path 683"
                                  d="M.1,2.583.2.833.1,0,0,.833Z"
                                  transform="translate(0 0.116)"
                                  fill="#008"
                                />
                              </g>
                            </g>
                          </g>
                          <g
                            id="Group_360"
                            data-name="Group 360"
                            transform="matrix(0.5, 0.866, -0.866, 0.5, 4.259, 0)"
                          >
                            <g
                              id="b-6"
                              data-name="b"
                              transform="translate(1.69 0.45)"
                            >
                              <g
                                id="a-11"
                                data-name="a"
                                transform="translate(0.751 0.033)"
                              >
                                <circle
                                  id="Ellipse_86"
                                  data-name="Ellipse 86"
                                  cx="0.146"
                                  cy="0.146"
                                  r="0.146"
                                  transform="matrix(0.991, 0.131, -0.131, 0.991, 2.866, 0)"
                                  fill="#008"
                                />
                                <path
                                  id="Path_684"
                                  data-name="Path 684"
                                  d="M.1,2.583.2.833.1,0,0,.833Z"
                                  transform="translate(0 0.116)"
                                  fill="#008"
                                />
                              </g>
                              <g
                                id="Group_357"
                                data-name="Group 357"
                                transform="matrix(0.966, 0.259, -0.259, 0.966, 0.699, 0)"
                              >
                                <circle
                                  id="Ellipse_87"
                                  data-name="Ellipse 87"
                                  cx="0.146"
                                  cy="0.146"
                                  r="0.146"
                                  transform="matrix(0.991, 0.131, -0.131, 0.991, 2.866, 0)"
                                  fill="#008"
                                />
                                <path
                                  id="Path_685"
                                  data-name="Path 685"
                                  d="M.1,2.583.2.833.1,0,0,.833Z"
                                  transform="translate(0 0.116)"
                                  fill="#008"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_359"
                              data-name="Group 359"
                              transform="matrix(0.866, 0.5, -0.5, 0.866, 1.712, 0)"
                            >
                              <g
                                id="a-12"
                                data-name="a"
                                transform="translate(0.751 0.033)"
                              >
                                <circle
                                  id="Ellipse_88"
                                  data-name="Ellipse 88"
                                  cx="0.146"
                                  cy="0.146"
                                  r="0.146"
                                  transform="matrix(0.991, 0.131, -0.131, 0.991, 2.866, 0)"
                                  fill="#008"
                                />
                                <path
                                  id="Path_686"
                                  data-name="Path 686"
                                  d="M.1,2.583.2.833.1,0,0,.833Z"
                                  transform="translate(0 0.116)"
                                  fill="#008"
                                />
                              </g>
                              <g
                                id="Group_358"
                                data-name="Group 358"
                                transform="matrix(0.966, 0.259, -0.259, 0.966, 0.699, 0)"
                              >
                                <circle
                                  id="Ellipse_89"
                                  data-name="Ellipse 89"
                                  cx="0.146"
                                  cy="0.146"
                                  r="0.146"
                                  transform="matrix(0.991, 0.131, -0.131, 0.991, 2.866, 0)"
                                  fill="#008"
                                />
                                <path
                                  id="Path_687"
                                  data-name="Path 687"
                                  d="M.1,2.583.2.833.1,0,0,.833Z"
                                  transform="translate(0 0.116)"
                                  fill="#008"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    India Office
                  </div>
                  <div className="cli-bot">
                    <a
                      onClick={() => {
                        window.open(
                          "https://goo.gl/maps/1iTmfkKVgoDuKDds6",
                          "_blank"
                        );
                      }}
                    >
                      <span className="cli-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15.965"
                          height="21"
                          viewBox="0 0 15.965 21"
                        >
                          <g
                            id="Group_207"
                            data-name="Group 207"
                            transform="translate(-8842.084 -6537.503)"
                          >
                            <path
                              id="Path_459"
                              data-name="Path 459"
                              d="M8850.074,6558c-.072,0-.156-.052-.281-.179a34.108,34.108,0,0,1-5.221-6.528,14.309,14.309,0,0,1-1.8-4.232,7.47,7.47,0,0,1,6.336-8.994l.051,0a.261.261,0,0,0,.2-.064h.115a.1.1,0,0,0,.058.019.091.091,0,0,0,.058-.019h.091a.36.36,0,0,0,.126.025.376.376,0,0,0,.13-.025h.294a.351.351,0,0,0,.126.025.376.376,0,0,0,.13-.025h.089a.091.091,0,0,0,.056.019.1.1,0,0,0,.059-.019h.051a1.386,1.386,0,0,0,.427.088c.063.006.131.012.193.022a7.52,7.52,0,0,1,6.1,6.089,8.386,8.386,0,0,1-.613,4.588,20.5,20.5,0,0,1-2.52,4.417,37.285,37.285,0,0,1-3.962,4.618c-.128.126-.208.178-.283.178Zm0-19.476a6.665,6.665,0,0,0-4.319,1.515,6.734,6.734,0,0,0-2.489,6.787,12.093,12.093,0,0,0,1.517,3.774,33.668,33.668,0,0,0,5.145,6.618.225.225,0,0,0,.15.084.24.24,0,0,0,.161-.1l0-.006a37.32,37.32,0,0,0,3.977-4.78,18.3,18.3,0,0,0,2.335-4.364,7.249,7.249,0,0,0,.354-3.922,6.986,6.986,0,0,0-6.826-5.609Zm.018,10.361a3.4,3.4,0,1,1-.017-6.8h.015a3.409,3.409,0,0,1,3.388,3.384,3.4,3.4,0,0,1-.988,2.414,3.347,3.347,0,0,1-2.4,1Zm0-6.279a2.879,2.879,0,1,0,0,5.758h0a2.876,2.876,0,0,0,2.012-4.918,2.824,2.824,0,0,0-2.015-.84Z"
                              transform="translate(-0.001)"
                              fill="#c9c9c9"
                              stroke="#c9c9c9"
                              strokeWidth="1"
                            />
                            <path
                              id="Path_460"
                              data-name="Path 460"
                              d="M8907.179,6606.047a3.4,3.4,0,1,1-.015-6.8h.012a3.409,3.409,0,0,1,3.391,3.384,3.4,3.4,0,0,1-.991,2.414,3.343,3.343,0,0,1-2.393,1Zm0-6.28a2.878,2.878,0,1,0,0,5.757h.008a2.876,2.876,0,0,0,2.012-4.917,2.828,2.828,0,0,0-2.017-.84Z"
                              transform="translate(-57.09 -57.158)"
                              fill="#c9c9c9"
                              stroke="#c9c9c9"
                              strokeWidth="1"
                            />
                          </g>
                        </svg>
                      </span>
                      <div
                        className="cli-text"
                        onMouseOver={() => dispatch(increment())}
                        onMouseLeave={() => dispatch(decrement())}
                      >
                        Plot No I-35, IT City, Sector 83 A,
                        <br />
                        Mohali, Punjab 140306
                      </div>
                    </a>
                    <a
                      onClick={() => {
                        window.open("tel:+917743000840", "_self");
                      }}
                    >
                      <span className="cli-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.977"
                          height="21"
                          viewBox="0 0 20.977 21"
                        >
                          <path
                            id="Path_461"
                            data-name="Path 461"
                            d="M9188.094,6555.64c-.125,0-.256,0-.389-.017a11.074,11.074,0,0,1-4.129-1.3,21.21,21.21,0,0,1-6.092-4.566,20.182,20.182,0,0,1-4.328-6.806,7.924,7.924,0,0,1-.562-2.949,3.014,3.014,0,0,1,.861-2.137c.51-.523,1.055-1.071,1.621-1.628a2.259,2.259,0,0,1,1.127-.6h.273a.383.383,0,0,0,.135.022h.031l.01,0,.059.008a1.723,1.723,0,0,1,1.01.538l.422.415.033.033c.766.746,1.553,1.519,2.285,2.319a1.65,1.65,0,0,1,0,2.295,21.622,21.622,0,0,1-1.547,1.559.475.475,0,0,0-.123.611,12.115,12.115,0,0,0,2.178,3.008,14.794,14.794,0,0,0,2.891,2.441c.176.113.361.212.537.307.127.067.256.136.377.206a.377.377,0,0,0,.506-.086.1.1,0,0,1,.014-.015l.41-.408c.293-.3.627-.63.951-.952a2.025,2.025,0,0,1,1.105-.639,1.962,1.962,0,0,1,.3-.024,1.672,1.672,0,0,1,1.191.521c1.025,1.006,1.871,1.851,2.664,2.658a1.722,1.722,0,0,1,.1,2.525,20.373,20.373,0,0,1-1.941,1.971A2.857,2.857,0,0,1,9188.094,6555.64Zm-11.674-19.49a1.281,1.281,0,0,0-.8.3,3.166,3.166,0,0,0-.264.232c-.166.165-.328.33-.494.5-.293.294-.594.6-.895.889a2.674,2.674,0,0,0-.867,2.027,8.3,8.3,0,0,0,.6,2.861,20.01,20.01,0,0,0,4.2,6.5,20.607,20.607,0,0,0,6.078,4.5,10.56,10.56,0,0,0,3.613,1.147,4.822,4.822,0,0,0,.486.026,2.473,2.473,0,0,0,1.8-.66c.545-.522,1.123-1.113,1.758-1.806a1.2,1.2,0,0,0-.016-1.764c-.791-.814-1.666-1.69-2.754-2.757a1.148,1.148,0,0,0-.807-.349,1.288,1.288,0,0,0-.74.254,2.626,2.626,0,0,0-.332.293q-.352.349-.7.7l-.787.784a.641.641,0,0,1-.449.223.745.745,0,0,1-.338-.094c-.264-.137-.566-.291-.844-.458a14.9,14.9,0,0,1-3.311-2.741,12.3,12.3,0,0,1-2.273-3.219c-.219-.482-.187-.64.193-.992.486-.454,1.055-1,1.576-1.576a1.18,1.18,0,0,0-.01-1.7c-.279-.3-.574-.595-.859-.878,0,0-.154-.152-.217-.217-.16-.161-.318-.322-.477-.483-.4-.4-.8-.817-1.229-1.2A1.249,1.249,0,0,0,9176.42,6536.149Z"
                            transform="translate(-9172.092 -6535.14)"
                            fill="#c9c9c9"
                            stroke="#c9c9c9"
                            strokeWidth="1"
                          />
                        </svg>
                      </span>
                      <div
                        className="cli-text"
                        onMouseOver={() => dispatch(increment())}
                        onMouseLeave={() => dispatch(decrement())}
                      >
                        +91 77430 00840
                      </div>
                    </a>
                  </div>
                </div>
                <div className="con-locate-inner">
                  <div className="sap-sm-heading">
                    <svg
                      id="Group_237"
                      data-name="Group 237"
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
                    Canada Office
                  </div>
                  <div className="cli-bot">
                    <a
                      onClick={() => {
                        window.open(
                          "https://goo.gl/maps/YUTR9hcV1ZeiuXCc7",
                          "_blank"
                        );
                      }}
                    >
                      <span className="cli-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15.965"
                          height="21"
                          viewBox="0 0 15.965 21"
                        >
                          <g
                            id="Group_207"
                            data-name="Group 207"
                            transform="translate(-8842.084 -6537.503)"
                          >
                            <path
                              id="Path_459"
                              data-name="Path 459"
                              d="M8850.074,6558c-.072,0-.156-.052-.281-.179a34.108,34.108,0,0,1-5.221-6.528,14.309,14.309,0,0,1-1.8-4.232,7.47,7.47,0,0,1,6.336-8.994l.051,0a.261.261,0,0,0,.2-.064h.115a.1.1,0,0,0,.058.019.091.091,0,0,0,.058-.019h.091a.36.36,0,0,0,.126.025.376.376,0,0,0,.13-.025h.294a.351.351,0,0,0,.126.025.376.376,0,0,0,.13-.025h.089a.091.091,0,0,0,.056.019.1.1,0,0,0,.059-.019h.051a1.386,1.386,0,0,0,.427.088c.063.006.131.012.193.022a7.52,7.52,0,0,1,6.1,6.089,8.386,8.386,0,0,1-.613,4.588,20.5,20.5,0,0,1-2.52,4.417,37.285,37.285,0,0,1-3.962,4.618c-.128.126-.208.178-.283.178Zm0-19.476a6.665,6.665,0,0,0-4.319,1.515,6.734,6.734,0,0,0-2.489,6.787,12.093,12.093,0,0,0,1.517,3.774,33.668,33.668,0,0,0,5.145,6.618.225.225,0,0,0,.15.084.24.24,0,0,0,.161-.1l0-.006a37.32,37.32,0,0,0,3.977-4.78,18.3,18.3,0,0,0,2.335-4.364,7.249,7.249,0,0,0,.354-3.922,6.986,6.986,0,0,0-6.826-5.609Zm.018,10.361a3.4,3.4,0,1,1-.017-6.8h.015a3.409,3.409,0,0,1,3.388,3.384,3.4,3.4,0,0,1-.988,2.414,3.347,3.347,0,0,1-2.4,1Zm0-6.279a2.879,2.879,0,1,0,0,5.758h0a2.876,2.876,0,0,0,2.012-4.918,2.824,2.824,0,0,0-2.015-.84Z"
                              transform="translate(-0.001)"
                              fill="#c9c9c9"
                              stroke="#c9c9c9"
                              strokeWidth="1"
                            />
                            <path
                              id="Path_460"
                              data-name="Path 460"
                              d="M8907.179,6606.047a3.4,3.4,0,1,1-.015-6.8h.012a3.409,3.409,0,0,1,3.391,3.384,3.4,3.4,0,0,1-.991,2.414,3.343,3.343,0,0,1-2.393,1Zm0-6.28a2.878,2.878,0,1,0,0,5.757h.008a2.876,2.876,0,0,0,2.012-4.917,2.828,2.828,0,0,0-2.017-.84Z"
                              transform="translate(-57.09 -57.158)"
                              fill="#c9c9c9"
                              stroke="#c9c9c9"
                              strokeWidth="1"
                            />
                          </g>
                        </svg>
                      </span>
                      <div
                        className="cli-text"
                        onMouseOver={() => dispatch(increment())}
                        onMouseLeave={() => dispatch(decrement())}
                      >
                        12639-80 Avenue Unit 210.
                        <br />
                        Surrey BC V3W 3A6
                      </div>
                    </a>
                    <a
                      onClick={() => {
                        window.open("tel:+16043564141", "_self");
                      }}
                    >
                      <span className="cli-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.977"
                          height="21"
                          viewBox="0 0 20.977 21"
                        >
                          <path
                            id="Path_461"
                            data-name="Path 461"
                            d="M9188.094,6555.64c-.125,0-.256,0-.389-.017a11.074,11.074,0,0,1-4.129-1.3,21.21,21.21,0,0,1-6.092-4.566,20.182,20.182,0,0,1-4.328-6.806,7.924,7.924,0,0,1-.562-2.949,3.014,3.014,0,0,1,.861-2.137c.51-.523,1.055-1.071,1.621-1.628a2.259,2.259,0,0,1,1.127-.6h.273a.383.383,0,0,0,.135.022h.031l.01,0,.059.008a1.723,1.723,0,0,1,1.01.538l.422.415.033.033c.766.746,1.553,1.519,2.285,2.319a1.65,1.65,0,0,1,0,2.295,21.622,21.622,0,0,1-1.547,1.559.475.475,0,0,0-.123.611,12.115,12.115,0,0,0,2.178,3.008,14.794,14.794,0,0,0,2.891,2.441c.176.113.361.212.537.307.127.067.256.136.377.206a.377.377,0,0,0,.506-.086.1.1,0,0,1,.014-.015l.41-.408c.293-.3.627-.63.951-.952a2.025,2.025,0,0,1,1.105-.639,1.962,1.962,0,0,1,.3-.024,1.672,1.672,0,0,1,1.191.521c1.025,1.006,1.871,1.851,2.664,2.658a1.722,1.722,0,0,1,.1,2.525,20.373,20.373,0,0,1-1.941,1.971A2.857,2.857,0,0,1,9188.094,6555.64Zm-11.674-19.49a1.281,1.281,0,0,0-.8.3,3.166,3.166,0,0,0-.264.232c-.166.165-.328.33-.494.5-.293.294-.594.6-.895.889a2.674,2.674,0,0,0-.867,2.027,8.3,8.3,0,0,0,.6,2.861,20.01,20.01,0,0,0,4.2,6.5,20.607,20.607,0,0,0,6.078,4.5,10.56,10.56,0,0,0,3.613,1.147,4.822,4.822,0,0,0,.486.026,2.473,2.473,0,0,0,1.8-.66c.545-.522,1.123-1.113,1.758-1.806a1.2,1.2,0,0,0-.016-1.764c-.791-.814-1.666-1.69-2.754-2.757a1.148,1.148,0,0,0-.807-.349,1.288,1.288,0,0,0-.74.254,2.626,2.626,0,0,0-.332.293q-.352.349-.7.7l-.787.784a.641.641,0,0,1-.449.223.745.745,0,0,1-.338-.094c-.264-.137-.566-.291-.844-.458a14.9,14.9,0,0,1-3.311-2.741,12.3,12.3,0,0,1-2.273-3.219c-.219-.482-.187-.64.193-.992.486-.454,1.055-1,1.576-1.576a1.18,1.18,0,0,0-.01-1.7c-.279-.3-.574-.595-.859-.878,0,0-.154-.152-.217-.217-.16-.161-.318-.322-.477-.483-.4-.4-.8-.817-1.229-1.2A1.249,1.249,0,0,0,9176.42,6536.149Z"
                            transform="translate(-9172.092 -6535.14)"
                            fill="#c9c9c9"
                            stroke="#c9c9c9"
                            strokeWidth="1"
                          />
                        </svg>
                      </span>
                      <div
                        className="cli-text"
                        onMouseOver={() => dispatch(increment())}
                        onMouseLeave={() => dispatch(decrement())}
                      >
                        +16043564141
                      </div>
                    </a>
                  </div>
                </div>
                <div className="con-locate-inner">
                  <div className="sap-sm-heading">
                    <svg
                      id="Group_236"
                      data-name="Group 236"
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
                    Australia Office
                  </div>
                  <div className="cli-bot">
                    <a
                      onClick={() => {
                        window.open(
                          "https://goo.gl/maps/DCHvwrmMbBUsY5oH7",
                          "_blank"
                        );
                      }}
                    >
                      <span className="cli-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15.965"
                          height="21"
                          viewBox="0 0 15.965 21"
                        >
                          <g
                            id="Group_207"
                            data-name="Group 207"
                            transform="translate(-8842.084 -6537.503)"
                          >
                            <path
                              id="Path_459"
                              data-name="Path 459"
                              d="M8850.074,6558c-.072,0-.156-.052-.281-.179a34.108,34.108,0,0,1-5.221-6.528,14.309,14.309,0,0,1-1.8-4.232,7.47,7.47,0,0,1,6.336-8.994l.051,0a.261.261,0,0,0,.2-.064h.115a.1.1,0,0,0,.058.019.091.091,0,0,0,.058-.019h.091a.36.36,0,0,0,.126.025.376.376,0,0,0,.13-.025h.294a.351.351,0,0,0,.126.025.376.376,0,0,0,.13-.025h.089a.091.091,0,0,0,.056.019.1.1,0,0,0,.059-.019h.051a1.386,1.386,0,0,0,.427.088c.063.006.131.012.193.022a7.52,7.52,0,0,1,6.1,6.089,8.386,8.386,0,0,1-.613,4.588,20.5,20.5,0,0,1-2.52,4.417,37.285,37.285,0,0,1-3.962,4.618c-.128.126-.208.178-.283.178Zm0-19.476a6.665,6.665,0,0,0-4.319,1.515,6.734,6.734,0,0,0-2.489,6.787,12.093,12.093,0,0,0,1.517,3.774,33.668,33.668,0,0,0,5.145,6.618.225.225,0,0,0,.15.084.24.24,0,0,0,.161-.1l0-.006a37.32,37.32,0,0,0,3.977-4.78,18.3,18.3,0,0,0,2.335-4.364,7.249,7.249,0,0,0,.354-3.922,6.986,6.986,0,0,0-6.826-5.609Zm.018,10.361a3.4,3.4,0,1,1-.017-6.8h.015a3.409,3.409,0,0,1,3.388,3.384,3.4,3.4,0,0,1-.988,2.414,3.347,3.347,0,0,1-2.4,1Zm0-6.279a2.879,2.879,0,1,0,0,5.758h0a2.876,2.876,0,0,0,2.012-4.918,2.824,2.824,0,0,0-2.015-.84Z"
                              transform="translate(-0.001)"
                              fill="#c9c9c9"
                              stroke="#c9c9c9"
                              strokeWidth="1"
                            />
                            <path
                              id="Path_460"
                              data-name="Path 460"
                              d="M8907.179,6606.047a3.4,3.4,0,1,1-.015-6.8h.012a3.409,3.409,0,0,1,3.391,3.384,3.4,3.4,0,0,1-.991,2.414,3.343,3.343,0,0,1-2.393,1Zm0-6.28a2.878,2.878,0,1,0,0,5.757h.008a2.876,2.876,0,0,0,2.012-4.917,2.828,2.828,0,0,0-2.017-.84Z"
                              transform="translate(-57.09 -57.158)"
                              fill="#c9c9c9"
                              stroke="#c9c9c9"
                              strokeWidth="1"
                            />
                          </g>
                        </svg>
                      </span>
                      <div
                        className="cli-text"
                        onMouseOver={() => dispatch(increment())}
                        onMouseLeave={() => dispatch(decrement())}
                      >
                        10 Caldwell Palace Blacktown,
                        <br />
                        NSW 2148
                      </div>
                    </a>
                    <a
                      onClick={() => {
                        window.open("tel:+61402670798", "_self");
                      }}
                    >
                      <span className="cli-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.977"
                          height="21"
                          viewBox="0 0 20.977 21"
                        >
                          <path
                            id="Path_461"
                            data-name="Path 461"
                            d="M9188.094,6555.64c-.125,0-.256,0-.389-.017a11.074,11.074,0,0,1-4.129-1.3,21.21,21.21,0,0,1-6.092-4.566,20.182,20.182,0,0,1-4.328-6.806,7.924,7.924,0,0,1-.562-2.949,3.014,3.014,0,0,1,.861-2.137c.51-.523,1.055-1.071,1.621-1.628a2.259,2.259,0,0,1,1.127-.6h.273a.383.383,0,0,0,.135.022h.031l.01,0,.059.008a1.723,1.723,0,0,1,1.01.538l.422.415.033.033c.766.746,1.553,1.519,2.285,2.319a1.65,1.65,0,0,1,0,2.295,21.622,21.622,0,0,1-1.547,1.559.475.475,0,0,0-.123.611,12.115,12.115,0,0,0,2.178,3.008,14.794,14.794,0,0,0,2.891,2.441c.176.113.361.212.537.307.127.067.256.136.377.206a.377.377,0,0,0,.506-.086.1.1,0,0,1,.014-.015l.41-.408c.293-.3.627-.63.951-.952a2.025,2.025,0,0,1,1.105-.639,1.962,1.962,0,0,1,.3-.024,1.672,1.672,0,0,1,1.191.521c1.025,1.006,1.871,1.851,2.664,2.658a1.722,1.722,0,0,1,.1,2.525,20.373,20.373,0,0,1-1.941,1.971A2.857,2.857,0,0,1,9188.094,6555.64Zm-11.674-19.49a1.281,1.281,0,0,0-.8.3,3.166,3.166,0,0,0-.264.232c-.166.165-.328.33-.494.5-.293.294-.594.6-.895.889a2.674,2.674,0,0,0-.867,2.027,8.3,8.3,0,0,0,.6,2.861,20.01,20.01,0,0,0,4.2,6.5,20.607,20.607,0,0,0,6.078,4.5,10.56,10.56,0,0,0,3.613,1.147,4.822,4.822,0,0,0,.486.026,2.473,2.473,0,0,0,1.8-.66c.545-.522,1.123-1.113,1.758-1.806a1.2,1.2,0,0,0-.016-1.764c-.791-.814-1.666-1.69-2.754-2.757a1.148,1.148,0,0,0-.807-.349,1.288,1.288,0,0,0-.74.254,2.626,2.626,0,0,0-.332.293q-.352.349-.7.7l-.787.784a.641.641,0,0,1-.449.223.745.745,0,0,1-.338-.094c-.264-.137-.566-.291-.844-.458a14.9,14.9,0,0,1-3.311-2.741,12.3,12.3,0,0,1-2.273-3.219c-.219-.482-.187-.64.193-.992.486-.454,1.055-1,1.576-1.576a1.18,1.18,0,0,0-.01-1.7c-.279-.3-.574-.595-.859-.878,0,0-.154-.152-.217-.217-.16-.161-.318-.322-.477-.483-.4-.4-.8-.817-1.229-1.2A1.249,1.249,0,0,0,9176.42,6536.149Z"
                            transform="translate(-9172.092 -6535.14)"
                            fill="#c9c9c9"
                            stroke="#c9c9c9"
                            strokeWidth="1"
                          />
                        </svg>
                      </span>
                      <div
                        className="cli-text"
                        onMouseOver={() => dispatch(increment())}
                        onMouseLeave={() => dispatch(decrement())}
                      >
                        +61402670798
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contactus;
