import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Chair = (props) => {
const { nodes, materials } = useGLTF('/assets/Chair.glb')
  return (
    <group {...props} dispose={null}>
    <group >
      <mesh
        receiveShadow
        geometry={nodes.metal_chair_metal_chair_0.geometry}
        material={materials.metal_chair}
      />
    </group>
  </group>
  )
}

useGLTF.preload('/assets/Chair.glb')

export default Chair



