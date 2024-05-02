import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = React.forwardRef((props, ref) => {
    const [formData, setFormData] = useState({
        name: '',
        organization: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        const scriptId = 'recaptcha-script';

        const loadReCaptchaScript = () => {
            if (document.getElementById(scriptId)) return;  // Script already added

            const script = document.createElement('script');
            script.id = scriptId;
            script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
            script.async = true;
            script.defer = true;
            script.onload = () => initReCaptcha();  // Initialize reCAPTCHA when script is loaded
            document.body.appendChild(script);
        };

        const initReCaptcha = () => {
            // Initialize EmailJS
            emailjs.init('TGZ_q8pb1vGAra886');
            
            if (window.grecaptcha && typeof window.grecaptcha.ready === 'function') {
                window.grecaptcha.ready(() => {
                    try {
                        window.grecaptcha.render('recaptcha-container', {
                            sitekey: '6LdlVs0pAAAAAOAW2QLUywyFsXGNymcvnq_cYLIZ'
                        });
                    } catch(e) {
                        console.error("Error rendering reCAPTCHA: ", e);
                    }
                });
            } else {
                console.error("reCAPTCHA not ready");
            }
        };

        loadReCaptchaScript();

        return () => {
            // Cleanup script when component unmounts
            const script = document.getElementById(scriptId);
            if (script) {
                script.remove();
            }
        };
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!window.grecaptcha) {
            alert('reCAPTCHA not loaded. Please try again later.');
            return;
        }

        const recaptchaResponse = window.grecaptcha.getResponse();
        if (recaptchaResponse.length === 0) {
            alert('Please complete the reCAPTCHA.');
            return;
        }

        emailjs.send('service_5sbhiwk', 'template_plnlrrb', {
            ...formData,
            'g-recaptcha-response': recaptchaResponse
        })
        .then((result) => {
            console.log(result.text);
            alert('Message sent successfully!');
            setFormData({
                name: '',
                organization: '',
                email: '',
                message: ''
            });
            window.grecaptcha.reset();  // Reset reCAPTCHA after submission
        }, (error) => {
            console.log(error);
            alert('Failed to send message. Please try again.');
        });
    };

    return (
        <section id="contact" className="py-12" ref={ref}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
                <div className="flex justify-center">
                    <form onSubmit={handleSubmit} className="w-full max-w-4xl">
                        {/* Form fields as before */}
                        {/* reCAPTCHA widget */}
                        <div className="flex flex-col lg:flex-row -mx-3 mb-6">
                            {/* Name and Organization on the left */}
                            <div className="flex-1 flex flex-col lg:mr-4">
                                <div className="px-3 mb-6">
                                    <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="name">
                                        Name
                                    </label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                                        className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                                </div>
                                <div className="px-3 mb-6">
                                    <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="organization">
                                        Organization
                                    </label>
                                    <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange} required
                                        className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                                </div>
                                <div className="px-3 mb-6">
                                    <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="email">
                                        Email
                                    </label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                                        className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                                </div>
                            </div>
                            {/* Message on the right */}
                            <div className="flex-1 px-3 mb-6">
                                <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required
                                    className="no-resize appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-full resize-none"></textarea>
                            </div>
                        </div>
                        <div id="recaptcha-container" />
                        <button type="submit" className="mt-6 btn bg-cyan-400 shadow-lg shadow-cyan-600 text-white hover:bg-cyan-600">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
});

export default Contact;
