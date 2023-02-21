import React, { FC, useState } from "react";
import { Person } from "../types/Person";
interface DropDownnType {
  person?: Person;
  callback?: () => void;
}
const PersonInfo: FC<DropDownnType> = (props) => {
  const { person } = props;
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="border-[1px] border-solid border-[#EDEDED] rounded-[8px] mb-2 bg-white">
      <div className="flex flex-wrap w-full pt-[16px] pb-[16px] pl-[20px] pr-[20px] ">
        <div className="flex justify-end items-start w-[32px]">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-[24px] h-[24px] mr-[16px] text-blue-600 bg-gray-100 border-gray-300 rounded"
            defaultChecked={isChecked}
            onChange={(e)=>setIsChecked(e.target.checked)}
          />
        </div>
        <div className="w-[calc(100%-32px)]">
          <div className="w-full flex justify-between items-center">
            <div className="flex">
              <div className="text-[16px] font-bold mr-[9px]">
                {person?.name}
              </div>
              <img
                src="assets/imgs/linkedin-alt.png"
                alt="linkedin-alt"
                className="w-[24px] h-[24px] mr-[9px]"
              />
              <img
                src="assets/imgs/github.png"
                alt="github.png"
                className="w-[24px] h-[24px] mr-[9px]"
              />
              <img
                src="assets/imgs/bxl_upwork.png"
                alt="bxl_upwork"
                className="w-[24px] h-[24px]"
              />
            </div>
            <img
              src="assets/imgs/beacon.png"
              alt="beacon.png"
              className="hidden md:block w-[24px] h-[24px] mr-[48px]"
            />
          </div>
          <div className="text-[14px] text-left text-[#191632]">
            {person?.description}
          </div>
          <div className="flex justify-start items-center ">
            <div className="text-[12px] text-[#89888E] mr-[18px]">
              {person?.location}
            </div>
            <img
              src="assets/imgs/Phone.png"
              alt="Phone.png"
              className="w-[16px] h-[16px] mr-[12px]"
            />
            <img
              src="assets/imgs/mail.png"
              alt="mail.png"
              className="w-[16px] h-[16px]"
            />
          </div>

          <div className="hidden md:block">
            <hr className="mt-[12px] mb-[12px]" />
            {person && person?.experience.length > 0 && (
              <div className="relative w-full flex flex-wrap mb-[12px]">
                <div className="w-[92px] text-[12px] font-bold text-left">
                  Experience
                </div>
                <div className="w-[calc(100%-92px)]">
                  {person?.experience.map((experience, index) => (
                    <div key={index} className="flex justify-start items-center ">
                      <div className="w-[10px] h-[10px] bg-[#D9D9D9] rounded-[50%] mr-[12px] border-white border-solid border-[1px]" />
                      <div className="h-[16px] text-[12px] text-[#191632]">
                        {experience}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="absolute left-[97px] top-[12px] h-[12px] w-[1px] bg-[#D9D9D9]"></div>
              </div>
            )}
            {person && person?.education.length > 0 && (
              <div className="relative w-full flex flex-wrap">
                <div className="w-[92px] text-[12px] font-bold text-left">
                  Education
                </div>
                <div className="w-[calc(100%-92px)]">
                  {person?.education.map((education, index) => (
                    <div key={index} className="flex justify-start items-center ">
                      <div className="w-[10px] h-[10px] bg-[#D9D9D9] rounded-[50%] mr-[12px] border-white border-solid border-[1px]" />
                      <div className="h-[16px] text-[12px] text-[#191632]">
                        {education}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="absolute left-[97px] top-[12px] h-[12px] w-[1px] bg-[#D9D9D9]"></div>
              </div>
            )}
          </div>
          <div className="block md:hidden rounded-[8px] bg-[#F9FAFB] pl-[16px] pt-[12px] pr-[16px] pb-[12px] text-left">
            <div className="text-[12px] font-bold text-[#191632]">
              {person?.mobDescription}
            </div>
            <div className="text-[12px] text-[#191632] leading-[20px]">
              {person?.mobDetail}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-center items-center w-full h-[44px] cursor-pointer">
        <div className="flex justify-center items-center h-[20px] ">
          <span className="text-[14px] text-[#5F2EE5] font-bold">
            Show more
          </span>
          <img
            src="assets/imgs/arrowRight.png"
            alt="arrowRight.png"
            className="h-[20px] w-[20px]"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonInfo;
