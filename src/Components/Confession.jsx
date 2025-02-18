import { Html } from '@react-three/drei'
import React from 'react'

const Confession = () => {
  return (
      <Html as='div' className='confess-tab bg-transparent border border-gray-400 p-3 rounded-md'>
          <p className='font-victor-regular'>
              <span>"</span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              <span>"</span>
          </p>
    </Html>
  )
}

export default Confession