import React, { useState } from 'react';
// import Switch from '@material-ui/core/Switch';

import { Link } from 'react-scroll';
import './Nav.css'
export default function Nav() {
    const [flag, setFlag] = useState(false);
    const [na, setNa] = useState(true);


    const navHandler = () => {
        setFlag(!flag)
        setNa(false)

    }


    return (
        <div className='navbar'>
            <h3 className='logo'>SRINIVAS</h3>

            <ul className={flag & na ? "nav-links-mobile" : "nav-links"} >

                <Link to='skills' onClick={navHandler} >
                    <li className='nav-link' >
                        Skills
                    </li>

                </Link>

                <Link to='project' onClick={navHandler}  >
                    <li className='nav-link' >
                        Projects
                    </li>

                </Link>

                <Link to='certification' onClick={navHandler}>
                    <li className='nav-link' >

                        Certifications

                    </li>
                </Link>

                <Link to='contact' onClick={navHandler} >
                    <li className='nav-link' >

                        Contact

                    </li>
                </Link>
                {/* <li className='nav-link' >
                    <span>Theme</span>
                <Switch
                    defaultChecked
                    color="default"
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                />
                    
                </li> */}


            </ul>
            <button className='mobile-menu-icon' onClick={() => {
                setNa(true);
                setFlag(!flag)

            }}>
                {!flag ?
                    (<i class="fa-solid fa-bars"></i>) : (<i class="fa-solid fa-x"></i>)
                }
            </button>

        </div>
    )
}