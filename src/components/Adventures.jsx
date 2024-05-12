import React from 'react';

const Adventures = React.forwardRef((props, ref) => {
    return (
        <section id="latest-adventure" className="py-12" ref={ref}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6">Latest Adventure</h2>
                <div className="flex flex-wrap -mx-4">
                    {/* Adventure Details */}
                    <div className="w-full px-4 mb-4">
                        <div className="rounded-md shadow-md shadow-cyan-400 p-6">
                            <h3 className="text-2xl font-semibold">Automate 2024</h3>
                            <p className="mt-4">
                                At Automate 2024, I had the opportunity to engage with some of the most cutting-edge technologies
                                in automation. From exploring the latest innovations in robotic systems to discussing potential
                                collaborations with industry leaders, the experience was immensely enriching. Our team at Neatco showcased 
                                a demo cell using KEBA products and our AI for a quality control application with a Comau robotic arm, which
                                attracted considerable attention from attendees and industry experts alike. This event not only
                                broadened my network but also deepened my understanding of where the future of automation is headed. 
                                Thank you KEBA for the opportunity to come showcase our collaborative turnkey solutions at your booth.
                            </p>
                        </div>
                    </div>
                    {/* Image of the Event */}
                    <div className="w-full px-4">
                        <div className="flex justify-center">
                            <img src="https://firebasestorage.googleapis.com/v0/b/kiancode.appspot.com/o/automate.png?alt=media&token=8274c6b2-1d4e-44a7-9dfb-c2a625ee7f27" alt="Automate 2024" className="rounded-md shadow-md shadow-cyan-400"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Adventures;
