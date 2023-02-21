import React, { FC, useState } from "react";
interface DropdownTextAreaType {
  title: string;
  placeHolder: string;
  callback: () => void;
}
const DropdownTextArea: FC<DropdownTextAreaType> = (props) => {
  const { title, placeHolder, callback } = props;
  const [isDropDowned, setIsDropDowned] = useState<boolean>(false);
  const handleDropDown = () => {
    setIsDropDowned(!isDropDowned);
  };
  return (
    <div className="w-[410px] p-[16px] border-[2px] border-solid border-[#EDEDED] rounded-[8px] mb-2">
      <div className="flex items-center h-[40px] w-hull">
        <p className="h-[24px] text-[#5F2EE5] text-[16px] font-bold whitespace-nowrap">
          {title}
        </p>
        <hr className="w-[100%]" />
        <img
          src={isDropDowned ? "assets/imgs/down.png" : "assets/imgs/dropup.png"}
          alt="drop up"
          onClick={(e) => handleDropDown()}
        />
      </div>
      {!isDropDowned && (
        <div className="pt-3 pb-3">
          <textarea
            className="w-full p-[12px] h-[80px] resize-none rounded-md text-[14px] border-[1px] border-solid border-[#EDEDED]"
            placeholder={placeHolder}
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default DropdownTextArea;
