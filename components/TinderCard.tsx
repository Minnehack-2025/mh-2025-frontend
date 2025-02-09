import Image from 'next/image';
import React from 'react'
import Profile from '@/images/ss.png'
import Background from '@/images/bg.png'
// import { Button } from "@/components/ui/button"

interface TinderCardProps {
  name?: string;
  time?: string;
  friendsArray?: string;
  onClick?: () => void;
}

const TinderCard: React.FC<TinderCardProps> = ({ onClick } ) => {
  const friendsArray = [Profile, Profile, Profile];

  return (
    <div className='w-[90vw] md:w-[70vw] mx-auto'>
    <div className='flex flex-col gap-2' onClick={onClick}>
      <div className='bg-cover bg-center flex flex-col justify-between h-[90vw] max-h-[50vh] w-auto rounded-xl'
        style={{ backgroundImage: `linear-gradient(to top, rgba(31, 31, 31, 0.8), transparent), url(${Background.src})`}}
      >
         <div className='flex justify-between items-start p-4'>
            <div className='flex flex-row items-center gap-2 bg-white bg-clip-padding bg-opacity-60 backdrop-filter backdrop-blur w-fit px-2 py-1 rounded-full'>
              <div className='w-8 h-8'>
                <Image src={Profile} alt="Profile Picture" className='rounded-full'></Image>
              </div>
              <p>Name</p>
            </div>

            {/* <Button onClick={onClick}>
              View details
            </Button> */}
         </div>

        <div className='flex flex-row gap-2 m-4'>
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
        <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ac facilisis tincidunt, arcu lectus venenatis libero, a efficitur libero ligula sed libero.</p>
      
       
      </div>      
    </div>
    </div>
  )
}

export default TinderCard;