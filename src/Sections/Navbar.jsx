import React from 'react';

const Navbar = () => {
  return (
    <nav className='w-full absolute top-0 right-0 z-30'>
      <ul className='flex items-center font-victor-medium text-xl w-full'>
        <li className='item-nav'><a href="/listen" className='hover-underline-animation'>Listen</a></li>
        <li className='item-nav'><a href="/stories" className='hover-underline-animation'>Stories</a></li>
        <li className='item-nav'><a href="/help" className='hover-underline-animation'>Help</a></li>
        <li className='item-nav'><a href="/donate" className='hover-underline-animation'>Donate</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
