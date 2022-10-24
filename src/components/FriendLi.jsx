import React from 'react'

export default function FriendLi({online, profilePic, name}) {
  return (
    <div className={`relative border-l-8 px-1 flex items-center ${online ? 'border-lime-500' : 'border-gray-500'}`}>
            <img src={`/${profilePic}.jpg`} className='w-8 h-8 object-contain rounded-r-lg'/>
            <span className='text-gray-500 ml-2'>{name}</span>
    </div>
  )
}
