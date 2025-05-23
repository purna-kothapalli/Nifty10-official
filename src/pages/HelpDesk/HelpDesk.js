import React from 'react';
import './HelpDesk.css';
import { FaQuestionCircle } from 'react-icons/fa';

const HelpDesk = () => {
  const helpTopics = [
    'Getting Started',
    'How to Play',
    'My Balance',
    'Network on Nifty10',
    'Offers & Rewards',
    'Profile & Verification'
  ];

  return (
    <div className="help-desk-container">
      <header className="help-header">
        <h1 className="help-title">Help Desk</h1>
        <p className="help-subtitle">How can we help you today?</p>
      </header>

      <section className="help-topics-section">
        <h2 className="help-topics-heading">
          <FaQuestionCircle className="help-icon" /> Help Topics
        </h2>
        <div className="card-container">
          {helpTopics.map((topic, index) => (
            <div className="help-topic-card" key={index}>
              <p className="help-topic-title">{topic}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HelpDesk;