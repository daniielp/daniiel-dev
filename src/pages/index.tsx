import Slider from '../components/Tabs/Slider';
import Project from '../components/Project';
import { useEffect } from 'react';
import Testimonial from '../components/Testimonial';
import Faq from '../components/Faq';

export default function Home() {
  return (
    <main>
      <Slider />
      <Project isFrontpage />
      <Testimonial />
      <Faq />
    </main>
  )
}
