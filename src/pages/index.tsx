import dynamic from 'next/dynamic'
import Slider from '../components/Tabs/Slider';
import Project from '../components/Project';
import { useEffect } from 'react';

const DynamicTestimonial = dynamic(() => import('../components/Testimonial'), {
  ssr: false,
})

const DynamicFaq = dynamic(() => import('../components/Faq'), {
  ssr: false,
})

export default function Home() {
  return (
    <main>
      <Slider />
      <Project isFrontpage />
      <DynamicTestimonial />
      <DynamicFaq />
    </main>
  )
}
