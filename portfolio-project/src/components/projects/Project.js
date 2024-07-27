import React from "react";
import Typical from 'react-typical';

import './Project.css'
import ShowMore from 'react-show-more-button';
// import ShowMore from 'react-show-more-button/dist/module';

export default function Project() {
   

    return (
        <div className="project-container" id='project'>

            <h3>
                <Typical
                    loop={Infinity}
                    wrapper="p"
                    steps={[
                        "Projects", 2000,
                        "Seminars", 2000,

                    ]
                    }
                /></h3>
            <div className="project-details">
                <div className="engg">
                    <h1>Engineering Projects</h1>
                    <div className="project">
                        <h5>REDUCTION OF MUTUAL COUPLING AND CROSS-POLARIZATION OF A MIMO ANTENNA USING MODIFIED DGS</h5>
                        <ShowMore maxHeight={80} className='showmore'>
                            <p>
                                <span> ABSTRACT : </span>
                                A simple string of modified defected ground structure is used to reduce the coupling and cross-polarization of a MIMO antenna. A MIMO antenna has been designed using two identical square patches to operate at the frequency of 2.5 GHZ. The proposed DGS decreases the direct coupling path among the closely spaced patches and therefore mutual coupling and cross-polarization will reduced. Amount of mutual coupling is decoupled by determining the coupling to decoupling ratio (CDR). A mathematical formula is developed using multiple polynomial regression analysis techniques to observe CDR The overall performance is measured in terms of S parameter, radiation pattern, and Envelope Correlation Coefficient, Mean Effective Gain (MEG) ratio. <br />
                                <br />
                                Mean Effective Gain (MEG) ratio. The mutual coupling also affects the antenna input impedance in multi-element antenna (MEA) systems. Hence, the current distribution of the individual antenna are changed. MAE system such as multiple-input multiple-output (MIMO) becomes as essential component for present wireless communication. Diversity is used to represent the capabilities of the MIMO antenna to transmit and receive multiple independent copies of the signal, MIMO systems are used to increase channel capacity which enables higher bit-rate transmission.<br />
                                <br />
                                Click here for Report:
                                <a target={"_blank"} rel="noreferrer"  href="https://docs.google.com/document/d/1k9-8nQn64D-kPq31sd51W2Mp_JuPOn6o/edit?usp=drivesdk&ouid=101587002588499430710&rtpof=true&sd=true">Report</a>
                            </p>
                        </ShowMore>
                        <h5> BANDWIDTH ENHANCEMENT OF MICROSTRIP PATCH ANTENNAS USING EBG</h5>
                        <ShowMore maxHeight={80} className='showmore'>
                            <p>
                                <span> ABSTRACT : </span>
                                In an era of increasing mobility, there will be a necessity that people communicate with each
                                other irrespective of the location or information of the individuals. Wireless communication plays a
                                major role in this regard. The increase in demand for wireless communication has paved the way for
                                better comprehension of issues in electromagnetic and communication theory. In a various wireless
                                communication system, a significant role in making the system reliable and elevating its performance
                                is played by a device known as ‘antenna’. <br />
                                <br />
                                Microstrip antenna is one of the latest technologies in antennas and electromagnetic appli-
                                cations. It is widely used nowadays in the wireless communication system due to its simplicity and

                                compatibility with recent advancements in printed circuit technology. The purpose of microstrip is
                                to radiate and receive electromagnetic energy in the microwave range and it plays an important role
                                in wireless communication applications. The performance and operation of a microstrip antenna are
                                dependent on the geometry of the printed patch and the material characteristics of the substrate onto
                                which the antenna is printed. It has many applications over a broad frequency range from around 100
                                MHz to 100 GHz.<br />
                                <br />
                                Click here for Report:
                                <a target={"_blank"}  rel="noreferrer" href="https://drive.google.com/file/d/1jdiVkjEcjScRjEDjSp3uvpfv6xRWR7UV">Report</a>
                            </p>
                        </ShowMore>

                    </div>
                    <h1>Seminar</h1>
                    <div className="project">
                        <h5>GSM BASED UNMANNED AERIAL DRONE CROP PROTECTOR</h5>
                        <ShowMore maxHeight={80} className='showmore'>
                            <p>
                                <span> ABSTRACT : </span>
                                The mobility of UAV(Unmanned Aerial VehicleDrone) with GSM monitoring system used
                                for data retrieval. The main objective of this project is to develop GSM monitoring system to collect
                                real time information by interfacing with arduino. Arduino which gives the proper signal to flight
                                controller. To maintain stability and sustained operation, Pixhawk flight controller is used. The GSM
                                is processed and produce a digital output. The digital output is then interfaced with arduino uno
                                microcontroller by connecting TXD of GSM with RXD of arduino and vice versa. The interfaced
                                output is used to activate the drone. Based on the arduino program, the drone is used for enhancing
                                agricultural activities like spraying pesticides and water. <br />
                                <br />
                                Unmanned Aerial Vehicles (UAVs) in Agriculture and especially in crop protection. All tests

                                have been carried out in the island of Crete in Greece. Specific applications are: a) detection of symp-
                                toms (canopy discoloration) of pest or disease infestation on olive trees, b) mapping of Palm trees

                                and identification of visible signs of infestation by the red palm weevil Rhynchophorus ferrugineus in
                                large palm plantations, c) co-operation of UAV with electronic traps that automatically count insects
                                and send counts to a server which, in turn summons and direct drones to spray in designated areas.
                                Equipment and software, step by step methodology and practical applications of each of the three
                                cases are described. We seek new application of drones in view to expand their possible uses that will
                                allow them to penetrate the business of small to medium sized regional stakeholders. This work puts
                                its emphasis on the practical details of the implementations, serving as a useful reference to relevant
                                field-work.<br />
                                <br />
                                Click here for Report:
                                <a target={"_blank"} rel="noreferrer"  href="https://drive.google.com/file/d/1jtK3NhRCWHr8YNLKfFCVIFGawxhQ8iwh">Report</a>
                            </p>
                        </ShowMore>
                        <h5>EduMEMS-DEVELOPING MULTIDOMAIN MEMS MODELS FOR EDUCATIONAL PURPOSES</h5>
                        <ShowMore maxHeight={80} className='showmore'>
                            <p>
                                <span> ABSTRACT : </span>
                                Micro-Electro-Mechanical Systems (MEMS) technology has been identified as one of the
                                most promising technologies in the 21st century. MEMS technology has opened up a wide array of
                                unforeseen applications. Hence it is necessary to train the technocrats of tomorrow in this emerging
                                field to meet the industrial/societal demands. The drive behind fostering of MEMS technology is the
                                reduction in the cost, size, weight, and power consumption of the sensors, actuators, and associated
                                electronics. <br />
                                <br />
                                MEMS is a multidisciplinary engineering , Hence MEMS education needs a special approach
                                to prepare the technocrats for a career in MEMS. The modern education methodology using computer

                                based training systems (CBTS) with embedded modeling and simulation tools will help in this direc-
                                tion. The availability of computer based learning resources such as MATLAB, ANSYS/Multiphysics

                                and rapid prototyping tools have contributed to proposition of an efficient teaching-learning frame-
                                work for MEMS education presented in this paper. A Conceptual framework for teaching/learning

                                MEMS-EduMEMS, in the current technical education scenario has been studied .<br />
                                <br />
                                Click here for Report:
                                <a target={"_blank"}  rel="noreferrer" href="https://drive.google.com/file/d/1jv0JilGkXH98Vcau5nEhW4QWop945tDV/view">Report</a>
                            </p>
                        </ShowMore>
                    </div>

                </div>

            </div>

        </div>
    )
}