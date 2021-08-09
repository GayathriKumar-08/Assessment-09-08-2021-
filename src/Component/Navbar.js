import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
        <nav class="navbar navbar-expand-sm">
         <ul className="nav navbar-nav">
            <li className="active">
            <Link to='/dashboard' className="linktag">Home</Link>
            </li>
            <li className="active">
            <Link to='/createacc' className="linktag">Create account</Link>
            </li>
            <li className="active">
            <Link to='/accview' className="linktag">Account List</Link>
            </li>
            <li className="active">
            <Link to='/login' className="linktag">Logout</Link>
            </li>
        </ul>
        </nav>
        </div>
    )
}
