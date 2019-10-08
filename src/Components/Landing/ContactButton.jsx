import React, { Component } from 'react';

class ContactButton extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="contactButton">
                <span className="buttonTitle">{this.props.buttonTitle}</span>
            </div>
         );
    }
}
 
export default ContactButton;