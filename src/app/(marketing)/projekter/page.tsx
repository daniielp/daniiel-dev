import ProjectCard from '@/components/ProjectCard'
import { allProjects } from 'contentlayer/generated'

export default function BlogPage() {
  return <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Alle projekter</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Følg min rejse igennem frontend development og UI/UX design
        </p>
      </div>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {allProjects.filter(x => x.published).map((post) => (
          <ProjectCard title={post.title} href={post.slug} />
        ))}
      </div>
    </div>
  </div>
}