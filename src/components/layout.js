import * as React from 'react'
import './resets.css'
import SiteHeader from './header.js'


const Layout = ({ pageTitle, children }) => {
    return (
        <main>
            <SiteHeader></SiteHeader>
            <h1>{pageTitle}</h1>
            {children}     
        </main>
    ) 
}

export default Layout
