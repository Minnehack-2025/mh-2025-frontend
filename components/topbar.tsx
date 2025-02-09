import React from 'react';
import logo from '@/images/ss.png'
import Image from 'next/image';
import Link from 'next/link';

const TopBar: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 w-[90vw] md:w-[70vw] mx-auto">
      <div className='bg-white-300 flex flex-row justify-between items-center p-2'> 
        <Link href='/'>
          <Image src={logo} alt="logo" className='w-10 rounded-full'/>
        </Link>
        <div className='flex flex-row items-center gap-2'>
          <nav className='flex flex-row gap-4'>
            <Link href="/" className='text-black text-sm hover:underline'>Discover</Link>
            <Link href="community" className='text-black text-sm hover:underline'>Community</Link>
            <Link href="profile" className='text-black text-sm hover:underline'>Profile</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TopBar;