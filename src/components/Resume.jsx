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
                            <h4 className="font-bold">Software Developer – Web Application Specialist</h4>
                            <p className="text-sm italic">Neatco Engineering Services Inc, Waterloo, ON (Apr 2022 – Present)</p>
                            <ul className="list-disc list-inside mt-2">
                                <li>Developed and launched React.js/Tailwind CSS/Python applications enhancing operational efficiency.</li>
                                <li>Integrated cloud solutions using GCP/Firebase for improved analytics and process efficiencies with AI.</li>
                            </ul>
                        </div>

                        {/* Job 2 */}
                        <div className="mt-4">
                            <h4 className="font-bold">Associate Software Engineer</h4>
                            <p className="text-sm italic">Carfax US, London, ON (Jan. – Sep 2023)</p>
                            <ul className="list-disc list-inside mt-2">
                                <li>Led the development of React.js applications, significantly cutting task durations by 20%.</li>
                                <li>Enhanced data migration processes with optimized backend services, achieving a 10% performance boost.</li>
                            </ul>
                        </div>

                        {/* Job 3 */}
                        <div className="mt-4">
                            <h4 className="font-bold">Frontend Software Developer</h4>
                            <p className="text-sm italic">Molex Canada, Waterloo, ON (Jan 2021 – Apr 2022)</p>
                            <ul className="list-disc list-inside mt-2">
                                <li>Engineered reusable UI components, reducing future development times by 50%.</li>
                            </ul>
                        </div>
                        <a
                            href="https://firebasestorage.googleapis.com/v0/b/kiancode.appspot.com/o/Kian_Karbasy_Resume.pdf?alt=media&token=c7cfeb1e-3d6c-4fc4-b2dc-91454a6b1187"
                            target="_blank"
                            rel="noopener noreferrer" // security measure
                            className="mt-6 btn bg-cyan-400 shadow-lg shadow-cyan-600 text-white hover:bg-cyan-600">
                            Full Resume
                        </a>
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
                        {/* Job 1 */}
                        <div className="mt-4">
                            <h4 className="font-bold">B. ASc - Computer Engineering</h4>
                            <p className="text-sm italic">University of Waterloo (Sep 2020 - Dec 2023)</p>
                            <ul className="list-disc list-inside mt-2">
                                <li>Learned fundamentals of Electrical and Computer engineering, and applied them in the real world.</li>
                                <li>Did not complete my degree.</li>
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
                                <li>English (Native), Farsi (Fluent), French (Professional B1 Diploma). </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Resume;
