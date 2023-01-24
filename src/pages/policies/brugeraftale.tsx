import { NextPage } from 'next'
import React from 'react'

const Brugeraftale: NextPage = () => {
    return (
        <div className="relative overflow-hidden bg-white py-16">
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-prose text-lg">
                    <h1>
                        <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                            Brugeraftale
                        </span>
                    </h1>
                    <p className="mt-8 text-xl leading-8 text-gray-500">
                        Denne hjemmeside tilhører Daniel Bøgh Pedersen. Denne privatlivspolitik informerer personer, som besøger og anvender hjemmesiden daniiel.dev («Tjenesten»).
                    </p>
                </div>
                <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
                    <h2>Dit ansvar</h2>
                    <p>
                        Som bruger af daniiel.dev tjeneste er du ansvarlig for, at alle informationer, som du giver til daniiel.dev, er korrekte. Du er også ansvarlig for, at din brug af daniiel.dev tjenester ikke er i strid med disse vilkår og gældende ret.
                    </p>
                    <h2>Ansvarsfraskrivelse</h2>
                    <p>
                        Daniiel.dev er ikke ansvarlig for tab, der skyldes IT-nedbrud eller ødelæggelse af data i forbindelse med lovindgreb eller forvaltningsakter, hacking, computervirus, sabotage, naturkatastrofer, uroligheder, terror, hærværk, strejke, blokade, boykot eller andre forhold, der uden for daniiel.dev kontrol.
                    </p>
                    <h2>Lovvalg og værneting</h2>
                    <p>
                        Disse vilkår og betingelser er underlagt dansk ret, og alle uoverensstemmelser, der måtte opstå i forbindelse med fortolkningen af Vilkårene eller brugen af daniiel.dev hjemmeside, Tjenesten og andre ydelser skal afgøres i overensstemmelse med dansk ret og ved byretten i København.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Brugeraftale