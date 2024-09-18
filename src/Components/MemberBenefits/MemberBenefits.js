import React from 'react';
import './MemberBenefits.css';
import MemberDetails from './MemberDetails';

function importAllImages(r) {
    return r.keys().map(r);
}

const images = importAllImages(require.context('./assets', false, /\.(png|jpg)$/));

function MemberBenefits() {
    return (
        <div className='member-card-container'>
            {images.map((image, index) => (
                <div className='member-cards' key={index}>  {/* Key moved here */}
                    <img className={`member-card-image ${index === 0 ? 'first-image' : ''}`} src={image} alt="" />
                        <p className='member-title'>{MemberDetails[index]?.title}</p>
                        <p className='member-heading'>{MemberDetails[index]?.heading}</p>
                        <button className='member-btn'>{MemberDetails[index]?.button}</button>
                </div>
            ))}
        </div>
    );
}

export default MemberBenefits;
