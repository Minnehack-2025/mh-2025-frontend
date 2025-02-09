import React from 'react';
import Image from 'next/image';
import Profile from '@/images/ss.png';
import styles from './topbar.module.css';

const TopBar: React.FC = () => {
  return (
    <div className={`${styles.topBar} flex flex-col gap-2 w-full mx-auto`}>
      <div className='bg-gray-300 flex flex-row justify-between items-center p-4'>
        <h1 className='text-xl font-bold'>TopBar</h1>
        <div className='flex flex-row items-center gap-2'>
          <div className='w-8 h-8'>
            <Image src={Profile} alt="TopBar" />
          </div>
          <nav>
            <ul className='flex flex-row gap-4'>
              <li><a href="#home" className='text-gray-700 hover:text-gray-900'>Home</a></li>
              <li><a href="#about" className='text-gray-700 hover:text-gray-900'>About</a></li>
              <li><a href="#contact" className='text-gray-700 hover:text-gray-900'>Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TopBar;