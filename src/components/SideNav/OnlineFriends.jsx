import React from 'react'
import FriendLi from '../FriendLi'

export default function OnlineFriends() {
  return (
    <div className='mt-6 px-2'>
        <span className='text-xl '>Online Friends</span>
        <hr className='mb-1'/>

        <ul className='flex flex-col gap-1'>
            <li>
                <FriendLi online={true} name={'George Costanza'} profilePic={'npc'} />
            </li>
            <li>
                <FriendLi online={true} name={'Goofy'} profilePic={'npc2'} />
            </li>
            <li>
                <FriendLi online={true} name={'The Rock '} profilePic={'npc3'} />
            </li>
            <li>
                <FriendLi online={true} name={'Jerry Sainfeld'} profilePic={'npc4'} />
            </li>
            <li>
                <FriendLi online={true} name={'Charles Dickens'} profilePic={'npc5'} />
            </li>
        </ul>
    </div>
  )
}
