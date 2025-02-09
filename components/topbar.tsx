import React from 'react';
import logo from '@/images/ss.png'
import Image from 'next/image';
import Link from 'next/link';

const TopBar: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 w-full mx-auto">
      <div className='bg-white-300 flex flex-row justify-between items-center p-4'> 
        <Link href='/'>
          <Image src={logo} alt="logo" className='w-10 rounded-full'/>
        </Link>
        <div className='flex flex-row items-center gap-2'>
          <nav>
            <ul className='flex flex-row gap-4'>
              <li><Link href="/" className='text-black hover:underline'>Discover</Link></li>
              <li><Link href="following" className='text-black hover:underline'>Following</Link></li>
              <li><Link href="profile" className='text-black hover:underline'>Profile</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TopBar;