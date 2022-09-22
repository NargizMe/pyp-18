import { useState } from 'react'
import {Link} from 'react-router-dom';

function LayoutWeb({children}) {

    return (
        <>
            <header>
                <nav>
                    <ul style={{display: 'flex', listStyle: 'none'}}>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li style={{margin:'0px 13px'}}><Link to='/'>Home</Link></li>
                        <li style={{margin:'0px 13px'}}><Link to='/contact'>Contact Page</Link></li>
                        <li><Link to='/about'>About Page</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer>Footer Web</footer>
        </>
    )
}

export default LayoutWeb