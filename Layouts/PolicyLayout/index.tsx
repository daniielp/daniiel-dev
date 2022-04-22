import Header from './Header'
import Footer from './Footer'
import CookieConsent from '../../components/CookieConsent'

export default function index(props: any) {
    return (
        <>
            <Header />
                {props.children}
            <Footer />
            <CookieConsent />
        </>
    )
}
