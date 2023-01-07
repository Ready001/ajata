import React from 'react'

import "./Intro.css"

type IntroProps = {};

type IntroState = {};

class Intro extends React.Component<IntroProps, IntroState> {
    
    render () {
        return (
            <div id="whole-container" >
                <h2 id="greetings">
                Hi, I'm
                </h2>
                <h4 className='about'>
                    A Computer Science major at the University of Illinois at Urbana-Champaign (UIUC)
                </h4>
            </div>
        )
    }

}

export default Intro;