import Slider from '../components/Slider';
import Project from '../components/Project';

export default function Home() {
  return (
    <main>
      <Slider />
      <Project isFrontpage />
    </main>
  )
}
