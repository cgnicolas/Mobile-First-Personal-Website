import React, { Component } from 'react';
import ContactButton from '../Components/Landing/ContactButton';
class Landing extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="landing-section">
                <div className="landing-content">
                    <div className="landing-card">
                        <h1>Hi there! I'm Cedric.</h1>
                        <h2>I'm a Software Developer.</h2>
                        <ContactButton buttonTitle="Get In Contact"/>
                    </div>
                </div>
            </section>
         );
    }
}
 
export default Landing;