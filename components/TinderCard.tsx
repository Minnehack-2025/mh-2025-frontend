import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Profile from '@/images/ss.png'
// import { Button } from "@/components/ui/button"

interface TinderCardProps {
  name: string;
  time: string;
  location: string;
  description?: string;
  image?: number;
  friendsArray?: string;
  onClick?: () => void;
}

const TinderCard: React.FC<TinderCardProps> = ({ name, time, location, description, image } ) => {
  const friendsArray = [Profile, Profile, Profile];
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    if (image == null) {
      setImageURL(`https://api.connectionhub.me/uploads/3`)
    } else {
      setImageURL(`https://api.connectionhub.me/uploads/${image}`)
    }
  }, [image])
  
  function formatEventTime(isoString: string) {
    if (!isoString) return "Invalid Date"; // Handle missing or undefined time
  
    const date = new Date(isoString);
  
    if (isNaN(date.getTime())) return "Invalid Date"; // Handle invalid date
  
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
  
    return new Intl.DateTimeFormat("en-US", options).format(date).replace(":00", "");
  }

  return (
    <div className='w-[90vw] md:w-[70vw] mx-auto'>
    <div className='flex flex-col gap-2'>
      <div className='bg-cover bg-center flex flex-col justify-between h-[90vw] max-h-[50vh] w-auto rounded-xl'
        style={{ backgroundImage: `linear-gradient(to top, rgba(31, 31, 31, 0.8), transparent), url(${imageURL})`}}
      >
         <div className='flex justify-between items-start p-4'>
            <div className='flex flex-row items-center gap-2 bg-white bg-clip-padding bg-opacity-60 backdrop-filter backdrop-blur w-fit px-2 py-1 rounded-full'>
              <div className='w-8 h-8'>
                <Image src={Profile} alt="Profile Picture" className='rounded-full'></Image>
              </div>
              <p>Name</p>
            </div>
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
        <p className='font-bold text-lg'>{name}</p>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row gap-4'>
            <p className='text-gray-500'>{formatEventTime(time)}</p>
          </div>
          <p className='text-gray-500'>{location}</p>
        </div>
        <p className='pt-4'>{description}</p>
      
       
      </div>      
    </div>
    </div>
  )
}

export default TinderCard;