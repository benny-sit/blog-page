import React from "react";
import {IoPersonCircleOutline, IoThumbsUpOutline, IoHeartOutline, IoChatbubbleEllipsesOutline, IoEllipsisVertical } from 'react-icons/io5';

export default function Post() {
  return (
    <div className="w-full shadow-md border-b-2 my-4 overflow-hidden max-w-full group ">
      <div className="flex justify-center relative bg-gray-50 overflow-hidden">
        <img src="/landscape.jpg" className="object-cover max-h-[32rem] group-hover:scale-110 transform-gpu transition-all duration-500" />
        <div className="absolute bottom-3 left-4 text-3xl bg-white text-black rounded-md p-2 min-w-[12rem] max-w-[75%] truncate hover:whitespace-normal hover:p-4 hover:text-clip hover:flex-wrap ">
          Traveling to the unknown today forever bla bla bla title
        </div>
      </div>
      <div className="p-4 border-l-2 z-10">
        <div className="m-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
          labore officiis adipisci voluptatem aliquid! Mollitia deserunt labore
          nostrum harum quam ut ratione repellendus, earum similique nam dolor
          aliquid tenetur tempore. Corrupti omnis saepe, tempore quibusdam
          deserunt alias aspernatur sed, sint suscipit illum tempora itaque
          commodi enim nemo? Fugiat veniam ipsa incidunt molestias totam a
          excepturi, aperiam dolore eos voluptatibus voluptatum hic odit neque
          quaerat tempora, cum cumque est qui? Sint voluptates rem similique
          obcaecati harum laudantium dignissimos esse? Esse eum dicta doloremque
          facilis numquam, optio at eligendi inventore architecto eveniet
          dolorem necessitatibus rerum tenetur fugiat nobis voluptas ab dolor
          consequuntur?
        </div>
        <hr/>
        <div className="my-2 flex items-center">
            <div className="flex items-center">
            <img src='/npc.jpg' className="rounded-full h-12 w-12" />
            <span className="mx-2 font-light text-slate-500 text-lg">John Doe</span>
            </div>
            <div className="grow flex justify-end gap-2 items-center">
                <IoChatbubbleEllipsesOutline className="h-5 w-5"/>
                <IoHeartOutline className="h-6 w-6"/>
                <IoEllipsisVertical className="h-6 w-6"/>
            </div>
        </div>
      </div>
    </div>
  );
}
