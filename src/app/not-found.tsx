import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { BookOpenIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const links = [
  { title: 'Projekter', href: "/#projects", description: 'Learn how to integrate our tools with your app', icon: BookOpenIcon },
  { title: 'Github', href: "https://github.com/shorcy/daniiel-dev", description: 'A complete API reference for our libraries', icon: CodeBracketIcon },
  // { title: 'Guides', description: 'Installation guides that cover popular setups', icon: BookmarkSquareIcon },
  // { title: 'Blog', description: 'Read our latest news and articles', icon: RssIcon },
]


export default function Error() {
  return (
    <div>
      <main className="mx-auto w-full max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-xl py-16 sm:py-24">
          <div className="text-center">
            <p className="text-base font-semibold text-indigo-600">404</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Denne side findes ikke
            </h1>
            <p className="mt-2 text-lg text-gray-500">Det lader til den pågælende side du prøver at finde ikke eksistere.</p>
          </div>
          <div className="mt-12">
            <h2 className="text-base font-semibold text-gray-500">Populære sider</h2>
            <ul role="list" className="mt-4 divide-y divide-gray-200 border-t border-b border-gray-200">
              {links.map((link, linkIdx) => (
                <li key={linkIdx} className="relative flex items-start space-x-4 py-6">
                  <div className="flex-shrink-0">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50">
                      <link.icon className="h-6 w-6 text-indigo-700" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-medium text-gray-900">
                      <span className="rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2">
                        <a href={link.href} className="focus:outline-none">
                          <span className="absolute inset-0" aria-hidden="true" />
                          {link.title}
                        </a>
                      </span>
                    </h3>
                    <p className="text-base text-gray-500">{link.description}</p>
                  </div>
                  <div className="flex-shrink-0 self-center">
                    <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/" className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                Gå til forsiden
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
