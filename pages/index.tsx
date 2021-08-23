import Slider from '../components/Slider';
import Project from '../components/Project';
import Testimonial from '../components/Testimonial';

export default function Home() {
  return (
    <main>
      <Slider />
      <Project isFrontpage />
      <Testimonial />
    </main>
  )
}
