import React from "react";
import './Hero.css';

import lines from '../img/lines.png';
import plusses from '../img/plusses.png';
import iam from '../img/i`am.png';


class Hero extends React.Component{
    render(){
        return(
          <section className='hero-block'>
            <div className="wrapper-content">
              <div className="hero-left-content">
                <div className="hero-left-text">
                  <h2>Hello!</h2>
                  <h1>I’m <span className='hero-name'>Andrei Makieiev</span></h1>
                  <h3>Frontend developer</h3>
                  <div className='hero-line'>
                    
                  </div>
                  <div className="hero-text">
                    Hi, my name is Andrey and I am a junior frontend engineer, 
                    I came to web development from the position of a banking 
                    systems engineer. I have basic knowledge of Javascript HTML CSS, 
                    framework React also I’ve completed initial training in design 
                    and web development. I am working as a freelance web developer 
                    right now and have some commercial experience with developing 
                    lending pages and one e-commerce solution. In my work, I use JS 
                    and CSS for dynamic visualization of the product. I am learning 
                    new technology and practicing every day on a full-time basis to 
                    be a more successful developer. I am looking for a trainee or junior 
                    position in your company if you interesting feel free to contact me ;)
                  </div>
                </div>
                <div className="hero-left-buttons">
                    <button className='hero-left-button'><a href="https://drive.google.com/file/d/1BK7TB6cyoF9rluEHrzdXit96gHtcKGiS/view?usp=sharing" target="blank">Download CV</a></button>
                </div>
              </div>
              <div className="hero-right-conent">
                <div className="hero-right-image">
                  <img src={lines} alt="lines" className='lines'/>
                  <img className="my-image" src={iam} alt="i`m" />
                  <img src={plusses} alt="plusses" className='plusses'/>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Hero;