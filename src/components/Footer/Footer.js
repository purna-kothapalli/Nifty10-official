import React from "react";
import "./Footer.css"; // Assuming you have a separate CSS file
import Nifty10Logo from "../../assets/Nifty10-logo-white.png";
import PlayStore from "../../assets/GetItOnGooglePlay_Badge.png";
import AppStore from "../../assets/GetItOnApp_Store_Badge.svg";
import Juspay from "../../assets/juspay.svg";
import Razorpay from "../../assets/razorpay.svg";
import Facbook from "../../assets/facebook-logo.png";
import Instagram from "../../assets/instagram-logo.png";
import Twitter from "../../assets/x-logo.png";
import Youtube from "../../assets/youtube-logo.png";
import Telegram from "../../assets/telegram-logo.png";
import Whatsapp from "../../assets/whatsapp-logo.png";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const mobileHideRoutes = ['/about-us', '/terms-conditions', '/refund-policy','/points-system','/privacy-policy'];
  const hideLinksMobile = mobileHideRoutes.includes(location.pathname);
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h2>
            <img
              className="footer-logo-img"
              src={Nifty10Logo}
              alt="Nifty10 Logo"
            />
            <span className="highlight">nifty</span>10
          </h2>
          <div className="store-buttons">
            <img src={PlayStore} alt="Play Store" />
            <img src={AppStore} alt="App Store" />
          </div>
        </div>
          <div className={`footer-links ${hideLinksMobile ? 'hide-links-mobile' : ''}`}>
            <div>
              <h4>Quick links</h4>
              <ul>
                <li><a href="/winners">Nifty 10 Winners</a></li>
                <li><a href="/disclaimer">Disclaimer</a></li>
                <li><a href="/refund-policy">Refund Policy</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/terms-conditions">Terms & Conditions</a></li>
                <li><a href="/legal-opinion-skilled-game">Legal Opinion</a></li>
              </ul>
            </div>
            <div>
              <h4>&nbsp;</h4>
              <ul>
                <li><a href="/about-us">About Us</a></li>
                <li><a href="/help-desk">Helpdesk</a></li>
                <li><a href="/contact-us">Contact Us</a></li>
                <li><a href="/product-pricing">Product Pricing</a></li>
                <li><a href="/points-system">Points System</a></li>
                <li><a href="/play-guide">How to play</a></li>

              </ul>
            </div>
          </div>

          <div className="footer-info">
            <h4>Payment partners</h4>
            <div className="payment-partners">
              <img src={Juspay} alt="Juspay" />
              <img src={Razorpay} alt="Razorpay" />
            </div>
            <div className={` ${hideLinksMobile ? 'hide-links-mobile' : ''}`}>
            <h4>Connect with us</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com/"><img src={Facbook} alt="Facebook" /></a>
              <a href="https://www.instagram.com/"><img src={Instagram} alt="Instagram" /></a>
              <a href="https://x.com/"><img src={Twitter} alt="X" /></a>
              <a href="https://www.youtube.com/"><img src={Youtube} alt="YouTube" /></a>
              <a href="https://www.whatsapp.com/"><img src={Whatsapp} alt="Whatsapp" /></a>
              <a href="https://telegram.org/"><img src={Telegram} alt="Telegram" /></a>
            </div></div>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="disclaimer">
            This game involves an element of financial risk and may be addictive. Please play responsibly at your own risk. The game is applicable for people above 18 only.
          </p>
          </div>
    </footer>
  );
};

export default Footer;
