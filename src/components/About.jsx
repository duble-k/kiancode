import React from 'react';

const About = React.forwardRef((props, ref) => {
    const milestones = [
        { title: "Born", date: "2002" },
        { title: "1st Project", date: "2017" },
        { title: "1st Dev Job", date: "2020" },
        { title: "1st Startup", date: "2024" }
    ];

    return (
        <section id="about" className="py-12" ref={ref}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
                <div className="flex flex-wrap -mx-4">
                    {/* Bio Card */}
                    <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
                        <div className="rounded-md shadow-md shadow-cyan-400 p-6">
                            <h3 className="text-2xl font-semibold">Brief Bio</h3>
                            <p className="mt-4">
                                I began programming in high school, learning the fundamentals of python for basic web parsing projects.
                                Fast forward some years, and I've found my passion working in web development and deployment infrastrucutre.
                            </p>
                            <p className="mt-2">
                                I am lucky that I have found a career path that doesn't really feel like "working", I genuinely enjoy it.
                                My journey of continuous learning has just begun, and I am grateful for all the people apart of it.
                            </p>
                        </div>
                    </div>
                    {/* Milestones Card */}
                    <div className="w-full lg:w-1/2 px-4">
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            {milestones.map((milestone, index) => (
                                <div key={index} className="rounded-sm shadow-sm shadow-cyan-400 p-6 text-center">
                                    <h4 className="font-semibold">{milestone.title}</h4>
                                    <p>{milestone.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default About;
