import { useState } from 'react'
import {Link} from "react-router-dom";

function LayoutDashBoard({children}) {

    return (
        <>
            <header>
                <nav>
                    <ul style={{display: 'flex', listStyle: 'none'}}>
                        <li style={{margin:'0px 13px'}}><Link to='/'>Home</Link></li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li style={{margin:'0 0 0 13px'}}><Link to='/dashboard/product-list'>Dashboard Product Page</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer>Footer Dashboard</footer>
        </>
    )
}

export default LayoutDashBoard