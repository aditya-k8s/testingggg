import React from "react";

import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../Redux/Action/Action";

function PrivacyPolicyModal({
  PrivacyPolicyModalstate,
  SetPrivacyPolicyModalstate,
}) {
  const dispatch = useDispatch();

  return (
    <Modal
      show={PrivacyPolicyModalstate}
      onHide={() => SetPrivacyPolicyModalstate(false)}
      backdrop="static"
      keyboard={false}
      centered
      id="privacy"
      className="footer-policies"
    >
      <Modal.Header
        closeButton
        onMouseOver={() => dispatch(increment())}
        onMouseLeave={() => dispatch(decrement())}
      >
      </Modal.Header>
      <Modal.Body>
        <div className="sap-sm-heading">Privacy Policy</div>
        <div className="text-para">
            <p>As a web design and development company, we take privacy very seriously. This Privacy Policy outlines our practices for collecting, using, and
            disclosing information from our clients and website visitors. </p>
            <p><b>Collection of Information:</b>We collect personal information, such as name, email,
            and phone number, when you contact us or request a quote for our
            services. We also collect non-personal information, such as browser type
            and IP address, through the use of cookies and other tracking
            technologies.</p>
            <p><b>Use of Information:</b>We use personal information to
            communicate with our clients, process their requests, and provide our
            services. We may also use personal information for marketing purposes,
            such as sending promotional emails and newsletters, but only if you have
            given us explicit consent to do so. We use non-personal information to
            improve our website and services. This information is aggregated and
            analyzed to understand trends and user behavior. </p>
            <p><b>Disclosure of Information:</b>We do not sell or rent personal information to third
            parties. We may disclose personal information to third-party service
            providers who assist us with our business operations, such as payment
            processing and email marketing. We may also disclose personal
            information if required by law or to protect our legal rights.</p>
            <p><b>Security of Information:</b>We use reasonable measures to protect personal
            information from unauthorized access, disclosure, and alteration.
            However, no method of transmission over the Internet or electronic
            storage is 100% secure. </p>
            <p><b>Your Rights:</b>You have the right to access,
            update, and delete personal information that we hold about you. You may
            also withdraw your consent for us to use your personal information for
            marketing purposes at any time. </p>
            <p><b>Changes to this Privacy Policy:</b>We may update this Privacy Policy from time to time. We will notify you of any
            changes by posting the new Privacy Policy on our website. </p>
            <p><b>Contact Us:</b>If you have any questions or concerns about our Privacy Policy or our
            handling of your personal information, please contact us at <a href="mailto:info@kindlebit.com">info@kindlebit.com.</a></p>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default PrivacyPolicyModal;
