"use client";

import { View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
// import {Perf} from "r3f-perf"
import dynamic from "next/dynamic";


const Loader = dynamic(()=> import("@react-three/drei").then((mod)=> mod.Loader), {
  ssr: false
}
)
 



type Props = {}

export default function ViewCanvas({ }: Props) {
  return (
    <>
    <Canvas
    style={{
      position: "fixed",
      top:0,
      left:"50%",
      transform:"translate(-50%)",
      overflow:"hidden",
      pointerEvents: "none",
      zIndex: 30,
    }}
    shadows
    dpr={[1, 1.5]}
    gl={{antialias: true}}
    camera={{
      fov: 30,

    }}
    >
      <Suspense fallback={null} >

  <View.Port />
      </Suspense>

    </Canvas>
    <Loader />
      </>
  )
}