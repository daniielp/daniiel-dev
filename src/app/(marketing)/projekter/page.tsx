import { formatDate } from '@/lib/utils'
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
          <article key={post._id} className="flex max-w-xl flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
              {/* <time dateTime={post.date} className="text-gray-500">
                {formatDate(post.date)}
              </time> */}
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href={post.slug}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
}