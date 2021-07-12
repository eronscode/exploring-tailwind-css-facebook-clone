import React from "react";
import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <div className='sticky flex top-0 z-50 bg-white items-center p-2 shadow-md lg:px-5'>
      <div className='flex item-center'>
        <Image src={"/images/fb.png"} width={40} height={40} alt='logo' />
        <div className='flex ml-2 items-center rounded-full bg-gray-100'>
          <SearchIcon className='h-6 ml-2 text-gray-600' />
          <input
            className='ml-2 items-center hidden md:inline-flex bg-transparent outline-none placeholder-gray-500'
            type='text'
            placeholder='Search Facebook'
          />
        </div>
      </div>

      <div className="flex justify-center flex-grow">
          <div className="flex space-x-6 md:space-x-2">
              <HeaderIcon Icon={HomeIcon} />
              <HeaderIcon Icon={FlagIcon} />
              <HeaderIcon Icon={PlayIcon} />
              <HeaderIcon Icon={ShoppingCartIcon} />
              <HeaderIcon Icon={UserGroupIcon} />
          </div>
      </div>
      <div className="flex items-center sm:space-x-2 justify-end">
        <p className="whitespace-nowrap font-semibold pr-3"> Dev Ose</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon"/>
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon"/>
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Header;
