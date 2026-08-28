'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function Hero() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
      })
    },
    { scope: container }
  )

  return (
    <section
      ref={container}
      className="flex h-screen items-center justify-center"
    >
      <h1 className="hero-title text-6xl font-bold">
        Motion 01
      </h1>
    </section>
  )
}
