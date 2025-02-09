import Image from 'next/image';
import React from 'react'
import Profile from '@/images/ss.png'

interface EventCardPrompts {
  name?: string;
  time?: string;
  friendsArray?: string;
}

const EventCard: React.FC<EventCardPrompts> = ( ) => {
  const friendsArray = [Profile, Profile, Profile];

  return (
    <div className='flex flex-col gap-2 w-[348px] mx-auto'>
      <div className='bg-gray-300 flex flex-col justify-between h-[176px]'>
        <div className='flex flex-row items-center gap-2 m-2'>
          <div className='w-8 h-8'>
            <Image src={Profile} alt="Profile Picture"></Image>
          </div>
          <p>Name</p>
        </div>

        <div className='flex flex-row gap-2 m-2'>
          <div className='flex flex-row gap-1'>
            {friendsArray.map((friend, index) => {
              return (
                <div className='w-6 h-6' key={index}>
                  <Image src={friend} alt="Profile Picture"></Image>
                </div>
              );
            })}
          </div>
          <p>are going</p>
        </div>
      </div>

      <div>
        <h4>Title</h4>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row gap-4'>
            <p>Sat, Feb 8</p>
            <div className='flex flex-row gap-1 items-center'>
              <div className='w-3 h-3 bg-gray-400 rounded-full'></div>
              <p>1pm</p>
            </div>
          </div>
          <p>Location</p>
        </div>
      </div>      
    </div>
  )
}

export default EventCard;