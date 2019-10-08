import React, { Component } from 'react';
import ContactButton from '../Components/ContactButton';
import landingBackground from '../Assets/Content/Images/LandingBackground.svg';
class Landing extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="landing-section">
                <div className="landing-content">
                    <img src={landingBackground} alt="background_image"/>
                    <h1>Hi there! I'm Cedric.</h1>
                    <h2>I'm a Software Developer.</h2>
                    {/* <button name="Get In Touch" type="button" className="contactButton"></button> */}
                    <ContactButton/>
                </div>
            </section>
         );
    }
}
 
export default Landing;