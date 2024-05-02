import React from 'react';

const SideBusiness = React.forwardRef((props, ref) => {
    return (
        <section id="side-business" className="py-12" ref={ref}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6">Side Business</h2>
                <div className="flex flex-col items-center">
                    <div className="w-full lg:max-w-4xl rounded-md shadow-md shadow-cyan-400 p-6">
                        <div className="flex items-center space-x-4 mb-4">
                            {/* Placeholder for a logo - Ensure to replace `logo.png` with actual logo file */}
                            <img 
                                src="https://firebasestorage.googleapis.com/v0/b/kiancode.appspot.com/o/logo.png?alt=media&token=6568d211-7872-422b-ba6a-6914de81a919" 
                                alt="VK Data Solutions Inc. Logo" 
                                className="h-12 w-12 object-cover rounded-full" 
                                />
                            <h3 className="text-2xl font-semibold">VK Data Solutions Inc. (VKDS)</h3>
                        </div>
                        <p className="text-md">
                            Founded in 2024 by two partners with the roles of CEO and CTO (Me), VK Data Solutions Inc. is a registered SaaS company in Ontario, specializing in custom data management platforms. Our services enable enterprises to share, collect, and maintain internal data efficiently.
                        </p>
                        <p className="mt-2">
                            We work closely with clients to develop web-based dashboards tailored to their specific needs, ensuring a seamless data management experience.
                        </p>
                        {/* Link to the business website */}
                        <a href="https://www.vkds.ca" target="_blank" rel="noopener noreferrer"
                            className="mt-6 btn bg-cyan-400 shadow-lg shadow-cyan-600 text-white hover:bg-cyan-600">
                            Visit VKDS
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default SideBusiness;
