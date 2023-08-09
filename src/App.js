import React , {useState } from "react"
import { Routes,Route,BrowserRouter } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import Layout from "./layout/Layout";
import Aboutus from './Files/Components/Aboutus';
import Career from './Files/Components/Career';
import Casestudy from './Files/Components/Casestudy';
import Contactus from './Files/Components/Contactus';
import Portfolio from './Files/Components/Portfolio';
import TestimonialSingle from './Files/Components/TestimonialSingle';
import Blog from './Files/Blogs/Blog';
import Blogsingle  from './Files/Blogs/Blogsingle';
import Design from "./Files/Services/Design";
import Development from "./Files/Services/Development";
import Marketing from "./Files/Services/Marketing";
import Homepage from "./Files/Components/Homepage"

import "./App.scss"
import "aos/dist/aos.css";
import 'react-toastify/dist/ReactToastify.css'
import "owl.carousel/dist/assets/owl.carousel.css"
import "lightgallery/css/lightgallery.css"
import "lightgallery.js/dist/css/lightgallery.css";
import "owl.carousel/dist/assets/owl.theme.default.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import 'bootstrap/dist/js/bootstrap.min.js'
import Page from "./Files/Components/Page";
import Navbar from "./Files/Components/Navbar";
import Mobile from "./Files/Services/Mobile";
import Web from "./Files/Services/Web";

function App() {
const [active, setActive] = useState("1")

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout   active={active} setActive={setActive}/>}>
          <Route path="/" element={<Homepage />}/>
          <Route id="Nav"path="/navbar" element={<Navbar />}/>
          <Route path="/services" element={<Homepage/>}/>
          <Route path="/career" element={<Career />}/>
          <Route path="/career/:sub" element={<Career />}/>
          <Route path="/career/:sub/:sub" element={<Career />}/>
          <Route path="/case-study" element={<Casestudy />}/>
          <Route path="/case-study/:sub" element={<Casestudy />}/>
          <Route path="/contactus" element={<Contactus/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/testimonials" element={<TestimonialSingle />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/blog/:id" element={<Blogsingle />}/>
          <Route path="/design" element={<Design   />}/>
          <Route path="/design/:sub/" element={<Design/>}/>
          <Route path="/design/:sub/:sub" element={<Design/>}/>
          <Route path="/development" element={<Development />}/>
          <Route path="/development/:sub" element={<Development  />}/>
          <Route path="/development/:sub/:sub" element={<Development  />}/>
          <Route path="/marketing" element={<Marketing  />}/>
          <Route path="/marketing/:sub" element={<Marketing  />}/>
          <Route path="/marketing/:sub/:sub" element={<Marketing  />}/>
          <Route path="/web" element={<Web/>}/>
          <Route path="/web/:sub/:sub" element={<Web/>}/>
          <Route path="/web/:sub" element={<Web/>}/>
          <Route path="/mobile" element={<Mobile/>}/>
          <Route path="/mobile/:sub/" element={<Mobile/>}/>
          <Route path="/mobile/:sub/:sub" element={<Mobile/>}/>
          <Route path="/aboutus" element={<Aboutus />}/>
          <Route path="*" element={<Page />}/>
          </Route>
        </Routes>
      </BrowserRouter>
     <ToastContainer theme="dark" position="top-right"/>
    </div>
  );

}

export default App;
