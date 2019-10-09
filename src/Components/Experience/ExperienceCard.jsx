import React, { Component } from 'react';

class ExperienceCard extends Component {
    state = {  }
    render() { 
        let {content, active} = this.props;
        return ( 
            <div className={"experience-card " + ((active) ? ("active-card") : (""))}>
                <div className="experience-card-content-wrap">
                    <h2>{content.title}</h2>
                    <ul>
                        {content.descriptions.map((description, index) => {
                            return (
                                <li key={index}><p>{description}</p></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
         );
    }
}
 
export default ExperienceCard;