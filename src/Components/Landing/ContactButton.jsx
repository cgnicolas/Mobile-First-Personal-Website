import React, { Component } from 'react';

class ContactButton extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="contactButton">
                <a className="buttonTitle" href="#"><p>{this.props.buttonTitle}</p></a>
            </div>
         );
    }
}
 
export default ContactButton;