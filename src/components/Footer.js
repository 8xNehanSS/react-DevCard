import React from "react";
import '../App.css';

import Twitter from '../images/TwitterIcon.png';
import Facebook from '../images/FacebookIcon.png';
import Instagram from '../images/InstagramIcon.png';
import Github from '../images/GitHubIcon.png';

const Footer = () => {
    return (
        <>
        <div className="footer">
            <img src={Twitter} alt='twitter' />
            <img src={Facebook} alt='facebook' />
            <img src={Instagram} alt='instagram' />
            <img src={Github} alt='github' />
        </div>
        <div className="footermargin"></div>
        </>
    );
}

export default Footer;