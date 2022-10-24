import React from 'react'
import Post from './Post'

export default function Feed() {
  return (
    <div className='md:basis-7/12 overflow-y-auto px-5 scrollbar'>
        <Post />
        <Post />
        <Post />
    </div>
  )
}
