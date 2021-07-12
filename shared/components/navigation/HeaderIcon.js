import React from "react";

function HeaderIcon({ Icon, active }) {
  return (
    <div className='flex items-center md:px-10 sm:h-14 md:hover:bg-gray-100 md:dark:hover:bg-gray-500 rounded-xl active:border-b-2 active:border-blue-500 cursor-pointer  group'>
      <Icon className={`h-5 text-gray-500 dark:text-white text-center sm:h-7 mx-auto group-hover:text-blue-500 dark:group-hover:text-blue-200 ${active && 'text-blue-500'}`} />
    </div>
  );
}

export default HeaderIcon;
