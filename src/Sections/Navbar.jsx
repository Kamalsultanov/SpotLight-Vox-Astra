import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full mx-auto absolute top-0 border-2 bg-black flex justify-center items-center' >
          <ul className='flex  items-center  font-victor-medium text-xl w-full '>
              <li className='item-nav'><a href="">Learn</a></li>
              <li className='item-nav'><a href="">Listen</a></li>
              <li className='item-nav'><a href="">Help</a></li>
              <li className=' item-nav-2'><a href="">Donate</a></li>
        </ul>
    </nav>
  )
}

export default Navbar