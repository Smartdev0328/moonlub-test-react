import React from "react";
import Header from "../layout/Header";
import SideBar from "../section/SideBar";
import Content from "../section/Content";

function JobPage() {
    return (
      <div className="Page">
        <Header/>
        <div className="flex">
            <div className="hidden md:block w-[466px] border-r-[1px] border-solid border-[#EDEDED]">
                <SideBar/>
            </div>
            <div className="w-full md:w-[100vw-466px] pt-[20px] pl-[28px] pr-[28px] bg-[#F5F5F5]">
                <Content/>
            </div>
            
        </div>
      </div>
    );
  }
  
  export default JobPage;
  