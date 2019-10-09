import React, { Component } from 'react';
import ExperienceCard from '../Components/Experience/ExperienceCard';
import ExperienceSwitcher from '../Components/Experience/ExperienceSwitcher';
class Experience extends Component {
    state = { 
        formal: true,
        activeCard: 0
     }
    
     constructor(props){
         super(props);

         this.changeExperience = this.changeExperience.bind(this);

     }

    changeExperience() {
        this.setState({
            formal: !this.state.formal,
        })
    }

    render() { 
        let {data} = this.props.content;
        let {activeCard} = this.state;
        return ( 
            <section className="experience-section grid">
                <div className="content-wrap">
                    <h1 className="section-title">experience</h1>
                    {/* <ExperienceSwitcher formal={this.state.formal} changeExperience={() => {this.changeExperience()}}/> */}
                    <div className="experience-card-wrap">
                        <div></div>
                        {data.map((element, index) => {
                            return (
                                <ExperienceCard key={index} content={element} active={(index === activeCard)}/>
                            );
                        })}
                        <div></div>
                    </div>
                </div>
            </section>
         );
    }
}
 
export default Experience;