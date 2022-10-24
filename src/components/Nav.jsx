import React from "react";
import {
  IoHomeOutline,
  IoPersonOutline,
  IoPeopleOutline,
  IoChatboxOutline,
  IoLogInOutline,
  IoSearchSharp,
} from "react-icons/io5";

export default function NavBlog() {
  return (
    <header className="z-50">
      <nav className="w-screen pl-5 flex bg-gray-100 items-center shadow-md">
        <div className="text-4xl px-4 py-2 text-slate-700"><a href="#">Blog</a></div>
        <ul className="flex gap-7 ml-4 items-center grow ">
          <li className="group bg-transparent active-nav p-1  border-b-2 max-w-fit w-fit ">
            <a href="#" className="nav-a-tag  ">
              <IoHomeOutline className="nav-icons" />
              <span className="w-fit max-w-0 transition-all duration-500 ease-linear group-hover:max-w-[100px] overflow-hidden">
                Home
              </span>
            </a>
          </li>
          <li className="p-1 border-transparent border-b-2 group">
            <a href="#" className="nav-a-tag ">
              <IoPersonOutline className="nav-icons" />
              <span className="w-fit max-w-0 transition-all duration-500 ease-linear group-hover:max-w-[100px] overflow-hidden">
                Profile
              </span>
            </a>
          </li>
          <li className="p-1 border-transparent border-b-2 group">
            <a href="#" className="nav-a-tag ">
              <IoPeopleOutline className="nav-icons" />
              <span className="w-fit max-w-0 transition-all duration-500 ease-linear group-hover:max-w-[100px] overflow-hidden">
                Friends
              </span>
            </a>
          </li>
          <li className="p-1 border-transparent border-b-2  group">
            <a href="#" className="nav-a-tag">
              <IoChatboxOutline className="nav-icons" />
              <span className="w-fit max-w-0 transition-all duration-500 ease-linear group-hover:max-w-[100px] overflow-hidden">
                Messages
              </span>
            </a>
          </li>
          <li className="grow items-center hidden md:flex justify-between px-3 py-[3px] bg-slate-200/75 rounded-l-md">
            <label className="relative block">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <IoSearchSharp className="fill-slate-400" />
              </span>
              <input
                className="placeholder:italic placeholder:text-slate-400 block w-1/2 hover:w-full transition-all bg-gray-50  rounded-md py-1 pl-9 pr-3  shadow-sm focus:w-full focus:outline-none focus:ring-blue-300 focus:ring-1 sm:text-sm"
                placeholder="Search..."
                type="text"
                name="search"
                autoComplete="off"
              />
            </label>
            <a
              href="#"
              className="nav-a-tag bg-slate-400/75 text-gray-100 rounded-l-md px-1"
            >
              <IoLogInOutline className="nav-icons" />
              <span className="">Login</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
