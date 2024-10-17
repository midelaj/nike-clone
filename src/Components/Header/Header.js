import React from 'react'
import jordanLogo from '../../assets/images/jordan.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <div className="header">
                <img className='logo' src={jordanLogo} alt="" />

                <ul className='menu'>
                    <li><a href="">Find a Store</a></li>
                    <li><a href="">Help</a></li>
                    <li><a href="">Join Us</a></li>
                    <li><Link to='/signin'>Sign In</Link></li>

                </ul>
            </div>
        </div>
    )
}

export default NavBar
