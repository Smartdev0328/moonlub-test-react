import React, { useState } from "react";
import PersonInfo from "../components/PersonInfo";
import { Person } from "../types/Person";
function Content() {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleDropdown = (e: any) => {
    setShowDropDown(!showDropDown);
  };
  const person: Person = {
    name: "James Hiddleston",
    linkedInUrl: "",
    githubUrl: "",
    upworkUrl: "",
    description: "Machine Learning Engineer",
    location: "San Francisco Bay Area",
    email: "",
    phone: "",
    experience: [
      "Senior Machine Learning Engineer at Google Oct 2020 - Jun 2022",
      "Senior Machine Learning Engineer at Google Oct 2020 - Jun 2022",
    ],
    education: [
      "Stanford University, M.S., Computer Science Oct 2016 - Nov 2020",
      "Stanford University, M.S., Computer Science Oct 2016 - Nov 2020",
    ],
    mobDescription: 'Software Developer at Meta: Dec 2022',
    mobDetail: 'I build software based on Figma design facilisis mi nulla erat sit. Ac imperdie...'
  };
  return (
    <div>
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex flex-wrap justify-start items-center w-[199px] h-[32px]">
          <img
            src="assets/imgs/group.png"
            alt="group icon"
            className="rounded-[5px] bg-[#EDEDED] w-[28px] h-[28px] p-[2px]"
          />
          <div className="text-[24px] font-bold ml-[12px] mr-[8px]">4,000</div>
          <div className="text-[14px] text-[#89888E]">Candidates</div>
        </div>
        <div className="hidden md:block w-[486px]">
          <div className="flex items-center justify-center ">
            <input
              type="checkbox"
              className="w-[24px] h-[24px] mr-[16px] text-blue-600 bg-gray-100 border-gray-300 rounded"
              defaultChecked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <label
              className="inline-block pl-[0.15rem] hover:cursor-pointer text-[#5F2EE5] font-bold whitespace-nowrap"
              htmlFor="checkboxDefault"
            >
              Select All on Page
            </label>
            <div className="h-full w-0 border-[2px] border-solid border-[#EDEDED] ml-[16px] mr-[16px]"></div>
            <div className="flex justify-center items-center pl-[12px] pr-[12px] pt-[8px] pb-[8px] border-[2px] border-solid border-[#EDEDED] rounded-[8px] mr-[16px] bg-white">
              <img
                src="assets/imgs/export.png"
                alt="export icon"
                className="w-[20px] h-[20px] mr-[8px]"
              />
              <div className="text-[14px] text-[#5F2EE5] font-bold">Expert</div>
            </div>
            <div className="relative">
              <div
                className="flex justify-center items-center w-[181px] h-[36px] bg-[#5F2EE5] rounded-[8px] cursor-pointer"
                onClick={(e) => handleDropdown(e)}
              >
                <img
                  src="assets/imgs/addIcon.png"
                  alt="add to project"
                  className="w-[20px] h-[20px] mr-[8px]"
                />
                <div className="text-[14px] text-white font-bold mr-[13px]">
                  Add to Project
                </div>
                <img
                  src="assets/imgs/Dropdown.png"
                  alt="dropdown icon"
                  className="w-[20px] h-[20px]"
                />
              </div>
              {showDropDown && (
                <div className="absolute left-0 top-[38px] w-full p-2 bg-white border-[2px] border-solid border-[#EDEDED] rounded-[8px] text-left">
                  <div className="text-[black] text-[14px] font-bold border-b-[1px] border-solid border-[#EDEDED]">
                    New LinkedIn Job
                  </div>
                  <div className="text-[black] text-[14px] font-bold border-b-[1px] border-solid border-[#EDEDED]">
                    New Upwork Job
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden flex items-center justify-center mt-2">
        <div className="relative">
          <div
            className="flex justify-center items-center w-[181px] h-[36px] bg-[#5F2EE5] rounded-[8px] cursor-pointer"
            onClick={(e) => handleDropdown(e)}
          >
            <img
              src="assets/imgs/addIcon.png"
              alt="add to project"
              className="w-[20px] h-[20px] mr-[8px]"
            />
            <div className="text-[14px] text-white font-bold mr-[13px]">
              Add to Project
            </div>
            <img
              src="assets/imgs/Dropdown.png"
              alt="dropdown icon"
              className="w-[20px] h-[20px]"
            />
          </div>
          {showDropDown && (
            <div className="absolute left-0 top-[38px] w-full p-2 bg-white border-[2px] border-solid border-[#EDEDED] rounded-[8px] text-left">
              <div className="text-[black] text-[14px] font-bold border-b-[1px] border-solid border-[#EDEDED]">
                New LinkedIn Job
              </div>
              <div className="text-[black] text-[14px] font-bold border-b-[1px] border-solid border-[#EDEDED]">
                New Upwork Job
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-center items-center pl-[12px] pr-[12px] pt-[8px] pb-[8px] border-[2px] border-solid border-[#EDEDED] rounded-[8px] ml-[16px]">
          <img
            src="assets/imgs/export.png"
            alt="export icon"
            className="w-[20px] h-[20px] mr-[8px]"
          />
          <div className="text-[14px] text-[#5F2EE5] font-bold">Expert</div>
        </div>
        <div className="h-full w-0 border-[2px] border-solid border-[#EDEDED] mr-[16px] ml-[16px]"></div>
        <img
          src="assets/imgs/fluent_filter-20-filled.png"
          alt="fluent_filter-20-filled.png"
          className="w-[36px] h-[36px]  border-[2px] border-solid border-[#EDEDED] rounded-[6px]"
        />
      </div>
      <div className="block md:hidden flex justify-start mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] mt-2">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-[24px] h-[24px] mr-[16px] text-blue-600 bg-gray-100 border-gray-300 rounded"
        />
        <label
          className="inline-block pl-[0.15rem] hover:cursor-pointer text-[#5F2EE5] font-bold"
          htmlFor="checkboxDefault"
        >
          Select All on Page
        </label>
      </div>
      <div className="mt-2">
        <PersonInfo person = {person}/>
        <PersonInfo person = {person}/>
        <PersonInfo person = {person}/>
        <PersonInfo person = {person}/>
        <PersonInfo person = {person}/>
        <PersonInfo person = {person}/>
      </div>
    </div>
  );
}

export default Content;
