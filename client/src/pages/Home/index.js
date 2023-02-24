import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experiences from "./Experiences";
import Footer from "./Footer";
import Intro from "./Intro";
import LeftSider from "./LeftSider";
import Projects from "./Projects";
function Home() {
  const {portfolioData} =useSelector((state)=>state.root);
  return (
  <div >
    <Header/>
    {portfolioData&&(<div className ="bg-primary px-40 sm:px-5">
     <Intro/>
     <About/>
     <Experiences/>
     <Projects/>
     <Education/>
     <Contact/>
     <Footer/>
     <LeftSider/>
    </div>)}
  </div>
  )
}
export default Home;
