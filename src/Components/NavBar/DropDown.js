import React, { useState } from 'react'

function DropDown(props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        < div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <a href="">{props.name}</a>
            {isOpen && (
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            )}
        </div >
    )
}

export default DropDown
