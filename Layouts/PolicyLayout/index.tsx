import Header from './Header'
import Footer from './Footer'

export default function index(props: any) {
    return (
        <>
            <Header />
                {props.children}
            <Footer />
        </>
    )
}
