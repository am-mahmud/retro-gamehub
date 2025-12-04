import React, { useState } from 'react';
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What is Retro Game Hub?",
            answer: "Retro Game Hub is your ultimate destination for classic gaming. We bring together the best retro games from the 80s and 90s, all playable in your browser. Relive the golden age of gaming with our carefully curated collection!"
        },
        {
            question: "Can I play on mobile devices?",
            answer: "Absolutely! Our platform is fully responsive and works great on smartphones and tablets. Play your favorite retro games anywhere, anytime."
        },
        {
            question: "How do I save my game progress?",
            answer: "Your game progress is automatically saved to your account. Just log in from any device and continue where you left off. Never lose your high scores again!"
        },
        {
            question: "Can I request new games to be added?",
            answer: "Yes! We love hearing from our community. Visit our Discord server or send us a message through the contact page to suggest new games you'd like to see."
        },
        {
            question: "What browsers are supported?",
            answer: "We support all modern browsers including Chrome, Firefox, Safari, and Edge. For the best experience, we recommend using the latest version of your browser."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="container mx-auto px-4 py-12 bg-white dark:bg-gray-900 transition-colors">
            <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <FaQuestionCircle className="text-4xl text-orange-500" />
                    <h2 className="font-bold text-3xl md:text-4xl space-mono dark:text-white">
                        FREQUENTLY ASKED QUESTIONS
                    </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Got questions? We've got answers! Check out our most common inquiries below.
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div 
                        key={index}
                        className="bg-white dark:bg-gray-800 border-4 border-black dark:border-cyan-400 overflow-hidden"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className={`w-full p-6 flex items-center justify-between text-left font-bold space-mono transition-colors ${
                                activeIndex === index 
                                    ? 'bg-[#ff8904] text-black' 
                                    : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white'
                            }`}
                        >
                            <span className="flex-1 pr-4 text-sm md:text-base">
                                {faq.question}
                            </span>
                            <div className={`shrink-0 text-2xl transition-transform ${
                                activeIndex === index ? 'rotate-180' : ''
                            }`}>
                                {activeIndex === index ? (
                                    <FaChevronUp />
                                ) : (
                                    <FaChevronDown />
                                )}
                            </div>
                        </button>

                        <div 
                            className={`overflow-hidden transition-all duration-300 ${
                                activeIndex === index 
                                    ? 'max-h-96 opacity-100' 
                                    : 'max-h-0 opacity-0'
                            }`}
                        >
                            <div className="p-6 bg-white dark:bg-gray-800 border-t-4 border-black dark:border-cyan-400">
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;