import React from 'react';

const TopBar: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 w-full mx-auto">
      <div className='bg-gray-300 flex flex-row justify-between items-center p-4'>
        <h1 className='text-xl font-bold'>Topbar :D</h1>
        <div className='flex flex-row items-center gap-2'>
          <nav>
            <ul className='flex flex-row gap-4'>
              <li><a href="#subsection1" className='text-black hover:text-black-800'>Subsection 1</a></li>
              <li><a href="#subsection2" className='text-black hover:text-black-800'>Subsection 2</a></li>
              <li><a href="#subsection3" className='text-black hover:text-black-800'>Subsection 3</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TopBar;