import React from "react";
import './Header.css';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';
class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="header-wrapper">
                    <div className="header-left">
                        <span>Find Me On</span>
                        <div className="icons">
                            <a href="https://www.facebook.com/andr.andr.39108" target="blank"><img src={facebook} alt="facebook" /></a>
                        </div>
                        <div className="icons">
                            <a href="https://www.linkedin.com/in/andrei-makieiev-026135236/" target="blank"><img src={linkedin} alt="linkedin" /></a>
                        </div>
                    </div>
                    <div className="header-right">

                        <div className="nav"><a href='#projects'>Project</a></div>
                        <div className="nav"><a href='#experience'>Experience</a></div>
                        <div className="nav"><a href='#education'>Education</a></div>
                        <div className="nav"><button><a href="mailto:mr200486maa@gmail.com" target='blank'>Contact Me</a></button></div>

                    </div>
                </div>
            </header>
        );
    }
}

export default Header;