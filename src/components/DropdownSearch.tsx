import React, { FC, useState } from "react";
interface DropdownSearchType {
  title: string;
  placeHolder: string;
  callback: () => void;
}
const DropdownSearch: FC<DropdownSearchType> = (props) => {
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
          <div className="flex">
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg rounded-l-lg rounded border-[1px] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos, Design Templates..."
                required
              />
              <button
                type="submit"
                className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
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
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownSearch;
