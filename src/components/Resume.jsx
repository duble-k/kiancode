import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faSuitcase, faGraduationCap, faLanguage } from '@fortawesome/free-solid-svg-icons';

const Resume = React.forwardRef((props, ref) => {
    return (
        <section id="resume" className="py-12" ref={ref}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6">Resume</h2>
                <div className="flex flex-col items-center">
                    <div className="w-full lg:max-w-4xl rounded-md shadow-md shadow-cyan-400 p-6">
                        <h3 className="text-2xl font-semibold">
                            <FontAwesomeIcon icon={faList} className="text-2xl text-cyan-400 mr-2" />
                            Professional Summary
                        </h3>
                        <p className="mt-4">
                            Experienced Software Developer specializing in modern web applications and cloud solutions, with a strong foundation in React.js, Node.js, and Google Cloud Platform/AWS. Committed to leveraging technology to enhance business efficiency and user experience.
                        </p>

                        <h3 className="text-xl font-semibold mt-6">
                            <FontAwesomeIcon icon={faSuitcase} className="text-2xl text-cyan-400 mr-2" />
                            Experience
                        </h3>

                        {/* Job 1 */}
                        <div className="mt-4">
                            <h4 className="font-bold">Software Developer</h4>
                            <p className="text-sm italic">Vidyard, Kitchener, ON (Jun 2024 – Pres.)</p>
                            <ul className="list-disc list-inside mt-2">
                                <li>Using years of in-depth experience in React.js and Javascript to build new features for AI Avatars.</li>
                                <li>Contributing, maintaining, and improving to various micro-services.</li>
                            </ul>
                        </div>

                        {/* Job 2 */}
                        <div className="mt-4">
                            <h4 className="font-bold">Software Developer</h4>
                            <p className="text-sm italic">Neatco Engineering Services Inc, Waterloo, ON (Apr 2022 – Jun 2024)</p>
                            <ul className="list-disc list-inside mt-2">
                                <li>Successfully developed complex applications using AI in the manufacturing space.</li>
                                <li>Helping clients and partners architect solutions with our technology using my years of technical experience.</li>
                            </ul>
                        </div>

                        {/* Job 3 */}
                        <div className="mt-4">
                            <h4 className="font-bold">Associate Software Developer</h4>
                            <p className="text-sm italic">Carfax US, London, ON (Jan. – Sep 2023)</p>
                            <ul className="list-disc list-inside mt-2">
                                <li>Led the development of React.js applications, significantly cutting task durations by 20%.</li>
                                <li>Enhanced data migration processes with optimized backend services, achieving a 10% performance boost.</li>
                            </ul>
                        </div>

                        {/* Job 4 */}
                        <div className="mt-4">
                            <h4 className="font-bold">Frontend Software Developer</h4>
                            <p className="text-sm italic">Molex Canada, Waterloo, ON (Jan 2021 – Apr 2022)</p>
                            <ul className="list-disc list-inside mt-2">
                                <li>Engineered reusable UI components, reducing future development times by 50%.</li>
                            </ul>
                        </div>
                    </div>
                    {/* Resume download button */}
                </div>
                {/* Education */}
                <div className="flex flex-col items-center mt-4">
                    <div className="w-full lg:max-w-4xl rounded-md shadow-md shadow-cyan-400 p-6">
                        <h3 className="text-xl font-semibold mt-6">
                            <FontAwesomeIcon icon={faGraduationCap} className="text-2xl text-cyan-400 mr-2" />
                            Education
                        </h3>
                        {/* Education 1 */}
                        <div className="mt-4">
                            <h4 className="font-bold">B.Sc - Computer Science</h4>
                            <p className="text-sm italic">Wilfrid Laurier Univeristy</p>
                            <ul className="list-disc list-inside mt-2">
                                <li>Learned fundamentals of programming and algorithm engineering and applied them in the real world.</li>
                            </ul>
                        </div>

                        {/* Education 2 */}
                        <div className="mt-4">
                            <h4 className="font-bold">DELF B1 French Diploma</h4>
                            <p className="text-sm italic">Delf - France</p>
                            <ul className="list-disc list-inside mt-2">
                                <li>Achieved B1 Level French profficiency.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Lanugages */}
                <div className="flex flex-col items-center mt-4">
                    <div className="w-full lg:max-w-4xl rounded-md shadow-md shadow-cyan-400 p-6">
                        <h3 className="text-xl font-semibold mt-6">
                            <FontAwesomeIcon icon={faLanguage} className="text-2xl text-cyan-400 mr-2" />
                            Languages
                        </h3>
                        {/* Job 1 */}
                        <div className="mt-4">
                            <ul className="list-disc list-inside mt-2">
                                <li>English (Native), Farsi (Fluent), French (Fluent). </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Resume;
