import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { NewspaperIcon, PhoneIcon, WindowIcon } from '@heroicons/react/24/outline'
import Image from "next/image"

const supportLinks = [
    {
      name: 'UI/UX',
      href: '#',
      description:
        'UI/UX er vigtigt at tænke over hvordan brugerne vil interagere med siden og hvordan man kan gøre det så brugervenligt som muligt. UI (User Interface) beskæftiger sig med designet og layoutet af hjemmesiden, mens UX (User Experience) beskæftiger sig med hvordan brugerne oplever og interagerer med siden.',
      icon: NewspaperIcon,
    },
    {
      name: 'Development',
      href: '#',
      description:
        'En udvikler som jeg med erfaring i både frontend og backend development (fullstack) giver flere fordele. Det giver mulighed for at skræddersy funktionaliteten og sikre en god brugervenlighed. Derudover sikrer jeg dig et højt kvalitet produkt med mine mere end 7 års praktisk erfaring, og 3 års erhverserafring.',
      icon: WindowIcon,
    },
    {
      name: 'Analytics',
      href: '#',
      description:
        'Hvordan skal man kunne optimere sin side uden data? Det er der analytics software som Google Analytics kommer ind i billedet. Der har jeg blandt andet arbejdet med at måle på de ting der giver mening for ens virksomhed. Alt fra interaktioner til hvilke devices brugerne befinder sig på.',
      icon: NewspaperIcon,
    },
  ]

const About = () => {
    return (
        <div>
          {/* Header */}
          <div className="relative bg-gray-800 pb-32" id="about">
            <div className="absolute inset-0">
              <Image className="h-full w-full object-cover" src="/images/overlay-about.jpg" alt="overlay about" fill />
              <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
            </div>
            <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">Udvikler med høje ambitioner</h1>
              <p className="mt-6 max-w-3xl text-xl text-gray-300">
              At hjælpe små og mellemstore virksomheder med at oprette en skræddersyet hjemmeside, der passer til jeres online tilstedeværelse, er en vigtig service for mig. Ved at tilbyde en hjemmeside, der er kodet fra bunden, kan du sikre at hjemmesiden er unik og tilpasset til din virksomhedens specifikke behov og ønsker. Det kan også hjælpe med at øge brugervenligheden og øge sandsynligheden for at brugere vil vende tilbage til jer.
              </p>
            </div>
          </div>
    
          {/* Overlapping cards */}
          <section className="relative z-10 mx-auto -mt-32 max-w-7xl px-6 pb-32 lg:px-8" aria-labelledby="contact-heading">
            <h2 className="sr-only" id="contact-heading">
              Om mig
            </h2>
            <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
              {supportLinks.map((link) => (
                <div key={link.name} className="flex flex-col rounded-2xl bg-white shadow-xl">
                  <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                    <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 p-5 shadow-lg">
                      <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                    <p className="mt-4 text-base text-gray-500">{link.description}</p>
                  </div>
                  <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                    <a href={link.href} className="text-base flex content-center items-center font-medium text-indigo-700 hover:text-indigo-600">
                      Har du brug for hjælp? Tag kontakt<span aria-hidden="true"> <ChevronRightIcon className="ml-2 h-5 w-5" aria-hidden="true" /></span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )
}

export default About