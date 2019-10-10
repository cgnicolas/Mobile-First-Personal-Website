import React, { Component } from 'react';
import ExperienceCard from '../Components/Experience/ExperienceCard';
// import ExperienceSwitcher from '../Components/Experience/ExperienceSwitcher';
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
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
          };
        return ( 
            <section className="experience-section grid">
                <div className="content-wrap">
                    <h1 className="section-title">experience</h1>
                        {/* <CarouselProvider
                        naturalSlideWidth={347}
                        naturalSlideHeight={400}
                        totalSlides={data.length}
                        >
                            <Slider>
                                {data.map((element, index) => {
                                    return (
                                        <Slide index={index}><ExperienceCard content={element}/></Slide>
                                    )
                                })}
                            </Slider>
                            <ButtonBack>Back</ButtonBack>
                            <ButtonNext>Next</ButtonNext>
                        </CarouselProvider> */}
                        <div className="slider-wrap">
                            <Slider {...settings}>
                                {data.map((element, index) => {
                                    return (
                                        <div key={index} className="slide-wrap">
                                            <ExperienceCard content={element}/>
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>
                    </div>
            </section>
         );
    }
}
 
export default Experience;