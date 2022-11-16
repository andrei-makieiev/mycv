import React from "react";
import './Projects.css';

import project from '../img/project-site.png';
import furniture from'../img/furniture.png';
import rates from'../img/rates.png';
import quiz from '../img/quiz.png';



class Projects extends React.Component{
    render(){
        return(
            <section>
                <div className="wrapper-content" id='projects'>
                    <div className="background-project-promo"><span className='span-projects'>MY PROJECTS</span></div>
                </div>
                <div>
                    <div className="project-wrapper-content">
                        <div className="project-wrapper">
                            <div className="project-left">
                                <img src={project} alt="project" />
                            </div>
                            <div className="project-right">
                                <h2><span className='project-yellow-h2'>Beauty</span>salon</h2>
                                <h3>Site</h3>
                                <div className="projects-links">
                                    <a className='button-project' href="https://yeezy-salon.com/" target="blank">View Details</a>
                                </div>
                            </div>
                        </div>             
                    </div>
                    <div className="project-wrapper-content">
                        <div className="project-wrapper">
                            <div className="project-left">
                                <img src={furniture} alt="project" />
                            </div>
                            <div className="project-right">
                                <h2><span className='project-yellow-h2'>Furniture</span>Shop</h2>
                                <h3>Landing</h3>
                                <div className="projects-links">
                                    <a className='button-project' href="https://landingfurniture.netlify.app/" target="blank">View Details</a>
                                </div>
                            </div>
                        </div>             
                    </div>
                    <div className="project-wrapper-content">
                        <div className="project-wrapper">
                            <div className="project-left">
                                <img src={rates} alt="project" />
                            </div>
                            <div className="project-right">
                                <h2><span className='project-yellow-h2'>Exchange Rates</span>App</h2>
                                <h3>React App</h3>
                                <div className="projects-links">
                                    <a className='button-project' href=" https://reactprogect.netlify.app/" target="blank">View Details</a>
                                </div>
                            </div>
                        </div>             
                    </div>
                   
                    <div className="rectangle"></div>
                </div>
            </section>
        );
    }
}

export default Projects;