import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
// import axios from "axios";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../Redux/Action/Action";

function ModalTestimonials({
  setModalTestimonials,
  modalTestimonials,
  number,
}) {
  // const [testimonialData, setTestimonialData] = useState([])
  const [videoId, setVideoId] = useState("");
  const dispatch = useDispatch();

  // useEffect(() => {
  //   axios.get(`${process.env.REACT_APP_API_ROOT}/testimonials`)
  //   .then((response)=>{
  //     setTestimonialData(response.data.data)
  //   })
  // }, []);

  useEffect(() => {
    if (number === 1) {
      setVideoId("nG9bkaybuGs");
    } else if (number === 2) {
      setVideoId("lXpJ0m22waQ");
    } else {
      setVideoId("UuUoy_zOUM4");
    }
    // eslint-disable-next-line
  }, []);

  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    // <>
    // {
    //   testimonialData.filter(items=>items.id==number).map((item)=>
    //   <Modal
    //   show={modalTestimonials}
    //   onHide={() => setModalTestimonials(false)}
    //   backdrop="static"
    //   keyboard={false}
    //   centered
    //   id="testi-video-pop"
    // >
    //       <Modal.Header closeButton onMouseOver={()=>dispatch(increment())} onMouseLeave={()=>dispatch(decrement())}>
    //       </Modal.Header>
    //       <Modal.Body>
    //         <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
    //           <iframe
    //             src={item.video}
    //             title="iframe"
    //             style={{
    //               position: "absolute",
    //               top: "0",
    //               left: "0",
    //               width: "100%",
    //               height: "100%",
    //             }}
    //             frameborder="0"
    //             allow=" fullscreen; picture-in-picture"
    //             allowfullscreen
    //           ></iframe>
    //         </div>
    //       </Modal.Body>
    // </Modal>
    //   )
    // }

    // </>
    <>
      <Modal
        show={modalTestimonials}
        onHide={() => setModalTestimonials(false)}
        backdrop="static"
        keyboard={false}
        centered
        id="testi-video-pop"
      >
        <Modal.Header
          closeButton
          onMouseOver={() => dispatch(increment())}
          onMouseLeave={() => dispatch(decrement())}
        ></Modal.Header>
        <Modal.Body>
          <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
            <iframe
              src={videoSrc}
              title="iframe"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
              }}
              frameborder="0"
              allow=" fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalTestimonials;
