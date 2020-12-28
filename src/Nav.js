import React, { useEffect, useState } from 'react'
import './Nav.css'
import logo from './logo.svg';

function Nav() {

    const [show, handleShow] = useState(false);


    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            }
            else {
                handleShow(false);
            }
        })


        return () => {
            window.removeEventListener('scroll');
        }
    }, [])

    return (
        <div className={`nav ${show ? "nav__black" : ""} `}>
            <img src={logo} alt="nav logo" className="nav__logo" />
            <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="" className="nav__avatar" />
        </div>
    )
}

export default Nav
