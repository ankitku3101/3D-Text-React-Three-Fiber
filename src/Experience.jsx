import { Center, OrbitControls, useMatcapTexture } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Text3D } from '@react-three/drei'
import * as THREE from 'three'
import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const torusGeometry = new THREE.TorusGeometry(1, 0.6, 16, 32)
const material = new THREE.MeshMatcapMaterial()


export default function Experience() {

  const donuts = useRef([])
  const [ matCapTexture ] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256)

  useEffect(() => {

    matCapTexture.encoding = THREE.sRGBEncoding
    matCapTexture.needsUpdate = true

    material.matcap = matCapTexture
    material.needsUpdate = true
  }, [])

  useFrame((state, delta) => {
    for(const donut of donuts.current)
    {
      donut.rotation.y += delta * 0.1
    }
  })


  return <>
    <Perf position ="top-left" />

    <OrbitControls makeDefault />
  
    <Center>
      <Text3D font="./fonts/Montserrat_Bold.json">
        DEVSOC
        <meshMatcapMaterial matcap={ matCapTexture }/>
      </Text3D>
    </Center>

      { [...Array(100)].map((value, index) =>
        <mesh
          ref={ (element) => donuts.current[index] = element }
          key={ index }
          position={ [
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          ]}
          scale={ 0.2 + Math.random() * 0.2 }
          rotation={ [
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            0
          ]}
        >
          <torusGeometry />
          <meshMatcapMaterial matcap= { matCapTexture } />
        </mesh>
      )}
  </>
}
