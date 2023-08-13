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
        <div className="mt-8 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.legal.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-500 hover:text-gray-600">
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