import Slider from '../components/Slider';
import Project from '../components/Project';
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
