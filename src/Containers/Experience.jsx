import React, { Component } from 'react';
import ExperienceCard from '../Components/Experience/ExperienceCard';
import ExperienceSwitcher from '../Components/Experience/ExperienceSwitcher';
// import Slider from '../Components/Experience/Slider';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
//React-Slick uses slick-carousel as well
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class Experience extends Component {
    state = { 
        formal: true,
        activeCard: 0
     }
    
     constructor(props){
         super(props);

         this.changeExperience = this.changeExperience.bind(this);

     }

    changeExperience(formal) {
        this.setState({
            formal,
        })
    }

    render() { 
        let {data} = this.props.content;
        let {formal} = this.state;
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            // arrows: false
          };
        return ( 
            <section className="experience-section grid">
                <div className="content-wrap">
                    <h1 className="section-title">experience</h1>
                        <ExperienceSwitcher changeExperience={this.changeExperience} formal={formal}/>
                        <div className="slider-wrap">
                            <Slider {...settings}>
                                {data.map((element, index) => {
                                    if(formal && element.formal){
                                        return (
                                            <div key={index} className="slide-wrap">
                                                <ExperienceCard content={element}/>
                                            </div>
                                        )
                                    } else if(!formal && !element.formal){
                                        return (
                                            <div key={index} className="slide-wrap">
                                                <ExperienceCard content={element}/>
                                            </div>
                                        )
                                    } else {
                                        return null;
                                    }
                                })}
                            </Slider>
                        </div>
                    </div>
            </section>
         );
    }
}
 
export default Experience;