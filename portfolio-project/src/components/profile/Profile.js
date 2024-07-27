import React from 'react';
import Typical from 'react-typical';
import { Link } from 'react-scroll';

import './Profile.css'
export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a target={"_blank"} rel="noreferrer" href='https://m.facebook.com/100008971005305/'>
                                <i class="fa-brands fa-facebook"></i>
                            </a>

                            <a target={"_blank"} rel="noreferrer" href='https://www.instagram.com/tsr_vicky/'>
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                            <a target={"_blank"} rel="noreferrer" href='https://www.linkedin.com/in/tharugusrinivasulu'>
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                            <a target={"_blank"} rel="noreferrer" href='https://www.snapchat.com/add/srinivasvicky21?share_id=ujDDZ3wYvxU&locale=en-GB'>
                                <i class="fa-brands fa-snapchat-square"></i>

                            </a>

                        </div>

                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello I'M <span className='highlighted-text'>Srinivas</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    wrapper="p"
                                    steps={[
                                        "Enthusiastic ", 3000,
                                        "Web Developer", 3000,
                                        "React JS", 3000,
                                        "Node JS", 3000
                                    ]
                                    }
                                />

                            </h1>
                            <span className='profile-role-tagline'>
                                knack of building Web Applications.
                            </span>
                        </span>

                    </div>
                    <div className='profile-options'>
                        {/* <Link to='contactMe'> */}
                        <Link to='contact' >
                            <button className='btn primary-btn' >
                                {""}

                                Contact Me{" "}



                            </button>
                        </Link>
                        {/* </Link> */}

                        <a href='resume.pdf' download='Resume resumr.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>

                </div>

            </div>

        </div>
    )
}