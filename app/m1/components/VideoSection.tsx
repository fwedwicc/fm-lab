
'use client'

import { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const VIDEO_SRC = '/videos/animo-test.mp4'

export default function VideoSection() {
  const container = useRef<HTMLDivElement>(null)
  const video = useRef<HTMLVideoElement>(null)
  const [blobSrc, setBlobSrc] = useState<string | null>(null)

  // Preload full video into memory so seeks during scrub are instant
  // (no network/decoder stalls, which is what caused the stutter).
  useEffect(() => {
    let url: string | null = null
    let cancelled = false

    fetch(VIDEO_SRC)
      .then((res) => res.blob())
      .then((blob) => {
        if (cancelled) return
        url = URL.createObjectURL(blob)
        setBlobSrc(url)
      })

    return () => {
      cancelled = true
      if (url) URL.revokeObjectURL(url)
    }
  }, [])

  useGSAP(
    () => {
      const videoElement = video.current

      if (!videoElement || !blobSrc) return

      const target = { time: 0 }

      const setupScroll = () => {
        gsap.to(target, {
          time: videoElement.duration,
          ease: 'none',
          onUpdate: () => {
            videoElement.currentTime = target.time
          },

          scrollTrigger: {
            trigger: container.current,
            start: 'top top',
            end: '+=3000',
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        })

        ScrollTrigger.refresh()
      }

      if (videoElement.readyState >= 1) {
        setupScroll()
      } else {
        videoElement.addEventListener('loadedmetadata', setupScroll, {
          once: true,
        })
      }

      return () => {
        videoElement.removeEventListener('loadedmetadata', setupScroll)
      }
    },
    { scope: container, dependencies: [blobSrc] }
  )

  return (
    <section
      ref={container}
      className="relative h-screen overflow-hidden"
    >
      <video
        ref={video}
        className="absolute inset-0 h-full w-full object-cover"
        muted
        playsInline
        preload="auto"
        src={blobSrc ?? undefined}
      >
        {!blobSrc && <source src={VIDEO_SRC} type="video/mp4" />}
      </video>
    </section>
  )
}
