import React from "react";

import dept from "../../assets/Icons/icon-dept-01.png";
import "./Header.scss";

const Header = () => {
  const openNav = () => {
    console.log("open");
    document.getElementById("myNav").style.height = "100%";
  };

  const closeNav = () => {
    console.log("close");
    document.getElementById("myNav").style.height = "0%";
  };

  return (
    <div className="headerParent">
      <div className="header">
        <div className="header-content">
          <div className="logo-black">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173 46" width="173" height="46"><path d="M147.9 46h12.6V10.8H173V0h-37.6v10.8h12.5V46zm-41.5-24.9V9.9h7.2c4.6 0 6.9 1.9 6.9 5.6 0 3.7-2.3 5.6-6.9 5.6h-7.2zM93.9 46h12.6V31h7.5c11.3 0 18.8-4.9 18.8-15.5S125.2 0 114 0H93.9v46zm-43.3 0h34.3V35.7H63.2v-7.8h21.5V18H63.2v-7.7h21.7V0H50.6v46zm-38-10.7V10.7h4c8.8 0 14.3 3.2 14.3 12.3 0 9.1-5.4 12.3-14.3 12.3h-4zM0 46h16.5c15.6 0 26.9-6.2 26.9-23C43.3 6.2 32 0 16.5 0H0v46z"></path></svg>
          </div>
          <div className="menus">
            <div className="menu">MENU</div>
            <div className="lines" onClick={openNav}>
              <div className="small-line"></div>
              <div className="small-line "></div>
            </div>
          </div>
        </div>
      </div>
      <div className="image">
        <h1>WORK</h1>
      </div>

      <div className="cta">
        <button className="case-button" type="button">
          <span className="case"> VIEW CASE</span>
        </button>
      </div>
      <div id="myNav" className="overlay">
        <img className="menu-dept" src={dept} alt="dept_menu" />
        <div>
          <a href="https" className="closebtn" onClick={closeNav}>
            &times;
          </a>
        </div>
        <div className="overlay-content">
          <div className="last-row">
            <div className="language">
              <div className="social-media">GLOBAL</div>
              <div className="social-media">NEDERLAND</div>
              <div className="social-media">UNITED STATES</div>
              <div className="social-media">IRELAND</div>
              <div className="social-media">UNITED KINGDOM</div>
              <div className="social-media">DEUTSCHLAND</div>
              <div className="social-media">SCHWEIZ</div>
            </div>
            <div className="werk first">HOME</div>
          </div>
          <div className="werk">WERK</div>
          <div className="werk">OVER</div>
          <div className="werk">DIENSTEN</div>
          <div className="werk">PARNTERS</div>
          <div className="werk home">STORIES</div>
          <div className="last-row">
            <div className="social-media">
              FACEBOOK
              <br />
              TWITTER
              <br />
              INSTAGRAM
              <br />
              LINKEDIN
            </div>
            <div className="werk last">VACATURES</div>
          </div>
        </div>
      </div>

    </div>
  );
};
export default Header;
