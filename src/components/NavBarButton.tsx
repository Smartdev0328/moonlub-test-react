import React, {FC} from "react";

const NavBarButton: FC<any> = ({children}) => {
    return (
        <div className="flex items-center justify-center w-[126px] h-[38px] text-[14px] not-italic font-bold bg-[#F3F4F6] hover:bg-[#5F2EE5] text-[#89888E] hover:text-white rounded-[4px] cursor-pointer">
            {children}
        </div>
    )
} 

export default NavBarButton;