import React from "react";
import './PlayGuide.css'

const PlayGuide = () => {
    return (
        <section className="point-system">
            <h2 className="terms-header">How To Play</h2>
            <p className="privacy-text">If you're new to <span class="bold">Nifty 10</span>, start by understanding the <span class="bold">fantasy stock trading basics</span>. Knowing how the <span class="bold">Nifty 10 Fantasy Points System</span> works, including how stocks earn points and the <span class="bold"><span class="bold">Big Bull </span>& <span class="bold">Big Bear </span> multipliers</span>, can boost your chances of winning. Smart stock selection and strategic predictions can maximize your score. Check out the detailed points system below to enhance your gameplay and increase your winnings!.These are the steps to follow:</p>
            <ul className='terms-conditions-list'>
                <li className='terms-conditions-list-item privacy-sub-header'>Choose Market trend</li>
                <p className="privacy-text">In Nifty 10, User get to choose between two market trends: <span className="Bullish-text">Bullish</span>  or <span className="Bearish-text">Bearish</span> . If User expects an <span class="bold">Upward trend</span>, they should select the <span className="Bullish-text">Bullish</span> market trend and pick <span class="bold">5 stocks </span>that are likely to gain the most. If User predict a <span class="bold">downward trend</span>, they should select the <span className="Bearish-text">Bearish</span> market trend and pick <span class="bold">5 stocks</span> that are expected to decline in value.</p>
                <li className='terms-conditions-list-item privacy-sub-header'>Select <span class="bold">Big Bull </span>or <span class="bold">Big Bear </span></li>
                <p className="privacy-text">After selecting <span class="bold">5 stocks</span>, the user must identify the <span class="bold">best or worst performer of the day</span> among them. If the user chooses the <span className="Bullish-text">Bullish</span> market trend, they must pick <span class="bold">One Stock </span> from the selected five as the <span class="bold">Big Bull </span>, the stock they believe will gain the most. If the user is in the <span className="Bearish-text">Bearish</span> market trend, they must select <span class="bold">One Stock </span> from the five as the <span class="bold">Big Bear </span> , the stock they predict will perform the worst.</p>
                <li className='terms-conditions-list-item privacy-sub-header'>Understanding the Point System & Multiplier</li>
                <p className="privacy-text">Every stock has a <span class="bold">pre-assigned point</span> . The <span class="bold">Big Bull </span> & <span class="bold">Big Bear </span>  Multiplier plays a crucial role in boosting your final score.</p>
                <ul className='privacy--list'>
                    <li className='privacy-list-item'>If the Selected <span class="bold">Big Bull </span>(best performer) in the <span className="Bullish-text">Bullish</span> market trend is one of the <span class="bold">top performers</span> of the day, the points will be <span class="bold">multiplied by</span> <span class="bold">10X</span>.</li>
                    <li className='privacy-list-item'>If the Selected <span class="bold">Big Bear </span> (worst performer) in the <span className="Bearish-text">Bearish</span> market trend is one of the <span class="bold">worst performers</span> of the day, the points will be <span class="bold">multiplied by</span> <span class="bold">10X</span>.</li>

                </ul>
                <p className='privacy-sub-list-item privacy-text'>For example:</p>
                <p className="privacy-text">The user has chosen the <span className="Bullish-text">Bullish</span> market trend, expecting all selected stocks to increase in value. However, some stocks (INFY & LT) performed <span className="Bearish-text">Bearish</span> (their value dropped), resulting in negative points.
                    Additionally, the user selected M&M as the <span class="bold">Big Bull </span>, and since it was one of the top-performing stocks, its points will be <span class="bold">multiplied by</span> <span class="bold">10X</span>.
                </p>
                <table>
                    <tr>
                        <th>Stock</th>
                        <th>Market Performance</th>
                        <th>Points Earned</th>
                    </tr>
                    <tr>
                        <td>INFY (Bearish ❌)</td>
                        <td>Stock price dropped</td>
                        <td><span class="bold">0 Points ❌</span></td>
                    </tr>
                    <tr>
                        <td>ITC (Bullish ✅)</td>
                        <td>Stock price increased</td>
                        <td><span class="bold">+3 Points ✅</span></td>
                    </tr>
                    <tr>
                        <td>LT (Bearish ❌)</td>
                        <td>Stock price dropped</td>
                        <td><span class="bold">0 Points ❌</span></td>
                    </tr>
                    <tr>
                        <td>M&amp;M (<span class="bold">Big Bull </span>🐂 ✅)</td>
                        <td>
                            Stock price increased<br />
                            <span class="bold">(Top performer)</span>
                        </td>
                        <td><span class="bold">(4 × 10) = 40 Points 🔥 ✅</span></td>
                    </tr>
                    <tr>
                        <td>ADANIENT (Bullish ✅)</td>
                        <td>Stock price increased</td>
                        <td><span class="bold">+7 Points ✅</span></td>
                    </tr>
                </table>
                <p className='privacy-sub-list-item privacy-text'>Total Score Calculation:</p>
                <p className="privacy-text">Now, adding all the points together:</p>
                <p className="privacy-text"><span class="bold">Total Points</span> = 3 + 40 + 7</p>
                <p className="privacy-text"><span class="bold">Total Points</span> = 50 Points</p>
                <li className='terms-conditions-list-item privacy-sub-header'>Place Your Bid</li>
                <p className="privacy-text">Once you have carefully chosen your <span class="bold"> 5 stocks</span> and selected your <span class="bold">Big Bull </span>or <span class="bold">Big Bear </span>, it's time to place your bid. Review your selections and join your bid. You can place up to <span class="bold">15 slots</span> in each bid, giving you multiple chances to win. </p>
                <li className='terms-conditions-list-item privacy-sub-header'>Winners & Rewards</li>
                <p className="privacy-text">The winners are announced daily at <span class="bold">4 PM</span>, based on the total fantasy points earned from their selected stocks. If your <span class="bold">Big Bull </span>& <span class="bold">Big Bear </span> selections were correct, you get a <span class="bold">10X</span> points boost, increasing your chances of ranking at the top. The top-performing players win real cash prizes! </p>

            </ul>
            <p className='play-sub-header'>Other <span className="play-imp">Important Points</span></p>
            <ul className='privacy--list'>
                    <li className='privacy-list-item'><span class="bold">Big Bull & Big Bear Selection: </span>If the selected Big Bull or Big Bear is incorrect, no multiplier will be applied.</li>
                    <li className='privacy-list-item'><span class="bold">Bid Placement:</span> Once a bid is placed, it cannot be modified or canceled.</li>
                    <li className='privacy-list-item'><span class="bold">Bid Limit: </span>Each user can place up to 15 bids per game.</li>
                    <li className='privacy-list-item'><span class="bold">Pool System:</span> Users join a pool based on their bid amount.</li>
                    <li className='privacy-list-item'><span class="bold">Ranking System:</span> Final rankings are determined by the total fantasy points accumulated.</li>
                    <li className='privacy-list-item'><span class="bold">Stock Performance Impact:</span> If a stock moves against the selected market trend, negative points will be awarded.</li>
                <li className='privacy-list-item'><span class="bold">Final Score & Adjustments:</span> No adjustments will be made to points once winners are declared.</li>
                </ul>
                <p className='play-sub-header'>🔥 Start Playing & Win Big on Nifty10! 🔥</p>
        </section>
    );
};

export default PlayGuide;
