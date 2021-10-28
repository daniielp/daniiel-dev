import React from 'react'
import Header from './Header'
import Footer from './Footer'

function index(props: any) {
    return (
        <React.Fragment>
            <Header />
            {props.children}
            <Footer />
        </React.Fragment>
    )
}

export default index
