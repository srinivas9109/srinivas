import React from "react";
import './Hobbies.css';
import Typical from 'react-typical';
export default function Hobbies(){
    return(
        <div className="hobbies-container">
            <div className="hobbies-title">
            <h3>
                <Typical
                    loop={Infinity}
                    wrapper="p"
                    steps={[
                        "My", 2000,
                        "Hobbies", 2000,
                    ]
                    }
                /></h3>

            </div>
            <div className="Hobbies-card">
                <div className="card">
                    <img src={require('../../assets/home/acting.png')} alt='not loaded' />
                    <div className="card-title">
                        <h3>Acting</h3>
                    </div>
                </div>
                <div className="card">
                    <img src={require('../../assets/home/photography.jpg')} alt='not loaded' />
                    <div className="card-title">
                        <h3>Photography</h3>
                    </div>
                </div>
                <div className="card">
                    <img src={require('../../assets/home/traveling.png')} alt='not loaded' />
                    <div className="card-title">
                        <h3>Travelling</h3>
                    </div>
                </div>
                <div className="card">
                    <img src={require('../../assets/home/swimming.png')} alt='not loaded' />
                    <div className="card-title">
                        <h3>Swimming</h3>
                    </div>
                </div>
                <div className="card">
                    <img src={require('../../assets/home/music.png')} alt='not loaded' />
                    <div className="card-title">
                        <h3>Listening Music</h3>
                    </div>
                </div>
                <div className="card">
                    <img src={require('../../assets/home/exercise.png')} alt='not loaded' />
                    <div className="card-title">
                        <h3>Exercise</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}