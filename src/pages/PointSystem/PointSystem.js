import React from "react";
import "./PointSystem.css"


const PointSystem = () => {
  return (
    <section className="point-system">
      <h2 className="terms-header">Nifty 10 Points System</h2>
            <ul className='terms-conditions-list'>
                <li className='terms-conditions-list-item privacy-sub-header'>📈 Stock Points Allocation</li>
                <p className='privacy-text'>Each of the 50 stocks in the pool is assigned a base point value, reflecting their estimated performance based on historical data.</p>
                 <p className='privacy-sub-list-item'>Key Rule:</p>
                 <ul className='privacy--list'>
                    <li className='privacy-list-item'>Players choose 5 stocks.</li>
                    <li className='privacy-list-item'>From these, 1 stock is designated as the Bigbull/Bigbear, which receives a 10x boost in impact.</li>
                 </ul>
                 <li className='terms-conditions-list-item privacy-sub-header'>📊 Game Rules</li>
                <p className='privacy-text'>The game encourages strategic decisions in stock selection based on market trends and assigned points.</p>
                <p className='privacy-sub-list-item'>How to Play:</p>
<ul className='privacy--list'>
    <li className='privacy-list-item'>Select 5 stocks from the 50-stock pool.</li>
    <li className='privacy-list-item'>Designate 1 stock as the Bigbull/Bigbear.</li></ul>
    <p className='privacy-sub-list-item'>Final Score Calculation:</p>
    <p className="point-system-strong">Final Score = Sum of Points from 4 Normal Stocks + (Bigbull/Bigbear Stock Points × 10 × Day Performance Multiplier)</p>
<p className='privacy-sub-list-item1'>Example 1: All Stocks Bullish</p>

                <li className='terms-conditions-list-item privacy-sub-header'>⚡ Day Performance Multiplier</li>
                <li className='terms-conditions-list-item privacy-sub-header'> Summary & Strategy</li>
            </ul>
    </section>
  );
};

export default PointSystem;
