import React, { Component } from 'react';

class Experience extends Component {
    state = {  }
    render() { 
        let {data} = this.props.content;
        return ( 
            <div>
                {/* Experience Switcher */}
                {data.map((element, index) => {
                    return (
                        <div>{element.title}</div>
                    );
                })}
            </div>
         );
    }
}
 
export default Experience;