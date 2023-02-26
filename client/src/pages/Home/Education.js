import React from "react";
import SectionTitle from "../../components/SectionTitle";
import UIUC from "../../pictures/uiuc.png";

function Education() {
  
  return (
    <div>
      <SectionTitle title="Education" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className ="flex items-center justify-center gap-10 sm:flex-col">
          <img src ={UIUC} alt="" className="h-60 w-72"/>
        <div className ="flex flex-col gap-5">
            
        <h1 className = "text-secondary text-2xl">University of Illinois at Urbana-Champaign</h1>
            <p className="text-white">
            Graduated in 2021 with a Bachelor of Science in Chemical Enginering with Distinction</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
