import Header from './Header'
import Footer from './Footer'
import CookieConsent from '../../components/CookieConsent'
import { ScriptProps } from 'next/script'

export default function index(props: ScriptProps) {
    return (
        <>
            <Header />
                {props.children}
            <Footer />
            <CookieConsent />
        </>
    )
}
