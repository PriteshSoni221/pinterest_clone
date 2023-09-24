import Image from "next/image";
import React from "react";
import { BiSearch, BiSolidBell } from "react-icons/bi";
import { AiFillMessage } from "react-icons/ai";

function Header() {
  return (
    <div className="flex">
      {/* logo */}
      <div className="hover:bg-gray-300 p-1 rounded-full flex items-center max-w-max gap-2">
        <Image src="/logo.png" alt="logo" width={25} height={25} />
        <div className="">Business</div>
      </div>
      <button>Create</button>
      <button>Analytics</button>
      {/* search button */}
      <div className="flex items-center gap-2 bg-[#e9e9e9] p-2 rounded-full">
        <BiSearch className="text-xl" />
        <input type="text" placeholder="Search" className="bg-[#e9e9e9]"/>
      </div>
      <BiSolidBell className="text-2xl" />
      <AiFillMessage color="gray" fontSize="1.5em"/>
      <Image
        src={"/man.png"}
        alt="profile"
        width={25}
        height={25}
        className="hover:bg-gray-300 p-1 rounded-full flex items-center"
      />
    </div>
  );
}

export default Header;
