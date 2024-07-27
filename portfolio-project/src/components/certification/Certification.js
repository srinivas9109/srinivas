import React, { useState } from "react";
import './Certification.css';
import Typical from 'react-typical';
import Carousel from 'react-bootstrap/Carousel';
export default function Certification() {
        const [index, setIndex] = useState(0);
        const handleSelect = (selectedIndex, e) => {
                          setIndex(selectedIndex);
        };
    return (
        <div className="certification-container" id="certification">
            <div className="certification-title">
                <h3>
                    <Typical
                        loop={Infinity}
                        wrapper="p"
                        steps={[
                            "My", 2000,
                            "Certifications", 2000,
                        ]
                        }
                    /></h3>
            </div>
            <div className="certifications">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img 
                            className="d-block  w-100  "
                            src={require('../../assets/home/certificate/mysql.jpg')}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert</h3>
                            <a target={"_blank"} rel="noreferrer"   href="https://www.udemy.com/certificate/UC-ed2aa3fe-094b-4608-b470-f188dc33bb86/"> Show Credential</a>

                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img 
                            className="d-block  w-100  "
                            src={require('../../assets/home/certificate/html-css.jpg')}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Web Design for Beginners: Real World Coding in HTML & CSS</h3>
                            <a target={"_blank"} rel="noreferrer"   href="https://www.udemy.com/certificate/UC-4c409ffd-8c5a-4b43-b0c9-7f42848b04ee/"> Show Credential</a>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            className="d-block  w-100  "
                            src={require('../../assets/home/certificate/mysqlBasics.jpg')}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>MySQL Basics</h3>
                            <a target={"_blank"} rel="noreferrer"   href="https://verify.mygreatlearning.com/OXYXJQWA"> Show Credential</a>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}