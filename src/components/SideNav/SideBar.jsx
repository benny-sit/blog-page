import React from "react";
import {
  IoHeartOutline,
  IoPeopleCircleOutline,
  IoShareOutline,
  IoChevronForwardSharp,
} from "react-icons/io5";
import OnlineFriends from "./OnlineFriends";

export default function SideBar() {
  return (
    <div className="md:basis-2/12 bg-slate-50 flex absolute md:justify-center md:relative md:z-10 h-full translate-x-[calc(-100%+1rem)] hover:translate-x-0 md:translate-x-0">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center mt-3">
          <img
            src="/npc.jpg"
            className="rounded-full h-24 w-24 shadow-lg"
            alt="profile"
          />
          <span className="text-slate-600">John Doe</span>
          <div className="flex mt-3 flex-col xl:flex-row gap-2 justify-evenly w-full">
            <div className="flex items-center justify-center ">
              <IoHeartOutline />
              <span className="text-gray-500 ml-1">752</span>
            </div>
            <div className="flex items-center justify-center ">
              <IoPeopleCircleOutline />
              <span className="text-gray-500 ml-1">342</span>
            </div>
            <div className="flex items-center justify-center ">
              <IoShareOutline />
              <span className="text-gray-500 ml-1">102</span>
            </div>
          </div>
        </div>
        <OnlineFriends />
      </div>
      <div className="h-full flex md:hidden items-center basis-0 bg-slate-300">
        <IoChevronForwardSharp className="h-4 w-4" />
      </div>
    </div>
  );
}
