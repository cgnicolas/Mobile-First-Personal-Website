import React, { Component } from 'react';

class ExperienceCard extends Component {
    state = {  }
    render() { 
        let {content} = this.props;
        return ( 
            <div className="experience-card">
                <h2>{content.title}</h2>
                <ul>
                    {content.descriptions.map((description, index) => {
                        return (
                            <li key={index}>{description}</li>
                        )
                    })}
                </ul>
            </div>
         );
    }
}
 
export default ExperienceCard;