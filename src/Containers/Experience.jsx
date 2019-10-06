import React, { Component } from 'react';
import ExperienceCard from '../Components/ExperienceCard';

class Experience extends Component {
    state = {  }
    render() { 
        let {data} = this.props.content;
        return ( 
            <section>
                <h1>experience</h1>
                {/* Experience Switcher */}
                {data.map((element, index) => {
                    return (
                        <ExperienceCard key={index} content={element}/>
                    );
                })}
            </section>
         );
    }
}
 
export default Experience;