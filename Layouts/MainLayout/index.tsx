import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import CookieConsent from '../../components/CookieConsent'

function index(props: any) {
    return (
        <React.Fragment>
            <Header />
            <div id="main-content">
                {props.children}
            </div>
            <Footer />
            <CookieConsent />
        </React.Fragment>
    )
}

export default index
