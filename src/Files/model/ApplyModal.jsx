import React, { useState } from "react";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../Redux/Action/Action";
import axios from "axios";

function ApplyModal({ applyModal, setApplyModal }) {
  const [validateform, setValidateForm] = useState(false);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [resumeName, setResumeName] = useState("");
  const [resumeFile, setResumeFile] = useState("");
  const [message, setMessageForm] = useState("");
  const dispatch = useDispatch();

  const handleResumeChange = (e) => {
    setResumeName(e.target.files[0].name);
    setResumeFile(e.target.files[0]);
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleFormsubmit = async (e) => {
    e.preventDefault();
    if (!first_name && !email && !phone && !resumeName && !message) {
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
      } else if (!resumeName) {
        setValidateForm(true);
        // toast.error("Please upload your resume", { autoClose: 2000 });
      } else if (!resumeName.length < 0) {
        setValidateForm(true);
        // toast.error("Please upload your resume111111", { autoClose: 2000 });
      } else if (!message) {
        setValidateForm(true);
        // toast.error("Please enter the message", { autoClose: 2000 });
      } else {
        const formData = new FormData();
        formData.append("first_name", first_name);
        formData.append("last_name", last_name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("resume", resumeFile);
        formData.append("message", message);

        await axios
          .post(`${process.env.REACT_APP_API_ROOT}/career-apply`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then(function (response) {
            toast.success("Success");
            setValidateForm(false);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhoneNumber("");
            setResumeName("");
            setMessageForm("");
          })
          .catch(function (error) {
            toast.error("Some error occurred");
            console.log("error", error);
          });
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 32) {
      event.preventDefault();
    }
  };

  return (
    <Modal
      show={applyModal}
      onHide={() => setApplyModal(false)}
      backdrop="static"
      keyboard={false}
      centered
      id="apply-quote"
      className="home-get-quote home-get-quote-cloned-apply"
    >
      <Modal.Header
        onMouseOver={() => dispatch(increment())}
        onMouseLeave={() => dispatch(decrement())}
        closeButton
      ></Modal.Header>

      <Modal.Body>
        <div className="hgq-heading">
          <div className="sap-lg-heading">
            Wanna join Kindle<span className="orange-text">bit</span>?
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
              validateform && !first_name ? `sap-error-val` : ``
            }`}
          >
            <input
              type="text"
              className="form-control"
              placeholder="first name"
              value={first_name}
              onKeyDown={handleKeyDown}
              onChange={(e) => setFirstName(e.target.value)}
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
              placeholder="last name"
              value={last_name}
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
              validateform && (!email || !isValidEmail(email))
                ? `sap-error-val`
                : ``
            }`}
          >
            <input
              type="email"
              className="form-control"
              placeholder="your mail"
              value={email}
              onKeyDown={handleKeyDown}
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
              value={phone}
              onKeyDown={handleKeyDown}
              maxLength={15}
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
            className={`col-md-12 form-group upload-resume ${
              validateform && (!resumeName || !resumeName.length < 0)
                ? `sap-error-val`
                : ``
            }`}
          >
            <div className="upload-resume-inner ">
              <label for="file-input">
                <i className="fa-solid fa-upload"></i>
                {resumeName ? resumeName : "upload resume"}
              </label>
              <input
                id="file-input"
                accept=".pdf,.doc,.docx,.rtf"
                type="file"
                style={{ display: "none" }}
                onChange={handleResumeChange}
                // value={resumeName}
                className="form-control"
              />
            </div>
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
            <div className="dual-btn">
              <div className="sap-btn-dark">
                <button
                  type="button"
                  onClick={(e) => handleFormsubmit(e)}
                  onMouseOver={() => dispatch(increment())}
                  onMouseLeave={() => dispatch(decrement())}
                >
                  Apply
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
export default ApplyModal;
