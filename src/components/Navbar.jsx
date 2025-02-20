import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            Navbar
            <li>
                <Link to={"/"}>Home</Link>
                <Link to={"/login"}>LogIn</Link>
            </li>
        </div>
    )
}

export default Navbar