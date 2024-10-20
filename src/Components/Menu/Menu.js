import React from 'react';
import './Menu.css'; // External CSS file

function Menu() {
    return (
        <div className="menu-container">
            <ul className="menu-item menu-section">
                <p>Icons</p>
                <li>Air Force 1</li>
                <li>Huarache</li>
                <li>Air Max 90</li>
                <li>Air Max 95</li>
                <li>Air Max 97</li>
                <li>Air Max 270</li>
                <li>Air Max 720</li>
                <li>All Air Max</li>
            </ul>
            <ul className="menu-item menu-section-second">
                <p>Shoes</p>
                <li>All Shoes</li>
                <li>Custom Shoes</li>
                <li>Jordan Shoes</li>
                <li>Running Shoes</li>
                <li>Basketball Shoes</li>
                <li>Football Shoes</li>
                <li>Gym & Training Shoes</li>
                <li>Lifestyle Shoes</li>
            </ul>
            <ul className="menu-item menu-section-third">
                <p>Clothing</p>
                <li>All Clothing</li>
                <li>Modest Wear</li>
                <li>Hoodies & Pullovers</li>
                <li>Shirts & Tops</li>
                <li>Jackets</li>
                <li>Compression & Nike Pro</li>
                <li>Trousers & Leggings</li>
                <li>Shorts</li>
            </ul>
            <ul className="menu-item menu-section-fourth">
                <p>Kids'</p>
                <li>Infant & Toddler Shoes</li>
                <li>Kids' Shoes</li>
                <li>Kids' Jordan Shoes</li>
                <li>Kids' Basketball Shoes</li>
                <li>Kids' Running Shoes</li>
                <li>Kids' Clothing</li>
                <li>Kids' Backpacks</li>
                <li>Kids' Socks</li>
            </ul>
        </div>
    );
}

export default Menu;
