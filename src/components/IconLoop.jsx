import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faCss3Alt, faJsSquare, faNodeJs, faPython, faAws, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons'; // Representing C++

const IconLoop = () => {
    return (
        <div className="relative w-full h-12 pt-1 overflow-hidden">
            <div className="flex space-x-4 animate-slide-infinite" style={{ width: 'max-content' }}>
                {/* First set of icons */}
                <FontAwesomeIcon icon={faReact} className="text-blue-500 text-2xl" />
                <FontAwesomeIcon icon={faCss3Alt} className="text-red-600 text-2xl" />
                <FontAwesomeIcon icon={faJsSquare} className="text-yellow-500 text-2xl" />
                <FontAwesomeIcon icon={faNodeJs} className="text-yellow-500 text-2xl" />
                <FontAwesomeIcon icon={faPython} className="text-blue-600 text-2xl" />
                <FontAwesomeIcon icon={faAws} className="text-orange-500 text-2xl" />
                <FontAwesomeIcon icon={faGitAlt} className="text-white text-2xl" />
                <FontAwesomeIcon icon={faCode} className="text-black text-2xl" /> {/* C++ */}
                {/* Second set of icons */}
                <FontAwesomeIcon icon={faReact} className="text-blue-500 text-2xl" />
                <FontAwesomeIcon icon={faCss3Alt} className="text-red-600 text-2xl" />
                <FontAwesomeIcon icon={faJsSquare} className="text-yellow-500 text-2xl" />
                <FontAwesomeIcon icon={faNodeJs} className="text-yellow-500 text-2xl" />
                <FontAwesomeIcon icon={faPython} className="text-blue-600 text-2xl" />
                <FontAwesomeIcon icon={faAws} className="text-orange-500 text-2xl" />
                <FontAwesomeIcon icon={faGitAlt} className="text-white text-2xl" />
                <FontAwesomeIcon icon={faCode} className="text-black text-2xl" /> {/* C++ */}
            </div>
        </div>
    );
};

export default IconLoop;
