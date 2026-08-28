
'use client'

import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import SmoothScroll from './components/SmoothScroll'

export default function M1() {
  return (
    <SmoothScroll>
      <main>
        <Hero />
        <VideoSection />
        <section className="flex h-screen items-center justify-center"> <h2 className="text-6xl font-bold"> End </h2> </section>
      </main>
    </SmoothScroll>
  )
}
