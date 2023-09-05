import React from "react";
import email from '../images/Icon.png';
import linkedin from '../images/Vector.png';
import '../App.css';

const Buttons = () => {
    return (
        <div className="buttons">
            <a href='mailto:nehan.sudasinghe@gmail.com' id='linkdeco'>
                <div className="emailbutton">
                    <img src={email} alt="email" width='15'/>
                    <h2 className="linknames">Email</h2>
                </div>
            </a>
            <a href='https://linkedin.com/in/nehan-sudasinghe/' id='linkdeco'>
                <div className="linkedbutton"> 
                    <img src={linkedin} alt="linkedin" width='15' />
                    <h2 className="linknames">LinkedIn</h2>
                </div>
            </a>
        </div>
    );
}

export default Buttons;