import React, { Component } from 'react';

class About extends Component {
    state = {  }
    render() { 
        let {content, technologies} = this.props;
        return ( 
            <div>
                <h1 className="section-title">about</h1>
                <div className="content-card">
                    {/* Image */}
                    {content.map((element, index) => {
                        return (
                            <p key={index} className="text-content">{element}</p>
                        )
                    })}
                </div>
                <div className="technologies">
                    <ul>
                        {technologies.map((technology, index) => {
                            return (
                                <li>{technology}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>  
        );
    }
}
 
export default About;