import React from 'react';
import './Disclaimer.css';

const Disclaimer = () => {
  return (
    <section className="disclaimer-section">
      <h2 className="disclaimer-title">Disclaimer</h2>
      <p className="disclaimer-text">
        The NIFTY10 fantasy game is a skill-based online game intended for entertainment and educational purposes only. Participation in the game does not involve trading or investments in the actual stock market. The game and its associated content do not directly or indirectly involve in real time trading of stocks.
      </p>

      <p className="disclaimer-text">
        The game does not suggest, recommend, or endorse any trading of stocks to any participant of the game or visitor to our website / APP. The virtual stock points used in the game are based on algorithm calculations and do not reflect real market stock points / values. Players should not rely on the information provided within the game for making real stock market investment decisions.
      </p>

      <p className="disclaimer-text">
        The management of FINPAGES TECH PRIVATE LIMITED, the creators of NIFTY10, does not directly or indirectly solicit its players to enter into the stock market. We neither provide any assurance services nor any recommendations regarding stock market investments. Our fantasy game will never directly or indirectly influence the stock market in any way.
      </p>

      <p className="disclaimer-text">
        By participating in NIFTY10, players / visitors acknowledge and agree that the game is purely for entertainment and educational purposes. The game developers / creators and operators are not directly or indirectly liable for any financial losses or damages arising from participation in the game and other in-game information.
      </p>

      <p className="disclaimer-strong">
        <strong>Please play responsibly and enjoy the game as a form of education and entertainment.</strong>
      </p>

      <h3 className="disclaimer-contact-title">Contact Us:</h3>
      <p className="disclaimer-text">
        Any questions or clarifications with respect to this Privacy Policy or any complaints, comments, concerns or feedback can be sent to Nifty10 at: 
        <a className="disclaimer-link" href="mailto:support@nifty10.com">support@nifty10.com</a> or by normal/physical mail addressed to:
      </p>

      <address className="disclaimer-address">
        <strong>Attn: Nifty10 Team</strong><br />
        Finpages Tech Private Limited,<br />
        #709, Gowra Fountainhead,<br />
        Hitech City, Madhapur,<br />
        Pin: 500081.
      </address>
    </section>
  );
};

export default Disclaimer;
