import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function DropDown(props) {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/menu')
    }
    return (
        < div className='dropdown-container' onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <a href="#" onClick={handleNavigate}>{props.name}</a>
            {isOpen && (
                <div className="dropdown-content">
                    {/* <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a> */}
                </div>
            )}
        </div >
    )
}

export default DropDown
