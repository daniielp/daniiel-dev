import Image from 'next/image'
import React from 'react'

const Daniiel = () => {
    return (
        <div className="relative isolate overflow-hidden py-24 sm:py-32" id="daniiel">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hvorfor hedder min side Dan<span className='text-indigo-500'>ii</span>el?</h2>
                    <p className="mt-6 text-xl leading-8 text-gray-700">
                        Du sidder sikkert og tænker. Læste jeg korrekt? Det kan da ikke passe hans navn staves med 2 i’er. Det helt korte svar er at det ikke staves med 2 i’er.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
                    <div className="relative lg:order-last lg:col-span-5">
                        <figure className="pl-8">
                            <Image className='rounded-full' src="/images/daniiel-avatar.jpg" height={400} width={250} alt="profile photo of daniiel in vector graphic" />
                            <figcaption aria-describedby='author-description' className="mt-8 flex gap-x-4">
                                <p id="author-description" className='sr-only'></p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
                        <p>
                        Men det ville der ikke være noget sjovt i. Så derfor får du her historien bag daniiel. Du har sikkert prøvet det før, at have en gammelt tastatur, og den ikke altid skriver præcis det samme som du trykkede. Enten ved at den direkte springer bogstaver over eller som i mit tilfælde - at den skriver dobbelt. Det resulterede så tidernes morgen at diverse sociale medier blev oprettet med et ekstra bogstav. Som der gik et godt stykke tid før jeg rent faktisk fandt ud af det. Men nu hvor det er så svært at finde et navn og domaine, som ikke er brugt i forvejen. Det tænkte jeg så ville være lidt komisk, at ens brand stammede fra en stavefejl 😅
                        </p>
                    </div>
                </div>
            </div>
        </div>
        // <div>
        //     <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:flex lg:justify-between lg:px-8" >
        //         <div className="max-w-xl">
        //             <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">Hvorfor hedder min side Dan<span className='text-indigo-500'>ii</span>el?</h2>
        //             <p className='mt-5 text-lg text-gray-500 font-bold'>Du sidder sikkert og tænker. Læste jeg korrekt? Det kan da ikke passe hans navn staves med 2 i’er. Det helt korte svar er at det ikke staves med 2 i’er.</p>
        //             <p className="mt-5 text-base text-gray-500">
        //                 Men det ville der ikke være noget sjovt i. Så derfor får du her historien bag daniiel. Du har sikkert prøvet det før, at have en gammelt tastatur, og den ikke altid skriver præcis det samme som du trykkede. Enten ved at den direkte springer bogstaver over eller som i mit tilfælde - at den skriver dobbelt. Det resulterede så tidernes morgen at diverse sociale medier blev oprettet med et ekstra bogstav. Som der gik et godt stykke tid før jeg rent faktisk fandt ud af det. Men nu hvor det er så svært at finde et navn og domaine, som ikke er brugt i forvejen. Det tænkte jeg så ville være lidt komisk, at ens brand stammede fra en stavefejl 😅
        //             </p>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Daniiel