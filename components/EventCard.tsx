import Image from 'next/image';
import React from 'react'
import Profile from '@/images/ss.png'
import Background from '@/images/bg.png'

interface EventCardPrompts {
  name?: string;
  time?: string;
  friendsArray?: string;
}

const EventCard: React.FC<EventCardPrompts> = ( ) => {
  const friendsArray = [Profile, Profile, Profile];

  return (
    <div className='flex flex-col gap-2 w-[70vw] mx-auto'>
      <div className='bg-cover flex flex-col justify-between h-[40vw]'
        style={{ backgroundImage: `linear-gradient(to top, rgba(31, 31, 31, 0.8), transparent), url(${Background.src})`}}
      >
        <div className='flex flex-row items-center gap-2 m-2 bg-yellow-400 w-fit px-2 py-1 rounded-full'>
          <div className='w-8 h-8'>
            <Image src={Profile} alt="Profile Picture" className='rounded-full'></Image>
          </div>
          <p>Name</p>
        </div>

        <div className='flex flex-row gap-2 m-2'>
          <div className='flex flex-row gap-1'>
            {friendsArray.map((friend, index) => {
              return (
                <div className='w-6 h-6 rounded-full' key={index}>
                  <Image src={friend} alt="Profile Picture" className='rounded-full'></Image>
                </div>
              );
            })}
          </div>
          <p className='text-gray-100'>are going</p>
        </div>
      </div>

      <div>
        <p className='font-bold text-lg'>Title</p>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row gap-4'>
            <p className='text-gray-500'>Sat, Feb 8 · 1pm</p>
          </div>
          <p className='text-gray-500'>Location</p>
        </div>
      </div>      
    </div>
  )
}

export default EventCard;