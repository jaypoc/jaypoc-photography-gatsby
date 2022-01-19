import * as React from 'react'
import { siteFooter, siteFooterBody } from './footer.module.css'

const Footer = () => {
    return (
            <footer className={siteFooter}>
                <div className={siteFooterBody}>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm">
                                All the content and images appearing on this <br/>
                                site, except when otherwise credited, are <br />
                                Copyright &copy; 1995-2022 Jason Bauman. <br /> 
                                All rights reserved.
                            </div>
                            <div class="col-sm">2</div>
                            <div class="col-sm ">FB / IG Logos</div>
                        </div>
                    </div>
                   
                </div>
            </footer>        
    )
}

export default Footer
