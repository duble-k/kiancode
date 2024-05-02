import React from 'react';

const QuoteComponent = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Linus Torvalds Quote */}
                <div className="max-w-lg">
                    <p className="text-lg italic">"Talk is cheap. Show me the code."</p>
                    <p className="text-base mt-2">— Linus Torvalds</p>
                </div>

                {/* Copyright Information */}
                <div className="text-right">
                    <p>© Copyright 2024</p>
                </div>
            </div>
        </section>
    );
};

export default QuoteComponent;
