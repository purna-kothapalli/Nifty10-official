// src/components/Header.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "./Header.css"; // Import your styles if they are in a CSS file
import Nifty10Logo from "../../assets/Nifty10-logo-white.png";
import PlayStore from "../../assets/GetItOnGooglePlay_Badge.png";
import AppStore from "../../assets/GetItOnApp_Store_Badge.svg";
import HeaderIcon from "../../assets/header-bg1.png";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const mobileHideRoutes = ['/about-us', '/terms-conditions', '/refund-policy','/points-system','/privacy-policy'];
  const shouldHideOnMobile = mobileHideRoutes.includes(location.pathname);
  return (
    <header className="header">
      <div className={`home-icon-container animate__animated animate__fadeIn ${shouldHideOnMobile ? "hide-home-mobile" : ""}`}>
        <a href="/home" className="home-icon" aria-label="Go to homepage">
          <FontAwesomeIcon icon={faHouse} />
        </a>
      </div>
      <div className="header-container">
        <div className="header-content animate__animated animate__fadeInDown">
          <img
            src={Nifty10Logo}
            alt="Nifty10 Logo"
            className="logo spark-animation"
          />
          <h1 className="header-title">
            Play Fantasy Stocks prediction and win real cash prizes
          </h1>

          <div className="input-group">
            <input type="tel" placeholder="Enter Mobile Number" pattern="[0-9]{10}"/>
            <button className="pulse-button">Get APP LINK</button>
          </div>

          <div className="download-buttons animate__animated animate__fadeInUp animate__delay-1s">
            <a
              href="https://play.google.com/store/apps/details?id=com.finpages.nifty"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={PlayStore}
                alt="Get it on Google Play"
              />
            </a>
            <a href="/home" target="_blank" rel="noopener noreferrer">
              <img
                src={AppStore}
                alt="Download on the App Store"
              />
            </a>
          </div>

          {/* <div className="header-background">
            <img src={HeaderIcon} alt="header icon" />
          </div> */}

        </div>
      </div>
    </header>
  );
};

export default Header;
