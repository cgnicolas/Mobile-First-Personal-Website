import React, { Component } from 'react';
import ExperienceCard from '../Components/ExperienceCard';

class Experience extends Component {
    state = {  }
    render() { 
        let {data} = this.props.content;
        return ( 
            <section className="experience-section grid">
                <div className="content-wrap">
                    <h1 className="section-title">experience</h1>
                    {/* Experience Switcher */}
                    {data.map((element, index) => {
                        return (
                            <ExperienceCard key={index} content={element}/>
                        );
                    })}
                </div>
            </section>
         );
    }
}
 
export default Experience;