import React, { Component } from 'react';
import Landing from './Containers/Landing';
import About from './Containers/About';
import Experience from './Containers/Experience';

//Text Content to possibly eventually come from an API
import AboutContent from './Assets/Content/Text/About';
import ExperienceContent from './Assets/Content/Text/Experience';
class Main extends Component {
    state = { 
    }
    render() { 
        return ( 
            <div>
                <Landing/>
                <About content={AboutContent.content} technologies={AboutContent.technologies}/>
                <Experience content={ExperienceContent}/>
            </div>
         );
    }
}
 
export default Main;