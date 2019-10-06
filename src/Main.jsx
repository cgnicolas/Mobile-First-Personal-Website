import React, { Component } from 'react';
import Landing from './Containers/Landing';
import About from './Containers/About';
import Experience from './Containers/Experience';

//Text Content to possibly eventually come from an API
import AboutContent from './Assets/Content/About';
import ExperienceContent from './Assets/Content/Experience';
class Main extends Component {
    state = { 
    }
    render() { 
        return ( 
            <div>
                <section>
                    <Landing/>
                </section>

                <section>
                    <About content={AboutContent.content} technologies={AboutContent.technologies}/>
                </section>

                <section>
                    <Experience content={ExperienceContent}/>
                </section>

            </div>
         );
    }
}
 
export default Main;