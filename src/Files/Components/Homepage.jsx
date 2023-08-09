import React, { useEffect, useRef } from "react";
import Hero from "./Hero";
import Services from "../Services/Services";
import Deals from "./Deals";
import HowWeWork from "./HowWeWork";
import Testimonial from "./Testimonial";
import Techwork from "./Techwork";
import HomeFormLight from "./HomeFormLight";
import Homeblog from "../Blogs/Homeblog";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import $ from "jquery";

const Homepage = ({ mouse, setmouse }) => {
  const routePath = useLocation();
  const scrollToRef = useRef();

  useEffect(() => {
    AOS.init({
      once: true,
    });
    return () => {
      AOS.refresh();
    };
  }, []);

  useEffect(() => {
    var path = routePath.pathname;
    if (path.includes("/services")) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
    return () => {
      window.scroll({
        top: 0,
        behavior: "instant",
      });
    };
  }, [routePath]);

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });
    return () => {
      window.scroll({
        top: 0,
        behavior: "instant",
      });
    };
  }, []);

  useEffect(() => {
    // function scrollToBottom() {
    //   window.scrollTo({
    //     top: 0.5,
    //     behavior: 'smooth',
    //   });
    // }
    // scrollToBottom();

    // $("html, body").scrollTop(0.5);
  },[])

  return (
    <>
      <Hero mouse={mouse} setmouse={setmouse} />
      <div ref={scrollToRef}>
        <Services mouse={mouse} setmouse={setmouse} />
      </div>
      <Techwork mouse={mouse} setmouse={setmouse} />
      <HowWeWork mouse={mouse} setmouse={setmouse} />
      <Testimonial mouse={mouse} setmouse={setmouse} />
      <Deals mouse={mouse} setmouse={setmouse} />
      <HomeFormLight mouse={mouse} setmouse={setmouse} />
      <Homeblog mouse={mouse} setmouse={setmouse} />
    </>
  );
};
export default Homepage;
