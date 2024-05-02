import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import IconLoop from './IconLoop';
const FixedLeftNav = ({ scrollToRef, aboutRef, resumeRef, businessRef, contactRef }) => {
    return (
        <div className="hidden lg:flex lg:flex-col lg:w-48 lg:fixed lg:left-0 lg:top-0 lg:bottom-0 bg-cyan-500">
            <IconLoop />
            <div className="flex flex-col justify-center flex-grow">
                <ul className="p-4 text-3xl text-white">
                    <li className="rounded-lg cursor-pointer hover:bg-gray-300" onClick={() => scrollToRef(aboutRef)}>About</li>
                    <li className="rounded-lg cursor-pointer hover:bg-gray-300" onClick={() => scrollToRef(resumeRef)}>Resume</li>
                    <li className="rounded-lg cursor-pointer hover:bg-gray-300" onClick={() => scrollToRef(businessRef)}>Business</li>
                    <li className="rounded-lg cursor-pointer hover:bg-gray-300" onClick={() => scrollToRef(contactRef)}>Contact</li>
                </ul>
            </div>
            <div className="p-4">
                <div className="flex text-white text-center">
                    {/* Social Links with Icons */}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://linkedin.com/in/kian-karbasy-95173820a"
                        className="block">
                        <FontAwesomeIcon icon={faLinkedin} className="text-3xl mr-2" />
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/duble-k"
                        className="block">
                        <FontAwesomeIcon icon={faGithub} className="text-3xl mr-2" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FixedLeftNav;
