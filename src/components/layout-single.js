import * as React from 'react'
import './resets.css'
import Header from './header.js'
import Footer from './footer.js'

const LayoutSingle = ({ children }) => {
    return (
        <div class="site-container">
            <Header></Header>
            <main>
                {children}     
            </main>
            <Footer></Footer>
        </div>
    ) 
}

export default LayoutSingle
