import React, { FC, useState } from "react";
interface DropdownNormalSearchType {
  title: string;
  placeHolder: string;
  callback: () => void;
}
const DropdownNormalSearch: FC<DropdownNormalSearchType> = (props) => {
  const { title } = props;
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
          <div className="relative w-full">
            <input
              type="search"
              className="relative m-0 block w-[100%] min-w-0 bg-gray-50 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownNormalSearch;
