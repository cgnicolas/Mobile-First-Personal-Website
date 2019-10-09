import React, { Component } from 'react';

class Slider extends Component {
    render() { 
        let {list, activeCard} = this.props;
        return ( 
            <div className="experience-slider">
                <button type="button" onClick={() => {this.props.handleClick(0)}}>Prev</button>
                <button type="button" onClick={() => {this.props.handleClick(1)}}>Next</button>
            </div>
         );
    }
}
 
export default Slider;