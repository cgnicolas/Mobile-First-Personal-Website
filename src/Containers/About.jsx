import React, { Component } from 'react';
import selfPhoto from '../Assets/Content/Images/selfPhoto.jpg';
class About extends Component {
    state = {  }
    render() { 
        let {content, technologies} = this.props;
        return ( 
            <section className="about-section">
                <div className="content-wrap">
                    <h1 className="section-title">about</h1>
                    <div className="content-card grid">
                        <div className="photo-wrapper">
                            <img src={selfPhoto} className='selfPhoto' alt="photo_of_me"/>
                        </div>
                        <div className="about-content">
                            {content.map((element, index) => {
                                return (
                                    <p key={index} className="text-content">{element}</p>
                                )
                            })}
                            <div className="technologies">
                                <ul>
                                    {technologies.map((technology, index) => {
                                        return (
                                            <li key={index}><p>{technology}</p></li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
        );
    }
}
 
export default About;