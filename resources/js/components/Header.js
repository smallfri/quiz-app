//creates the header for the page

import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <nav className='navbar navbar-expand-md navbar-light navbar-laravel'>
        <div className='container'>
            <Link className='navbar-brand' to='/resume'>Russell's Resume</Link>
            <Link className='navbar-brand' to='/questions'>Learn more about Russell</Link>
        </div>
    </nav>
)

export default Header
