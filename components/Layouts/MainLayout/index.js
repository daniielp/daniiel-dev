import React from 'react'
import Header from './Header'

function index(props) {
    return (
        <React.Fragment>
            <Header />
            {props.children}
        </React.Fragment>
    )
}

export default index
