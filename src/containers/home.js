import React from 'react'
import { Link } from 'react-router'

export const Home = ({ children }) => (
    <div>
        <header>
        Links:
        {' '}
        <Link to="/">Home</Link>
        {' '}
        <Link to="/about">About</Link>
        </header>
        <div>
            {children}
        </div>
    </div>
)
