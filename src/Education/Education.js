import React from "react";
import './Education.css';
import group from '../img/group.png';

class Education extends React.Component {
    render() {
        return (
            <div>
                <div className="education-wrapper">

                    <div class="education">
                        <div class="education-header">
                            <span id="education">Education</span>
                        </div>
                        <div>
                            <span class="work">Donetsk College of <span className="position-organization">Industrial
                                Automation</span> </span>
                        </div>
                        <div class="job">
                            <span>Telecommunications and office equipment specialist</span>
                        </div>
                        <div class="data">
                            <span >September 2001 - February 2004 Ukraine</span>
                        </div>
                    </div>
                </div>
                <div className="certificate-wrapper">
                    <div className="courses-text-intro">
                        From the beginning of the path of training
                        as a web developer, I studied courses of
                        various technologies that could help me gain
                        knowledge. I am still constantly studying in
                        order to improve my level of development. Some
                        of the areas are confirmed by the relevant
                        certificates
                    </div>
                    <div className="certificates-links">
                        <div className="links-block">
                            <a href="https://makieievcv.netlify.app/img/react.pdf" target="blank">React</a>
                        </div>
                        <div className="links-block">
                            <a href="https://makieievcv.netlify.app/img/javascript_practice.pdf" target="blank">JS 400 tasks</a>
                        </div>
                        <div className="links-block">
                            <a href="https://makieievcv.netlify.app/img/javascript_beginer.pdf" target="blank">JS for beginners</a>
                        </div>
                        <div className="links-block">
                            <a href="https://makieievcv.netlify.app/img/javascript_dive.pdf" target="blank">JS dive</a>
                        </div>
                        <div className="links-block">
                            <a href="https://makieievcv.netlify.app/img/python.pdf" target="blank">Python for beginners</a>
                        </div>
                        <div className="links-block">
                            <a href="https://makieievcv.netlify.app/img/web_design.pdf" target="blank">Figma design</a>
                        </div>
                        <div className="links-block">
                            <a href="https://makieievcv.netlify.app/img/web_developer.pdf" target="blank">Html & Css</a>
                        </div>
                        <div className="links-block">
                            <a href="https://makieievcv.netlify.app/img/web_typesetter.pdf" target="blank">Website layout designer</a>
                        </div>

                    </div>
                    <div className="rectangle"></div>
                </div>
                <div className="tagline-wrapper">
                    <div className="tagline-text">
                        Always open to your suggestions!
                    </div>
                    <div className="tagline-button">
                        <button><a href="mailto:mr200486maa@gmail.com" target='blank'>Contact Me</a></button>
                    </div>
                </div>
                <div className="signature-wrapper">
                    <div className="signature">
                        <img src={group} alt="group" />
                        <div className="name">Andrei Makieiev</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;