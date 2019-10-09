import React, { Component } from 'react';
import ExperienceCard from '../Components/Experience/ExperienceCard';
import ExperienceSwitcher from '../Components/Experience/ExperienceSwitcher';
import Slider from '../Components/Experience/Slider';
class Experience extends Component {
    state = { 
        formal: true,
        activeCard: 0
     }
    
     constructor(props){
         super(props);

         this.changeExperience = this.changeExperience.bind(this);
         this.changeActiveCard = this.changeActiveCard.bind(this);

     }

    changeExperience() {
        this.setState({
            formal: !this.state.formal,
        })
    }

    changeActiveCard(direction) {
        let {activeCard} = this.state;
        let {data} = this.props.content;
        if(direction && activeCard + 1 < data.length){
            activeCard++;
            this.setState({activeCard});
        } else if(!direction && activeCard > 0) {
            activeCard--;
            this.setState({activeCard});
        }
        console.log(activeCard)
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
                    <Slider handleClick={this.changeActiveCard}/>
                </div>
            </section>
         );
    }
}
 
export default Experience;