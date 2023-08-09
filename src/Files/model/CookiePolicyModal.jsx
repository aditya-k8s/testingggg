import React from "react";

import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../Redux/Action/Action";

function CookiePolicyModal({
  CookiePolicyModalstate,
  setCookiePolicyModalState,
}) {
  const dispatch = useDispatch();
  return (
    <Modal
      show={CookiePolicyModalstate}
      onHide={() => setCookiePolicyModalState(false)}
      backdrop="static"
      keyboard={false}
      centered
      id="cookie"
      className="footer-policies"
    >
      <Modal.Header
        onMouseOver={() => dispatch(increment())}
        onMouseLeave={() => dispatch(decrement())}
        closeButton
      ></Modal.Header>

      <Modal.Body>
        <div className="sap-sm-heading">Cookie Policy</div>
        <div className="text-para">
            <p>We use cookies and similar technologies on our website to provide
            you with a better browsing experience and to analyze how our website
            is used. This Cookie Policy explains what cookies are, how we use
            them, and your choices regarding cookies. What Are Cookies? Cookies
            are small text files that are placed on your device when you visit
            our website. They help us remember your preferences and improve your
            browsing experience. Cookies may be session cookies (which expire
            when you close your browser) or persistent cookies (which remain on
            your device until they expire or are deleted).</p>
            <p><b>How We Use Cookies:</b> We use cookies for the following purposes -</p>
            <p><b>Strictly Necessary Cookies:</b>These cookies are essential for the
            operation of our website and cannot be turned off in our system.
            They enable you to navigate our website and use its features.</p>
            <p><b>Analytical/Performance Cookies:</b>These cookies allow us to analyze
            how our website is used and to improve its performance. They collect
            information about how visitors use our website, including which
            pages are visited most often and whether visitors receive error
            messages. These cookies do not collect personally identifiable
            information. </p>
            <p><b>Functionality Cookies:</b>These cookies enable our website
            to remember your preferences, such as your language and region, and
            provide enhanced features. They may also be used to provide you with
            customized content based on your browsing history and interests.</p>
            <p><b>Targeting/Advertising Cookies:</b>These cookies are used to deliver
            targeted advertisements to you based on your interests and browsing
            history. They may also be used to measure the effectiveness of our
            advertising campaigns. </p>
            <p><b>Your Choices Regarding Cookies:</b>You can
            control the use of cookies on our website by adjusting your browser
            settings. Most browsers allow you to block all cookies, accept only
            certain cookies, or delete cookies when you close your browser.
            However, if you block or delete cookies, some features of our
            website may not function properly. </p>
            <p><b>Changes to this Cookie Policy:</b>We
            may update this Cookie Policy from time to time. We will notify you
            of any changes by posting the new Cookie Policy on our website.</p>
            <p><b>Contact Us:</b>If you have any questions or concerns about our Cookie
            Policy or our use of cookies, please contact us at <a href="mailto:info@kindlebit.com">info@kindlebit.com.</a></p>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CookiePolicyModal;
