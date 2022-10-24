import React from 'react'

export default function MoreInfo() {
  return (
    <div className='basis-3/12 bg-gray-200 text hidden md:flex flex-col'>
        <div className='px-2'>
          <div className='font-semibold text-2xl'>More For You:</div>
          <div className='px-2 w-full'>
            <div className='text-xl font-light'>Related Topics</div>
            <hr className='bg-slate-400 h-[2px] '/>
            <ul className='px-2 text-blue-600'>
              <li>
                <a href='#'>
                  Landscape
                </a>
              </li>
              <li>
                <a href='#'>
                  Mountains
                </a>
              </li>
              <li>
                <a href='#'>
                  Nature
                </a>
              </li>
            </ul>
          </div>
          <div className='px-2 w-full'>
            <div className='text-xl font-light'>Related People</div>
            <hr className='bg-slate-400 h-[2px] '/>
            <ul className='px-2 text-blue-600'>
              <li>
                <a href='#'>
                  Elon Musk
                </a>
              </li>
              <li>
                <a href='#'>
                  Jeff Bezos
                </a>
              </li>
              <li>
                <a href='#'>
                  Mark Zuckerberg
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-2 relative px-3'>
          <img src='/ad.jpg' className='object-cover'/>
          <div className='absolute bg-gray-100 bottom-1 left-4 text-sm'>
            Advertisement
          </div>
        </div>
    </div>
  )
}
