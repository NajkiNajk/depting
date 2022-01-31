import React from "react";
import background from "../../assets/Images/Header.jpg";
import menu from "../../assets/Icons/icon-menu.svg";
import dept from "../../assets/Icons/icon-dept-01.png";
// import Dept from
import { ReactComponent as DeptLogo } from "../../assets/Icons/icon-dept.svg";
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
            <div className="hero">
                <div className="header">
                    <div className="DEPT-Logo-Black">
                        <DeptLogo />
                    </div>
                    <div className="menus">
                        <div className="menu">
                            <div className="menu">MENU</div>
                        </div>
                        <div className="lines" onClick={openNav}>
                            <div className="small-line"></div>
                            <div className="small-line sline"></div>
                            {/* <div className='icon-menu' onClick={openNav}><img className='icon-menu' src={menu} alt='' /></div> */}
                        </div>
                    </div>
                </div>
                <div className="image" >

                    <div className="head-work">WORK</div>

                </div>
                <div className="cta" >
                    <button className="case-button" type="button">
                        <span className="case"> VIEW CASE</span>
                    </button>
                </div>
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
                    {/* </div >
                        </div > */}
                </div>

            </div>
        </div>
    );
};
export default Header;
