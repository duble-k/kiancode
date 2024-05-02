import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const TopNavWithDrawer = ({ scrollToRef, aboutRef, resumeRef, businessRef, contactRef }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Close drawer when clicking outside of it
    useEffect(() => {
        const closeDrawerOnOutsideClick = (event) => {
            if (isOpen && !document.getElementById('drawer').contains(event.target) && !document.getElementById('drawerButton').contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', closeDrawerOnOutsideClick);
        return () => document.removeEventListener('mousedown', closeDrawerOnOutsideClick);
    }, [isOpen]);

    return (
        <>
            {/* Overlay */}
            <div className={`${isOpen ? 'block' : 'hidden'} fixed inset-0 bg-black bg-opacity-50 z-20`} onClick={() => setIsOpen(false)}></div>

            {/* Top Navbar for smaller screens */}
            <div className="lg:hidden bg-cyan-500 w-full z-30">
                <div className="flex justify-between">
                    <div>
                        <button id="drawerButton" className="text-3xl text-white p-4" onClick={() => setIsOpen(true)}>
                            ≡
                        </button>
                        <a className="text-2xl font-semibold text-white">MyPortfolio</a>
                    </div>
                    <div className="flex justify-center items-center">
                        {/* Social Links with Icons */}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://linkedin.com/in/kian-karbasy-95173820a"
                            className="block text-white">
                            <FontAwesomeIcon icon={faLinkedin} className="text-3xl mr-2" />
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/duble-k"
                            className="block text-white">
                            <FontAwesomeIcon icon={faGithub} className="text-3xl mr-2" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Drawer for smaller screens */}
            <div id="drawer" className={`fixed top-0 left-0 h-full w-1/3 bg-cyan-500 shadow-md z-40 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <button className="cursor-pointer text-3xl absolute top-4 right-4 text-white" onClick={() => setIsOpen(false)}>
                    ×
                </button>
                <ul className="menu text-white text-2xl p-4 pt-16">
                    <li className="rounded-lg cursor-pointer hover:bg-gray-300" onClick={() => scrollToRef(aboutRef)}>About</li>
                    <li className="rounded-lg cursor-pointer hover:bg-gray-300" onClick={() => scrollToRef(resumeRef)}>Resume</li>
                    <li className="rounded-lg cursor-pointer hover:bg-gray-300" onClick={() => scrollToRef(businessRef)}>Business</li>
                    <li className="rounded-lg cursor-pointer hover:bg-gray-300" onClick={() => scrollToRef(contactRef)}>Contact</li>
                </ul>
            </div>
        </>
    );
};

export default TopNavWithDrawer;
