import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark px-3 justify-content-start">
                <Link className="navbar-brand text-warning" to="">Blog App (Arun Goril)</Link>
                <Link className='nav-link text-primary text-white mx-3' to="/">Home</Link>
                <Link className='nav-link text-primary text-white mx-3' to="/posts">Posts</Link>
            </nav>
        </div>
    )
}

export default Navbar