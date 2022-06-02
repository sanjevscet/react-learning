import React from 'react'
import { Link } from 'react-router-dom'

export const NavComponent = () => {
    return (
        <ol>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/error-boundry">Error Boundry</Link></li>
            <li>
                <Link to="/user">User</Link>
                <ul>
                <li><Link to="/user/account">Account</Link></li>
                <li><Link to="/user/profile">Profile</Link></li>

                </ul>
            </li>
        </ol>
    )
}
