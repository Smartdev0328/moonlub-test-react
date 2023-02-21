import React from "react";
import NavBarButton from "../components/NavBarButton";

function Header() {
  return (
    <div className="Header border-[1px] border-solid border-[#EDEDED]">
      <div className="flex justify-between p-4">
        <div className="flex flex-wrap">
          <div className="w-[84px] h-[32px] text-[24px] font-[Silka] not-italic text-[#191632] font-bold mr-[24px]">
            Search
          </div>
          <div className="hidden md:block w-[800px]">
            <div className="flex flex-wrap justify-start w-full">
              <NavBarButton>
                Candidates
              </NavBarButton>
              <NavBarButton>
                Project
              </NavBarButton>
              <NavBarButton>
                Lists
              </NavBarButton>
              <NavBarButton>
                Integretions
              </NavBarButton>
              <NavBarButton>
                Company
              </NavBarButton>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="hidden md:block w-[93px] height-[36px]">
            <div className="flex w-full h-full items-center justify-center  rounded-[8px] border-[1px] border-solid border-[#EDEDED] text-[#5F2EE5] font-bold text-[14px] hover:bg-[#5F2EE5] hover:text-white cursor-pointer">
              Feedback
            </div>
          </div>
          <div className="hidden md:block h-full w-0 border-[1px] border-solid border-[#EDEDED] ml-[24px] mr-[24px]"></div>
          <div className="flex flex-wrap justify-around items-center w-[50px] md:w-[168px] h-[36px]">
            <img
              src="assets/imgs/avatar.jpg"
              alt="avatar"
              className="w-[28px] md:w-[36px] border-[1px] border-solid border-[#EDEDED] rounded-[50%]"
            />
            <div className="hidden md:block w-[88px] h-[30px]">
              <div className="text-[12px] font-bold">Esther Howard</div>
              <div className="text-[10px]">easter@gmail.com</div>
            </div>
            <img
              src="assets/imgs/Vector.png"
              alt="dropdown"
              className="w-[14px] ml-1"
            />
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <div className="flex justify-start">
          <div className="flex flex-wrap justify-center w-full">
          <NavBarButton>
                Candidates
              </NavBarButton>
              <NavBarButton>
                Project
              </NavBarButton>
              <NavBarButton>
                Lists
              </NavBarButton>
              <NavBarButton>
                Integretions
              </NavBarButton>
              <NavBarButton>
                Company
              </NavBarButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
