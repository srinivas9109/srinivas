import React, { useState } from "react";
import './Skills.css'
import Typical from 'react-typical';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Lottie from 'react-lottie';
import animationData from '../../assets/lotties/react.json';




export default function Skills() {
    const [skillType, setSkillType] = useState('Frontend')
    const defaultOptions={
        loop:true,
        autoplay:true,
        animationData: animationData , renderSettings:{
            preserveAspectRatio: "xMidMid slice"
        }
    };

    return (
        <div className="skill-container" id="skills">
            <h3>
                <Typical
                    loop={Infinity}
                    wrapper="p"
                    steps={[
                        "Skills", 2000,
                        "Ability", 2000,

                    ]
                    }
                /></h3>
            <div className="skills">
                <div className="skill-category">
                    <ul  >
                        <li className={(skillType==="Frontend")?"active" : "default" } onClick={() => { setSkillType('Frontend') }} >Frontend</li>
                        <li className={(skillType==="Backend")?"active" : "default" } onClick={() => { setSkillType('Backend') }}>Backend</li>
                        <li className={(skillType==="Database")?"active" : "default" } onClick={() => { setSkillType('Database') }}>Database</li>
                        <li className={(skillType==="Language")?"active" : "default" } onClick={() => { setSkillType('Language') }}>Language</li>
                    </ul>
                </div>
                <div className="divider">

                </div>

                <div className="skill-details">
                    {(skillType === 'Frontend') ?
                        (< >
                            <Zoom top><h6>HTML</h6></Zoom>
                            <Zoom left><h6>CSS</h6></Zoom>
                            <Zoom right><h6>BOOTSTRAP</h6></Zoom>
                            <Zoom bottom><h6>REACT JS</h6></Zoom>
                        </ >
                        ) : (skillType === 'Backend') ? (
                            <>
                                <Fade left><h6>NODE JS</h6></Fade>
                                <Fade right><h6>Express JS</h6></Fade>
                                <Fade left><h6>MONGOOSE</h6></Fade>
                            </>

                        ) : (skillType === 'Database') ? (
                            <>
                                <Slide left><h6>MYSQL</h6></Slide>
                                <Slide right><h6>MONGO DB</h6></Slide>

                            </>
                        ) : (
                            <>
                                <Fade top><h6>JAVA SCRIPT</h6></Fade>

                            </>)
                    }

                </div>
                <div className="divider">

                </div>
                <div className="skill-animation"> 
                <Lottie options={defaultOptions} height={120} width={120} className='lottie-size' />
                

                </div>

            </div>



        </div>
    )
}