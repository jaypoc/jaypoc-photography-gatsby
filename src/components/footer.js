import * as React from 'react'
import { siteFooter, siteFooterBody } from './footer.module.css'

const Footer = () => {
    return (
            <footer className={siteFooter}>
                <div className={siteFooterBody}>
                   All the content and images appearing on this<br/>
                   site, except when otherwise credited, are<br />
                   Copyright &copy; 1995-2022 Jason Bauman.<br /> 
                   All rights reserved.
                </div>
            </footer>        
    )
}

export default Footer
