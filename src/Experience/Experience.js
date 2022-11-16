import React from "react";
import './Experience.css';







class Experience extends React.Component{
    render(){
        return(
            <div className="experience-wrapper">
                <div className="experience-header">
                    <span id="experience">EDUCATION and EXPERIENCE</span>
                </div>

                <div className="experience-item-wrapper">
                    <div className="experience-item">                    
                        <div className="subheader">
                            <span className="position-organization">Front-End Developer <span className="work">Freelance</span></span>
                        </div>
                        <div className="data">
                            <span>December 2021 - up to now | Ukraine</span>
                        </div>
                        <ul>
                            <li>
                                I am developing websites from the design stage to the finishing product. 
                                I use JS/HTML/CSS trio to make magic happen, I have basic knowledge of React framework. 
                                I am looking for challenges where I can grow as a developer and a team who can help me to 
                                learn what is good and what is bad and why. I am constantly in the process of learning to 
                                master new practices and techniques in order to obtain a more complex and interesting product
                            </li>                          
                        </ul>
                    </div>

                    <div className="experience-item">
                        <div className="subheader">
                            <span className="position-organization">Engineer <span className="work">COMMERCIAL BANK
                                    "PRIVATBANK"</span></span>
                        </div>
                        <div className="data">
                            <span>October 2016 - Julу 2021 | Ukraine</span>
                        </div>
                        <ul>
                            <li>
                                I’ve worked as an engineer for the repair and maintenance of Wincor Nixdorf ATMs. 
                                I’ve provided support and development of the hardware of the acquiring network of 
                                payment terminals of Ingenico, Verifone, and Pax companies.
                                I’ve set up and configured software methods to protect the hardware of ATMs
                            </li>
                        </ul>
                    </div>

                    <div className="experience-item">
                        <div className="subheader">
                            <span className="position-organization">Fire extinguishing and alarm system engineer<span className="work"> Donetsk metallurgical plant "DMZ"</span></span>
                        </div>
                        <div className="data">
                            <span>March 2014 - October 2014 | Ukraine</span>
                        </div>
                        <ul>
                            <li>
                                I’ve been doing the installation of alarm systems and fire extinguishing 
                                installations on the territory of the enterprise. My responsibility was a 
                                prompt response to emergency situations and situations related to the alarm 
                                of the warning system, control of the work done in accordance with the provided projects, 
                                and maintenance of systems in accordance with the regulations
                            </li>
                        </ul>
                    </div>
                </div>    
            </div>
        );
    }
}

export default Experience;