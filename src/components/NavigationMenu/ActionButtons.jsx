import React, { useState } from "react";
import { X, AlignJustify } from "lucide-react";
import { Link } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";

const ActionButtons = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <div
      className="
flex
items-center
md:justify-end
md:space-x-6
sm:px-10

">
      <div className="flex xl:space-x-6">
        <Link
          to={"/pricing"}
          className="
        xl:flex
        items-center
        hidden
        
        ">
          <div className="font-light flex">Pricing</div>
        </Link>

        <Link
          to={"/sign-in"}
          className="
        xl:flex
        items-center
        hidden
        
        ">
          <div className="font-light flex xl:w-12">Sign In</div>
        </Link>
      </div>

      <div className="flex lg:space-x-4 items-center">
        <Link to={"/free"}>
          <div
            className="
            hidden
            md:flex
            text-md
            font-light
            rounded-[40px]
            border-4
            border-indigo-400/90
            p-2
            bg-[#565add]
            hover:scale-110
            transition-all
            duration-300
            shadow-md
            hover:shadow-indigo-300
            w-40
            text-white
            ">
            Get Clove for Free
          </div>
        </Link>
        <Link to={"/contact"}>
          <button
            className="
          hidden
          text-[#565add]
          text-md
          font-light
          bg-[#eff0ff]
          p-2
            rounded-[40px]
            hover:scale-110
            transition-all
            duration-300
            shadow-md
            md:hidden
            lg:flex
            hover:shadow-indigo-300
            w-28
            ">
            Contact Sales
          </button>
        </Link>
      </div>

      {isDropdownVisible && (
        <button
          onClick={toggleDropdown}
          className="
         bg-[#565add]
         p-3
         rounded-full
         xl:hidden
         ">
          <X className="h-6 w-6 text-[#eff0ff] items-center justify-center rounded-full" />
        </button>
      )}
      {!isDropdownVisible && (
        <div
          onClick={toggleDropdown}
          className="bg-[#eff0ff] p-3 rounded-full xl:hidden">
          <AlignJustify className="h-6 w-6 text-[#565add] items-center justify-center rounded-full" />
        </div>
      )}

      {isDropdownVisible && <DropDownMenu onClose={closeDropdown} />}
    </div>
  );
};

export default ActionButtons;
