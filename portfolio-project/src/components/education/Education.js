import React from 'react';
import './Education.css'
import Typical from 'react-typical';
import Fade from 'react-reveal/Fade';
import Lottie from 'react-lottie';
import animationData from '../../assets/lotties/edu/tenth.json';
import animationD from '../../assets/lotties/edu/inter.json';
import animationDa from '../../assets/lotties/edu/btech.json';

export default function Education() {
    const defaultOptions={
        loop:true,
        autoplay:true,
        animationData: animationData , renderSettings:{
            preserveAspectRatio: "xMidMid slice"
        }
    };
    const defaultOp={
        loop:true,
        autoplay:true,
        animationData: animationD , renderSettings:{
            preserveAspectRatio: "xMidMid slice"
        }
    };
    const defaultO={
        loop:true,
        autoplay:true,
        animationData: animationDa , renderSettings:{
            preserveAspectRatio: "xMidMid slice"
        }
    };
    return (
        <div className='edu-container'>
            <div className='edu-title'>
                <h3>
                    <Typical
                        loop={Infinity}
                        wrapper="p"
                        steps={[
                            "Education", 2000,
                            "Details", 2000,

                        ]
                        }
                    /></h3>

            </div>
            <Fade left>
                <div className='edu-x'>

                    <div className='edu-details'>
                        <h3>X</h3>
                        <p>Sri Chaitanya Children's Academy</p>
                        <p><span>8.7 | 10.0</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>2015</span></p>
                    </div>
                    <div className='edu-logo'>
                    <Lottie options={defaultOptions} height={120} width={120}  />

                    </div>
                </div>

            </Fade>
            <Fade right>
                <div className='edu-xii'>
                    <div className='edu-logo'>
                    <Lottie options={defaultOp} height={120} width={120}  />
                    </div>

                    <div className='edu-details'>
                        <h3>XII</h3>
                        <p>Narayana Junior College</p>
                        <p><span>984 | 1000</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>2015 | 2017</span></p>

                    </div>

                </div>

            </Fade>
            <Fade left>
                <div className='edu-btech'>

                    <div className='edu-details'>
                        <h3>B.tech</h3>
                        <p>Vel Tech University</p>
                        <p><span>8.7 | 10.0</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>2017 | 2021</span></p>

                    </div>
                    <div className='edu-logo'>
                    <Lottie options={defaultO} height={120} width={120}  />
                    </div>

                </div>

            </Fade>
        </div>
    )
}