import React, { FC, useState } from "react";
interface DropDownnType {
  title: string;
  placeHolder: string;
  callback: () => void;
}
const DropDown: FC<DropDownnType> = (props) => {
  const { title, placeHolder, callback } = props;
  const [isDropDowned, setIsDropDowned] = useState<boolean>(false);
  const title1 = "View Filters For";
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
          <select
            id="countries"
            defaultValue="linkedin"
            className="pl-2 pr-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="linkedin">LinkedIn</option>
            <option value="US">LinkedIn</option>
            <option value="CA">LinkedIn</option>
            <option value="FR">LinkedIn</option>
            <option value="DE">LinkedIn</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default DropDown;
