import { siteConfig } from '@/config/site'
import type { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const Privatlivspolitik: NextPage = () => {

    return (
        <div className="relative overflow-hidden bg-white py-16">
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-prose text-lg">
                    <h1>
                        <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                            Privatlivspolitik
                        </span>
                    </h1>
                    <p className="mt-8 text-xl leading-8 text-gray-500">
                        Denne hjemmeside tilhører Daniel Bøgh Pedersen. Denne privatlivspolitik informerer personer, som besøger og anvender hjemmesiden daniiel.dev («Tjenesten»).

                    </p>
                    <p className='mt-8 text-xl leading-8 text-gray-500'>
                        Bemærk at denne privatlivspolitik ikke dækker behandling af personoplysninger.
                    </p>
                </div>
                <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
                    <h2>Databehandling i en nøddeskal</h2>
                    <p>
                        Når du besøger Tjenesten, indsamler vi fx personoplysninger om dig, når du begynder at udfylde information i en webformular, når du abonnerer på nyhedsbreve, når du deltager i markedsføringskampagner eller udfylder spørgeskemaer, eller når du kontakter vores support.
                    </p>
                    <p>
                        Vi behandler personoplysninger, som du selv afgiver, når du udfylder en webformular, eller for eksempel via abonnement på nyhedsbreve.
                    </p>
                    <p>Vi behandler personoplysninger om dig, når vi yder support, udsender kommunikation eller markedsføringsmateriale.</p>
                    <p>I al behandling af personoplysninger om dig respekterer vi din ret til databeskyttelse. Vi behandler kun oplysninger, som kan henføres til dig, når det er nødvendigt for at kunne varetage formålet med behandlingen.</p>
                    <h2>Hvem behandler personoplysninger om dig?</h2>
                    <p>
                        daniiel.dev er dataansvarlig og behandler personoplysninger om dig, når du bruger Tjenesten eller services, som tilbydes af daniiel.dev
                    </p>
                    <h2>Hvem kan du kontakte om databeskyttelse?</h2>
                    <p>
                        Hvis du har spørgsmål om databeskyttelse, eller du vil bruge dine rettigheder (se nedenfor), beder vi dig kontakte:

                        Daniel Bøgh Pedersen på <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
                    </p>
                    <h2>Hvilke typer af personoplysninger behandler vi om dig?</h2>
                    <p>Teknisk information sendt til og fra din browser til vores server (IP-adresse, browser, lokation, sprog) og information om tracking f.eks. cookies sendt til browseren, f.eks. hvilket website besøgende kommer fra, hvilken browser du anvender og hvornår og hvilke dele af Tjenesten du har besøgt, klager, feedback og eventuel anden kommunikation og handlinger over for daniiel.dev.</p>
                    <p>Permission til direkte markedsføring og frameldelser fra samme, hvis du tilmelder dig elektroniske nyhedsbreve og teknisk information om brug af og information indhentet fra målrettede markedsføringstiltag.</p>
                    <h2>På hvilke juridiske grundlag behandler jeg/vi personoplysninger om dig?</h2>
                    <p>Vi behandler personoplysninger baseret på vores legitime interesser, som udspringer af brugen af Tjenesten, jf. artikel 6, stk. 1, litra f, i Databeskyttelsesforordningen. Vores legitime interesser er f.eks.</p>
                    <ul role="list">
                        <li>at sende dig elektroniske nyhedsbreve, når du har tilmeldt dig nyhedsbrevene.</li>
                        <li>at lave brugertilfredshedsundersøgelser.</li>
                    </ul>
                    <p>Samtykke til tracking via cookies (samtykke indhentes via pop-up på Tjenesten), jf. § 4 om samtykke i Bekendtgørelse 2011-12-09 nr. 1148 om krav til information og samtykke ved lagring af eller adgang til oplysninger i slutbrugeres terminaludstyr. Du kan når som helst tilbagekalde samtykket til behandling af tracking og cookies ved at slette cookies i dit system som beskrevet i vores cookie-politik, som du finder <Link href="/policies/cookies">her</Link>.</p>
                    <h2>Hvor længe beholder vi personoplysninger om dig?</h2>
                    <p>Vi opbevarer personoplysninger, så længe det er nødvendig for at varetage formålene, herunder at overholde lovbestemte forpligtelser til behandling af personoplysninger.</p>
                    <p>Som regel opbevarer vi personoplysningerne i 2 år.</p>
                    <h2>Hvilke rettigheder har du?</h2>
                    <p>Hvis du vil udnytte dine rettigheder, som er oplistet nedenfor, beder vi dig skrive en e-mail til: dp@daniiel.dev*</p>
                    <p>*Bemærk at lovgivningen indeholder en række undtagelser til de rettigheder, der er oplistet nedenfor.</p>
                    <h3>Ret til indsigt</h3>
                    <p>Du har ret til at få en bekræftelse fra os på, om vi behandler personoplysninger om dig. Du har også ret til at få indsigt i personoplysninger om dig og information om behandling af personoplysninger om dig.</p>
                    <p>Hvis du udnytter din indsigtsret, vil vi give dig en kopi af de personoplysninger, som vi behandler om dig. Hvis du beder om flere kopier, kan opkræve et rimeligt gebyr baseret på vores administrative omkostninger.</p>
                    <h3>Ret til berigtigelse</h3>
                    <p>Du har ret til at få urigtige personoplysninger om dig berigtiget af den dataansvarlige uden unødig forsinkelse. Du har også under hensyntagen til formålene med behandlingen ret til få fuldstændiggjort ufuldstændige personoplysninger, bl.a. ved at fremlægge en supplerende erklæring.</p>
                    <h3>Ret til at bede os om at slette personoplysninger</h3>
                    <p>Du har ret til at bede om at få slettet personoplysninger om dig uden unødig forsinkelse, hvis:</p>
                    <ul role="list">
                        <li>Personoplysningerne er ikke længere nødvendige til at opfylde de formål, hvortil de blev indsamlet eller på anden vis behandlet.</li>
                        <li>Du trækker dit samtykke, som behandlingen er baseret på, tilbage, og der er ingen andre retsgrundlag for behandlingen af oplysningerne.</li>
                        <li>Du gør indsigelse mod behandlingen af grunde, der vedrører din særlige situation, og der foreligger ikke legitime grunde til behandlingen, som går forud for indsigelsen, eller du gør indsigelse mod behandlingen til direkte markedsføringsformål.</li>
                        <li>Vi har behandlet personoplysninger om dig ulovligt, eller personoplysninger skal slettes for at overholde gældende lovgivning, som vi er underlagt.</li>
                    </ul>
                    <h3>Ret til at begrænse behandlingen af personoplysninger</h3>
                    <p>Du har ret til, at vi begrænser behandlingen af personoplysninger om dig, hvis:</p>
                    <ul role="list">
                        <li>Du selv bestrider rigtigheden af personoplysningerne, i perioden indtil vi har haft mulighed for at fastslå, om personoplysningerne er korrekte.</li>
                        <li>Vi behandler personoplysninger om dig ulovlig, og du modsætter sig sletning af personoplysningerne og i stedet anmoder om, at anvendelse heraf begrænses.</li>
                        <li>vi ikke længere har brug for personoplysningerne til behandlingen, men de er nødvendige for, at et retskrav kan fastlægges, gøres gældende eller forsvares; eller du har gjort indsigelse mod behandlingen af personoplysninger om dig på grundlag af din personlige situation, i perioden hvor det kontrolleres, om vores legitime interesser går forud for dine legitime interesser.</li>
                    </ul>
                    <p>Hvis behandlingen begrænses, må personoplysninger om dig kun behandles med dit samtykke eller med henblik på, at retskrav kan fastlægges, gøres gældende eller forsvares eller for at beskytte en anden fysisk eller juridisk person eller af hensyn til EU’s eller en EU-medlemsstats vigtige samfundsmæssige interesser. Vi underretter dig, inden begrænsningen af behandlingen.</p>
                    <h3>Ret til dataportabilitet</h3>
                    <p>Du har ret til at modtage personoplysninger om dig i et struktureret, almindelig anvendt og maskinlæsbart format, og ret til at overføre denne information til en anden dataansvarlig uden hindring fra os, hvis:</p>
                    <ul role="list">
                        <li>Behandlingen er baseret på dit samtykke eller er nødvendig for at forberede eller gennemføre en kontrakt mellem os, og behandlingen foretages automatisk.</li>
                    </ul>
                    <p>Retten til dataportabilitet må ikke krænke andres rettigheder eller frihedsrettigheder.</p>
                    <h3>Retten til at gøre indsigelse mod behandlingen af personoplysninger</h3>
                    <p>Du har ret til - af grunde, der vedrører din særlige situation - at gøre indsigelse mod behandling af personoplysninger, hvor hjemmelen er vores legitime interesser, som angivet ovenfor. Vi må derefter ikke længere behandle personoplysningerne, medmindre vi påviser vægtige, legitime grunde til behandlingen, der går forud for dine interesser, rettigheder og frihedsrettigheder, eller behandlingen er nødvendig for, at retskrav kan fastlægges, gøres gældende eller forsvares.</p>
                    <p>Hvis personoplysninger behandles med henblik på direkte markedsføring, har du til enhver tid ret til at gøre indsigelse mod behandlingen af personoplysninger om dig til sådan markedsføring, herunder at gøre indsigelse mod profilering i det omfang den vedrører direkte markedsføring. Hvis du gør indsigelse mod behandling med henblik på direkte markedsføring, må personoplysningerne ikke længere behandles til dette formål.</p>
                    <p>Du kan selv framelde dig elektronisk direkte markedsføring ved at følge frameldingsmetoden eller ved at klikke på frameldingslinket («Afmeld» sk."«Unsubscribe») i de modtagne meddelelser.</p>
                    <h3>Ret til at klage til Datatilsynet</h3>
                    <p>Du har ret til at klage til Datatilsynet, hvis du oplever, at personoplysninger om dig behandles i strid med dine rettigheder efter databeskyttelsesreglerne.</p>
                    <h3>Ret til at gøre indsigelse mod automatisk individuel beslutningstagning</h3>
                    <p>Registrerede har ret til menneskelig indgriben fra den dataansvarliges side og til at komme med sine synspunkter og til at bestride afgørelsen.</p>
                    <h2>Hvorfra indsamler vi personoplysninger om dig?</h2>
                    <p>Personoplysningerne bliver for det meste indhentet direkte fra dig, når du besøger og bruger vores hjemmeside, f.eks. ved at bruge og udfylde ansøgningsskemaet og andre webformularer og tjenester.</p>
                    <h2>Hvordan sikrer vi at datbeskyttelsen for den enkelte varetages ved behandling af personoplysninger?</h2>
                    <p>Vores behandling af dine personoplysninger er nødvendig for, at vi kan forfølge vores legitime interesse i at markedsføre vores tjenester til dig, og vi har vurderet, at dine interesser eller grundlæggende rettigheder og frihedsrettigheder ikke går forud for denne legitime interesse, jf. databeskyttelsesforordningens artikel 6, stk. 1, litra f.</p>
                    <p>Du har ret til at gøre indsigelse mod behandlingen: Du har ret til at – af grunde, der vedrører din særlige situation – at gøre indsigelse mod behandling af personoplysninger, hvor hjemlen er artikel 6, stk. 1, litra e) eller f), herunder profilering baseret på disse bestemmelser. daniiel.dev må derefter ikke længere behandle personoplysningerne, medmindre daniiel.dev påviser vægtige legitime grunde til behandlingen, der går forud for dine interesser, rettigheder og frihedsrettigheder, eller behandlingen er nødvendig for, at retskrav kan fastlægges, gøres gældende eller forsvares.</p>
                    <p>Hvis personoplysninger behandles med henblik på direkte markedsføring, har du til enhver tid ret til at gøre indsigelse mod behandlingen af dine personoplysninger til sådan markedsføring, herunder at gøre indsigelse mod profilering, i det omfang den vedrører direkte markedsføring. Hvis du gør indsigelse mod behandling med henblik på direkte markedsføring, må personoplysningerne ikke længere behandles til dette formål.</p>
                </div>
            </div>
        </div>
    )
}

export default Privatlivspolitik