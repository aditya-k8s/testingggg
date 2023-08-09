import React from "react";

import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../Redux/Action/Action";

function TermsModal({ TermsModalstate, SetTermsModalstate }) {
  const dispatch = useDispatch();
  return (
    <Modal
      show={TermsModalstate}
      onHide={() => SetTermsModalstate(false)}
      backdrop="static"
      keyboard={false}
      centered
      id="Terms"
      className="footer-policies"
    >
      <Modal.Header
        closeButton
        onMouseOver={() => dispatch(increment())}
        onMouseLeave={() => dispatch(decrement())}
      ></Modal.Header>
      <Modal.Body>
        <div className="sap-sm-heading">Terms of Use</div>
        <div className="text-para">
          <p>
            Thank you for visiting our website. By accessing and using our
            website, you agree to the following terms and conditions:
            Intellectual</p> 
          <p>
            <b>Property Rights:</b>
            All content on our website, including
            but not limited to text, images, logos, and graphics, is owned by us
            or our licensors and is protected by intellectual property laws. You
            may not use any content from our website without our prior written
            consent.  
          </p>
          <p>
            <b>Use of Our Services:</b>
            We provide web design and development
            services to our clients. By using our services, you agree to provide
            accurate and complete information and to comply with all applicable
            laws and regulations. We reserve the right to refuse service to anyone for any reason at
            any time.
          </p>
          <p>
            <b>Limitation of Liability:</b> 
            We are not liable for any direct,
            indirect, incidental, or consequential damages arising out of your
            use of our website or services. We make no warranty or
            representation, express or implied, about the accuracy,
            completeness, or usefulness of any information on our website. 
          </p>
          <p>
            <b>Links to Third-Party Websites:</b>
            Our website may contain links to
            third-party websites. We are not responsible for the content,
            privacy policies, or practices of those websites. We encourage you
            to read the terms and conditions and privacy policies of those
            websites.
          </p>
          <p><b>Changes to the Terms of Use:</b>
               We may update these Terms of
            Use from time to time. By continuing to use our website after the
            changes have been made, you agree to be bound by the updated Terms
            of Use.
          </p>
          <p>
            <b>Governing Law:</b>
            These Terms of Use are governed by and construed in
            accordance with the laws of [insert jurisdiction]. Any disputes
            arising out of these Terms of Use will be subject to the exclusive
            jurisdiction of the courts of [Mohali, Punjab-India]. 
            </p>
            <p><b>Contact Us:</b>
            If you have any questions or concerns about our Terms of Use or our
            website, please contact us at <a href="mailto:info@kindlebit.com">info@kindlebit.com.</a>
            </p>
             
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default TermsModal;
