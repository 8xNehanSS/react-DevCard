import React from "react";
import email from '../images/Icon.png';
import linkedin from '../images/Vector.png';
import '../App.css';

const Buttons = () => {
    return (
        <div className="buttons">
        <div className="emailbutton">
            <img src={email} alt="email" width='15'/>
            <h2 className="linknames">Email</h2>
        </div>
        <div className="linkedbutton"> 
            <img src={linkedin} alt="linkedin" width='15' />
            <h2 className="linknames">LinkedIn</h2>
        </div> 
        </div>
    );
}

export default Buttons;