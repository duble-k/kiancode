import React, { useState, useEffect } from 'react';

const quotes = [
    "Humbly ready to make an impact.",
    "Firebase is hosting this website.",
    "Ready to face any challenge with positivity.",
    "I enjoy what I do, simple as that.",
    "This website was made with React and Tailwind.",
];

const Home = () => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [highlight, setHighlight] = useState(false);
    const [blink, setBlink] = useState(true);

    // Typing effect
    useEffect(() => {
        if (index >= quotes.length) return;

        if (subIndex === quotes[index].length + 1 && !highlight) {
            const timeout = setTimeout(() => {
                setHighlight(true);
            }, 2000); // wait 2 seconds before highlighting
            return () => clearTimeout(timeout);
        }

        if (highlight) {
            const timeout = setTimeout(() => {
                setHighlight(false);
                setSubIndex(0);
                setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
            }, 500); // highlight for 0.5 seconds before clearing
            return () => clearTimeout(timeout);
        }

        const timeout = setTimeout(() => {
            setSubIndex((prevSubIndex) => prevSubIndex + 1);
        }, 150);

        return () => clearTimeout(timeout);
    }, [subIndex, index, highlight]);

    // Blinking cursor effect
    useEffect(() => {
        const cursorTimeout = setTimeout(() => {
            setBlink((prevBlink) => !prevBlink);
        }, 500);

        return () => clearTimeout(cursorTimeout);
    }, [blink]);

    return (
        <section id="home" className="flex flex-col items-center justify-center pt-5">
            <div className="flex flex-col items-center">
                <img src="https://firebasestorage.googleapis.com/v0/b/kiancode.appspot.com/o/profile.jpeg?alt=media&token=6205ee9b-4b82-4f36-a825-969b7b5b8bf2" alt="Profile" className="lg:w-64 lg:h-64 w-48 h-48 rounded-full shadow-lg" />
                <h1 className="text-3xl font-bold mt-4">Hi, this is Kian</h1>
                <p className="text-xl mt-2">Business Development Manager</p>
            </div>
            <div className="flex flex-col items-center justify-center">
            <p className="text-center mt-6 relative">
                    <span style={{ backgroundColor: highlight ? 'lightblue' : 'transparent', transition: 'background-color 0.3s' }}>
                        {quotes[index].substring(0, subIndex)}
                        <span style={{ opacity: blink ? 1 : 0, fontSize: '24px', lineHeight: 'normal' }}>|</span>
                    </span>
                </p>
            </div>
        </section>
    );
};

export default Home;
