import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Files/Components/Navbar";
import Footer from "../Files/Components/Footer";
import Cursor from "../Files/Services/Cursor";
import ContactModal from "../Files/model/ContactModal";
import ModalTestimonials from "../Files/model/ModalTestimonials";
import QuoteModal from "../Files/model/QuoteModal";

const Layout = ({ active, setActive }) => {
  return (
    <>
      {/* <Cursor /> */}
      <Navbar active={active} setActive={setActive} />
      <Outlet />
      <Footer active={active} setActive={setActive} />
      <ContactModal />
      <ModalTestimonials />
      <QuoteModal />
    </>
  );
};
export default Layout;
