import React, { Component } from 'react';


class ExperienceSwitcher extends Component {
    state = { 
        formal: this.props.formal,
     }
    render() {
        let {changeExperience} = this.props;
        let {formal} = this.state;
        return (
            <div className="experience-switcher">
                <div className="experience-switcher-content-wrap">
                    <button className={"formal-button " + ((formal) ? ("active-button") : (""))} onClick={() => changeExperience(true)}>Formal</button>
                    <button className={"formal-button " + ((!formal) ? ("active-button") : (""))} onClick={() => changeExperience(false)}>Informal</button>
                </div>
            </div>
        );
    }
}

export default ExperienceSwitcher;