import * as React from 'react'
import { Link } from 'gatsby'
import { siteHeader, siteHeaderBody, nav, navLink } from './header.module.css'

const SiteHeader = () => {
    return (
            <header className={siteHeader}>
                <div className={siteHeaderBody}>
                    <a href="#" class="brand"><img src="https://jaypoc.photography/wp-content/uploads/sites/4/2018/12/cropped-Jaypoc_Watermark_White-e1545969369376-4.png" alt="brand" /></a>
                    <nav class={nav}>
                        <Link to="/" className={navLink}>Home</Link>
                        <Link to="/about" className={navLink}>About</Link>
                        <Link to="/photography" className={navLink}>Photography</Link>
                        <Link to="/resources" className={navLink}>Resources</Link>
                        <Link to="/contact" className={navLink}>Contact</Link>
                    </nav>
                </div>
            </header>        
    )
}

export default SiteHeader
