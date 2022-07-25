import React, { useState } from 'react';
import { Nav } from './Navegation';
import { NavLink } from "react-router-dom";
import Image from '../../assets/unicorn-full.png'

const Navegation = ({ path, setPath }) => {
    const [display, setDisplay] = useState('none');

    let unicornDisplay = {
        'display': `${display}`
    }

    const changeDisplay = () => {
        if (display == 'none') {
            setDisplay('block');
        } else {
            setDisplay('none');
        }
        unicornDisplay = {
            'display': `${display}`,
        }
    }

    return (
        <Nav>
            <NavLink className="link about" to="/about" onClick={() => setPath('/about')} onMouseEnter={changeDisplay} onMouseLeave={changeDisplay}>
                About us
            </NavLink>
            <NavLink className="link roadmap" to="/roadmap" onClick={() => setPath('/roadmap')} onMouseEnter={changeDisplay} onMouseLeave={changeDisplay}>
                Roadmap
            </NavLink>
            <NavLink className="link join" to="/join" onClick={() => setPath('/join')} onMouseEnter={changeDisplay} onMouseLeave={changeDisplay}>
                Join us
            </NavLink>
            <NavLink className="link faq" to="/faq" onClick={() => setPath('/faq')} onMouseEnter={changeDisplay} onMouseLeave={changeDisplay}>
                FAQ
            </NavLink>
            <NavLink className="link design" to="/behind-design" onClick={() => setPath('/behind-design')} onMouseEnter={changeDisplay} onMouseLeave={changeDisplay}>
                Behind the design
            </NavLink>
            <NavLink className="link team" to="/team" onClick={() => setPath('/team')} onMouseEnter={changeDisplay} onMouseLeave={changeDisplay}>
                Meet the team
            </NavLink>
            <img src={Image} className='unicorn-full' style={unicornDisplay}></img>
        </Nav>
    )
}

export { Navegation };