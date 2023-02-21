import React from "react";
import DropDown from "../components/Dropdown";
import DropdownTextArea from "../components/DropdownTextArea";
import DropdownSearch from "../components/DropdownSearch";
import DropdownNormalSearch from "../components/DropdownNormalSearch";

function SideBar() {
  return (
    <div className="pl-[28px] pr-[28px] pt-[20px]">
      <div className="flex flex-wrap items-center mb-[20px]">
        <img
          src="assets/imgs/icon.png"
          alt="save search"
          className="w-[16px] h-[16px] mr-[8px]"
        />
        <span className="text-[14px] font-normal mr-[22.5px]">Save Search</span>
        <img
          src="assets/imgs/icon1.png"
          alt="Open"
          className="w-[16px] h-[16px] mr-[8px]"
        />
        <span className="text-[14px] font-normal">Open</span>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full h-[36px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-[20px]"
          placeholder="Search Mockups, Logos..."
          required
        />
      </div>
      <div className="flex flex-wrap items-center justify-start mt-[20px] mb-[20px]">
        <img
          src="assets/imgs/outline.png"
          alt="cancel"
          className="w-[20px] h-[20px] mr-[6px]"
        />
        <span className="text-[14px]">Clear</span>
      </div>
      <DropDown title="View Filters For" placeHolder="linkedIn" callback={()=>{console.log(12345)}}/>
      <DropdownTextArea title="Keywords (LinkedIn)" placeHolder="(engineer Or developer) AND software AND NOT designer" callback={()=>{console.log(12345)}}/>
      <DropdownSearch title="JobTitle (LinkedIn)" placeHolder="linkedIn" callback={()=>{console.log(12345)}}/>
      <DropdownNormalSearch title="Power Filters" placeHolder="linkedIn" callback={()=>{console.log(12345)}}/>
      <DropdownNormalSearch title="Location(LinkedIn)" placeHolder="linkedIn" callback={()=>{console.log(12345)}}/>
    </div>
  );
}

export default SideBar;
