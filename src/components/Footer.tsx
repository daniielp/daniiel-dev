import React from 'react'

const navigation = {
    legal: [
        {name: 'Brugeraftale', href: "/policies/brugeraftale"},
        {name: 'Privatlivspolitik', href: "/policies/privatlivspolitik"},
        {name: 'Cookies', href: "/policies/cookies"},
        // {name: 'Cookie indstillinger', href: "#"}
    ]
}

const Footer = () => {
  return (
    <footer aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        {/* <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="text-base font-semibold leading-6 text-gray-900">Subscribe to our newsletter</h3>
            <p className="mt-2 text-base leading-6 text-gray-600">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
          </div>
          <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="w-full min-w-0 appearance-none rounded-md border-gray-300 bg-white px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:w-56 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <div className="mt-4 rounded-md sm:mt-0 sm:ml-4 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md bg-indigo-600 py-1.5 px-3 text-base font-semibold leading-7 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm sm:leading-6"
              >
                Send
              </button>
            </div>
          </form>
        </div> */}
        <div className="mt-8 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.legal.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="">{item.name}</span>
              </a>
            ))}
          </div>
          <p className="mt-8 text-base leading-5 text-gray-500 md:order-1 md:mt-0">
            &copy; {new Date().getFullYear()} Daniiel Pedersen. Alle rettigheder forbeholdes.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer