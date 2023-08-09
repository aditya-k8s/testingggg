import React, { useState } from "react";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../Redux/Action/Action";

function QuoteModal({ quotemodal, setQuotemodal }) {
  const [validateform, setValidateForm] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [messageForm, setMessageForm] = useState("");
  const [isEmailValid, setEmailValid] = useState(false);
  const [isPhoneValid, setPhoneValid] = useState(false);

  const dispatch = useDispatch();

  const Handlefromsubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !phoneNumber || !messageForm) {
      setValidateForm(true);
      // toast.error("All field is mandatory!");
    } else if (
      !email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,5})$")
    ) {
      setEmailValid(true);
      // toast.error("All field is mandatory!");
    } else if (!phoneNumber.match(/\d{10}/)) {
      setPhoneValid(true);
      // toast.error("All field is mandatory!");
    } else {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setMessageForm("");
      setValidateForm(false);
      toast.success("Thanks you !");
    }
  };

  const handleNameCheck = (e) => {
    if (
      (e.charCode > 32 && e.charCode < 65) ||
      (e.charCode > 90 && e.charCode < 97) ||
      (e.charCode > 122 && e.charCode <= 126)
    ) {
      e.preventDefault();
    }
  };

  const handleEmailInput = () => {
    if (!email.includes("@")) {
      setEmailValid(true);
    }
    if (email.includes("@")) {
      setEmailValid(false);
    }
  };

  const handlePhoneInput = () => {
    if (phoneNumber.length >= 9) {
      setPhoneValid(false);
    } else {
      setPhoneValid(true);
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 32) {
      event.preventDefault();
    }
  };

  return (
    <Modal
      show={quotemodal}
      onHide={() => setQuotemodal(false)}
      backdrop="static"
      keyboard={false}
      centered
      id="home-get-quote"
      className="home-get-quote"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body
        closeButton
        onMouseOver={() => dispatch(increment())}
        onMouseLeave={() => dispatch(decrement())}
      >
        <div className="hgq-heading">
          <div className="sap-lg-heading">
            How we can
            <br />
            help you?
          </div>
          <div className="pop-social-links">
            <ul>
              <li
                onMouseOver={() => dispatch(increment())}
                onMouseLeave={() => dispatch(decrement())}
              >
                <a
                  href="https://www.facebook.com/KindleBit"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li
                onMouseOver={() => dispatch(increment())}
                onMouseLeave={() => dispatch(decrement())}
              >
                <a
                  href="https://twitter.com/KindleBit"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li
                onMouseOver={() => dispatch(increment())}
                onMouseLeave={() => dispatch(decrement())}
              >
                <a
                  href="https://instagram.com/kindlebit_solutions"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li
                onMouseOver={() => dispatch(increment())}
                onMouseLeave={() => dispatch(decrement())}
              >
                <a
                  href="https://in.linkedin.com/company/kindlebit-solutions"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <form className="hgq-form-right row">
          <div
            className={`col-md-6 form-group ${
              validateform && !firstName ? `sap-error-val` : ``
            }`}
          >
            <input
              type="text"
              className="form-control"
              placeholder="first name"
              value={firstName}
              onKeyDown={handleKeyDown}
              onChange={(e) => setFirstName(e.target.value)}
              onKeyPress={(e) => {
                if (!/^[A-Za-z]+$/.test(e.key)) {
                  e.preventDefault();
                }
              }}
            />
          </div>
          <div
            className="col-md-6 form-group">
            <input
              type="text"
              className="form-control"
              placeholder="last name"
              value={lastName}
              onKeyDown={handleKeyDown}
              onChange={(e) => setLastName(e.target.value)}
              onKeyPress={(e) => {
                if (!/^[A-Za-z]+$/.test(e.key)) {
                  e.preventDefault();
                }
              }}
            />
          </div>
          <div
            className={`col-md-6 form-group ${
              (validateform && !email) || isEmailValid ? `sap-error-val` : ``
            }`}
          >
            <input
              type="email"
              className="form-control"
              value={email}
              onKeyDown={handleKeyDown}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your mail"
              onInput={handleEmailInput}
            />
             {(validateform && (isEmailValid) && email) && <span className="form-error-caption">{`Invalid email address!`}</span>}
          </div>
          <div
            className={`col-md-6 form-group ${
              validateform && (!phoneNumber || phoneNumber?.length < 10)
                ? `sap-error-val`
                : ``
            }`}
          >
            <input
              type="tel"
              className="form-control"
              value={phoneNumber}
              onKeyDown={handleKeyDown}
              maxLength="15"
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="phone number"
              onKeyPress={(e) => {
                // if (!/(?<=^| )\d+(\.\d+)?(?=$| )/.test(e.key)) {
                //   e.preventDefault();
                // }
                if (!/(?:^| )\d+(\.\d+)?(?=$| )/.test(e.key)) {
                  e.preventDefault();
                }
              }}
            />
             {(validateform && ( phoneNumber?.length < 10) && phoneNumber) && <span className="form-error-caption">{`Invalid phone number!`}</span>}
          </div>
          <div
            className={`col-md-12 form-group ${
              validateform && !messageForm ? `sap-error-val` : ``
            }`}
          >
            <textarea
              className="form-control"
              value={messageForm}
              onChange={(e) => setMessageForm(e.target.value)}
              cols="30"
              rows="10"
              placeholder="message or query?"
            ></textarea>
          </div>
          <div className="col-md-12">
            <div className="dual-btn">
              <div className="sap-btn-dark">
                <button
                  type="button"
                  onClick={(e) => Handlefromsubmit(e)}
                  onMouseOver={() => dispatch(increment())}
                  onMouseLeave={() => dispatch(decrement())}
                >
                  send me a proposal
                </button>
              </div>
              <span>OR</span>

              <div className="sap-btn-dark green-btn">
                <button
                  onMouseOver={() => dispatch(increment())}
                  onMouseLeave={() => dispatch(decrement())}
                  onClick={() => {
                    window.open(
                      "https://wa.me/918975498146?text=I'm%20interested%20in%20your%20bussiness"
                    );
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <path
                      id="Path_651"
                      data-name="Path 651"
                      d="M17,34.906a9.914,9.914,0,0,0-15.6,11.96L0,52l5.254-1.379a9.881,9.881,0,0,0,4.737,1.205h0A9.848,9.848,0,0,0,17,34.906ZM10,50.156a8.223,8.223,0,0,1-4.2-1.147l-.3-.179-3.116.817.83-3.04-.2-.312a8.253,8.253,0,1,1,15.308-4.379A8.329,8.329,0,0,1,10,50.156Zm4.518-6.17c-.246-.125-1.464-.723-1.692-.8s-.393-.125-.558.125-.638.8-.786.973-.29.188-.536.063A6.741,6.741,0,0,1,7.571,41.4c-.254-.437.254-.406.728-1.353a.459.459,0,0,0-.022-.433c-.062-.125-.558-1.344-.763-1.839s-.406-.415-.558-.424-.308-.009-.473-.009a.917.917,0,0,0-.661.308,2.783,2.783,0,0,0-.866,2.067,4.851,4.851,0,0,0,1.009,2.563A11.066,11.066,0,0,0,10.2,46.018a4.846,4.846,0,0,0,2.973.621,2.536,2.536,0,0,0,1.67-1.179,2.071,2.071,0,0,0,.143-1.179C14.924,44.17,14.759,44.107,14.513,43.987Z"
                      transform="translate(0 -32)"
                      fill="#fff"
                    />
                  </svg>{" "}
                  send hi!
                </button>
              </div>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default QuoteModal;
