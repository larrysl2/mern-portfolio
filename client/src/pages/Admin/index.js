import React, { useEffect } from "react";
import Header from "../../components/Header";
import { Tabs } from "antd";
import AdminIntro from "./AdminIntro.js";
import AdminAbout from "./AdminAbout.js";
import { useSelector } from "react-redux";
import Experiences from "./AdminExperiences";
import AdminProjects from "./AdminProjects";


function Admin() {
    const {portfolioData} = useSelector((state)=>state.root);
    useEffect(()=>{
        if(!localStorage.getItem("token")){
            window.location.href="/admin-login";
        }
    },[]);
  return (
    <div>
      <Header />
      <div className ="flex gap-10 items-center px-5 py-2 justify-between">
        <div className = "flex gap-10 items-center">
            <h1 className ="text-3xl text-primary">Portfolio Admin</h1>
            <div className = "w-60 h-[1px] bg-gray-500"></div>
        </div>
        <h1 className ="underline text-primary text-xl cursor-pointer"
        onClick={()=>{
            localStorage.removeItem("token");
            window.location.href ="/admin-login";
        }}
        >Logout</h1>
      </div>
      {portfolioData && <div className="mt-5 p-5">
     
        <Tabs
          defaultActiveKey="1"
          items={[
            {
              label: "Intro",
              key: "1",
              children: <AdminIntro/>,
            },
            {
              label: "About",
              key: "2",
              children: <AdminAbout/>,
            },
            {
                label: "Experiences",
                key: "3",
                children: <Experiences/>,
              },
              {
                label: "Projects",
                key: "4",
                children: <AdminProjects/>,
              }
          ]}
          
        />
      </div>}
    </div>
  );
}

export default Admin;
