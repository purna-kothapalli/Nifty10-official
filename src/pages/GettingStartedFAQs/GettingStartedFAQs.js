import React, { useState } from 'react';
import './GettingStartedFAQs.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
  {
    category: 'About Us',
    items: [
      'What is Nifty10?',
      'How to download the Nifty10 app?'
    ]
  },
  {
    category: 'Login & Registration',
    items: [
      'How do I register?',
      'How do I register using a Referral Code?',
      'How to login via email id?',
      'Why can’t I use Facebook or Google login options on iOS any more?'
    ]
  }
];

const GettingStartedFAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (categoryIndex, itemIndex) => {
    const newIndex = `${categoryIndex}-${itemIndex}`;
    setActiveIndex(activeIndex === newIndex ? null : newIndex);
  };

  return (
    <div className="faq-wrapper">
      <h1 className="faq-title">Getting Started</h1>
      <div className="faq-columns">
        {faqData.map((section, categoryIndex) => (
          <div className="faq-category" key={categoryIndex}>
            <h2 className="faq-category-title">{section.category}</h2>
            {section.items.map((item, itemIndex) => {
              const index = `${categoryIndex}-${itemIndex}`;
              const isActive = activeIndex === index;
              return (
                <div
                  className={`faq-item ${isActive ? 'open' : ''}`}
                  key={index}
                  onClick={() => toggleItem(categoryIndex, itemIndex)}
                >
                  <div className="faq-question">
                    {item}
                    <span className="faq-icon">
                      {isActive ? <FaMinus /> : <FaPlus />}
                    </span>
                  </div>
                  {isActive && (
                    <div className="faq-answer">
                      {/* Placeholder for actual answer */}
                      This is a sample answer to: "{item}".
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GettingStartedFAQs;