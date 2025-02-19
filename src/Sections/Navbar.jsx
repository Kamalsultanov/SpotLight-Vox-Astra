import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='w-full absolute top-0 right-0 z-30'>
      <ul className='flex items-center font-victor-medium text-xl w-full'>
        <li className='item-nav'><Link to="/listen" className='hover-underline-animation'>Listen</Link></li>
        <li className='item-nav'><Link to="/stories" className='hover-underline-animation'>Stories</Link></li>
        <li className='item-nav'><Link to="/help" className='hover-underline-animation'>Help</Link></li>
        <li className='item-nav'><Link to="/donate" className='hover-underline-animation'>Donate</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
