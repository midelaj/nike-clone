import React, { useState, useEffect } from 'react';
import './Banner.css';
import { motion, AnimatePresence } from 'framer-motion';

const advertisements = [
    {
        id: 1,
        title: "Move, Shop, Customise & Celebrate With Us",
        description: "No matter what you feel like doing today, it's better as a Member.",
        linkText: "Join Us",
        link: "#",
        linkClass: "link_style"
    },
    {
        id: 2,
        title: "New Styles On Sale: Up To 40% Off",
        description: "",
        linkText: "Shop All Our New Markdowns",
        link: "#",
        className:"ad_2"

    },
];

function Banner() {
    const [currentAdIndex, setCurrentAdIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(false); // Begin exiting
            setTimeout(() => {
                setCurrentAdIndex((prevIndex) => (prevIndex + 1) % advertisements.length); // Switch to next ad
                setIsAnimating(true); // Start animating the new ad in
            }, 1000); // Time it takes for the ad to slide out
        }, 3000); // Change every 4 seconds (includes pause)

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [currentAdIndex]);

    const currentAd = advertisements[currentAdIndex];

    const variants = {
        enter: {
            x: "100%", // Start outside from the right
            opacity: 0,
        },
        center: {
            x: 0, // Center position
            opacity: 1,
            transition: {
                duration: 1, // Duration for sliding in
            },
        },
        exit: {
            x: "-100%", // Exit to the left
            opacity: 0,
            transition: {
                duration: 1, // Duration for sliding out
            },
        },
    };

    return (
        <div className="banner_container">
            <AnimatePresence>
                {/* Wrapping the animated element in AnimatePresence */}
                <motion.div
                    key={currentAd.id} // Ensures new animation each time
                    initial="enter"
                    animate="center"
                    exit="exit"
                    variants={variants}
                    style={{
                        position: "absolute", // Keeps it on top of each other
                        width: "100%", // Ensure it takes full width
                    }}
                >
                <div div className={`banner ${currentAd.className} ${!currentAd.description ? 'no-description' : ''}`}>
                    <span className="banner_title">{currentAd.title}</span>
                    {currentAd.description && <p className='banner_description'>{currentAd.description}</p>}
                    <a className={`banner_link ${currentAd.linkClass}`} href={currentAd.link}>{currentAd.linkText}</a>
                </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default Banner;
