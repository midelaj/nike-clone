import React from 'react'
import DropDown from './DropDown'
import nike from '../../assets/images/nike.svg'
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import './NavBar.css'
import { Search } from 'lucide-react';

function NavBar() {
    const headers = ["New & Featured", "Men", "Women", "Kids", "Sale", "Customize", "SNKRS"]
    return (
        <div className='navbar'>
            <img className='nike' src={nike} alt="" />
            <div className='drod_down'>
                {headers.map((head) => (
                    <DropDown key={head} name={head} />
                ))}
            </div>
            <div className='navbar_right'>
                <div className="search-container">
                    <Search className="search-icon" size={24} />
                    <input
                        type="text"
                        placeholder="Search"
                        className="search-input"
                    />
                </div>
                <div className="icons">
                    <span className='heart'><FaRegHeart size={24} /></span>
                    <span className='bag'><IoBagOutline size={24} /></span>
                </div>

            </div>
        </div>
    )
}

export default NavBar
