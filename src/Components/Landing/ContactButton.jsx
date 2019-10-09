import React, { Component } from 'react';

class ContactButton extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="contactButton">
                <span className="buttonTitle"><p>{this.props.buttonTitle}</p></span>
            </div>
         );
    }
}
 
export default ContactButton;