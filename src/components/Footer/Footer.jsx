import React from 'react';

import fb from '../../assets/Icons/icon-fb-01.png';
import twitter from '../../assets/Icons/icon-twitter-01.png';
import insta from '../../assets/Icons/icon-instagram-01.png';
import dept from '../../assets/Icons/icon-dept-01.png'
import scroll from '../../assets/Icons/icon-scroll-new.svg'
import './Footer.scss'

const Footer = () => {
    const scrollTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div className="all-foot">
            <div className="footer-back">
                <div className="ff-row">
                    <div ><img className="foot-dept" src={dept} alt="dept_log" /></div>
                    <div className="footter-wrapper">
                        <div className="work">
                            WORK
                        </div>
                        <div className="work">
                            SERVICE
                        </div>
                        <div className="work">
                            STORIES
                        </div>
                        <div className="work">
                            ABOUT
                        </div>
                        <div className="work">
                            CARRIERS
                        </div>
                        <div className="work">
                            CONTACT
                        </div>
                    </div>
                    <div className='social'>
                        <div ><a href="https://www.facebook.com/DeptAgency/"><img className="icon-fb" src={fb} alt="fb_log" /></a></div>
                        <div ><a href="https://twitter.com/deptagency"><img className="icon-twitter" src={twitter} alt="twitter_log" /></a></div>
                        <div ><a href="https://www.instagram.com/deptagency/"><img className="icon-insta" src={insta} alt="insta_log" /></a></div>
                    </div>
                </div>
                <div className="line-foot"></div>
                <div className="bottom-line">
                    <div className="row-chamb">
                        <div className="chamber">Chamber of Commerce: 63464101 </div>
                        <div className="chamber vat">VAT: NL 8552.47.502.B01 </div>
                        <div className="chamber">Terms and conditions</div>

                    </div>
                    <div className="dept-agency">
                        © 2018 Dept Agency
                    </div>
                </div>
            </div>
            <div className="white-space">
                <div onClick={scrollTop}>
                    <div className="scroll-icon"> <img className='scroll-top' src={scroll} alt='scrolltop' /></div>
                    <div className='top'>TOP</div>
                </div>
            </div>
        </div>
    )
}
export default Footer;