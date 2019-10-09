import React, { Component } from 'react';

class Slider extends Component {
    state = { 
        currentItem: 0
    }
    render() { 
        let {list} = this.props;
        let {currentItem} = this.state;
        return ( 
            <div>

            </div>
         );
    }
}
 
export default Slider;