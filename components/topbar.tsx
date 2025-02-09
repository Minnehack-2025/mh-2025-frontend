"use client"

import React from 'react';
import logo from '../public/logo/sqrt.svg'
import Image from 'next/image';
import Link from 'next/link';
import { Switch } from './ui/switch';
import { useRouter } from 'next/navigation';
import { useNav } from './NavContext';

const TopBar: React.FC = () => {
  const router = useRouter();
  const { isUser, setIsUser } = useNav();

  const handleSwitch = () => {
    setIsUser(!isUser);
    if (isUser) {
      router.push('discover')
    } else {
      router.push('event-lists')
    }
  }

  return (
    <div className="flex flex-col gap-2 w-[90vw] md:w-[70vw] mx-auto">
      <div className='bg-white-300 flex flex-row justify-between items-center p-2'> 
        <Link href='/'>
          <Image src={logo} alt="logo" className='w-10 rounded-full'/>
        </Link>
        <div className='flex flex-row items-center gap-2'>
          { isUser ? (
            <nav className='flex flex-row gap-4 border border-gray-200 py-3 px-4 rounded-full'>
              <Link href="/" className='text-black text-sm hover:underline'>Discover</Link>
              <Link href="community" className='text-black text-sm hover:underline'>Community</Link>
              <Link href="profile" className='text-black text-sm hover:underline'>Profile</Link>
            </nav> ) : (
              <nav className='flex flex-row gap-4 border border-gray-200 py-3 px-4 rounded-full'>
                <Link href="event-lists" className='text-black text-sm hover:underline'>My events</Link>
                <Link href="insight" className='text-black text-sm hover:underline'>Insights</Link>
                <Link href="profile" className='text-black text-sm hover:underline'>Profile</Link>
              </nav>
          )}
          <div className='flex flex-row items-center gap-2 pl-1'>
            <p className='text-sm'>Creator</p>
            <Switch onCheckedChange={handleSwitch}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;