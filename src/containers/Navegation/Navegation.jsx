import React, { useState } from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Image from '../../assets/unicorn-full.png'

const Navegation = () => {
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
        <>
            <Nav>
                <NavLink className="link about" to="/about" onMouseEnter={changeDisplay} onMouseLeave={changeDisplay}>
                    About us
                </NavLink>
                <NavLink className="link roadmap" to="/roadmap" onMouseEnter={changeDisplay} onMouseLeave={changeDisplay}>
                    Roadmap
                </NavLink>
                <NavLink className="link join" to="/join" onMouseEnter={changeDisplay} onMouseLeave={changeDisplay}>
                    Join us
                </NavLink>
                <NavLink className="link faq" to="/faq" onMouseEnter={changeDisplay} onMouseLeave={changeDisplay}>
                    FAQ
                </NavLink>
                <NavLink className="link design" to="/design" onMouseEnter={changeDisplay} onMouseLeave={changeDisplay}>
                    Behind the design
                </NavLink>
                <NavLink className="link team" to="/team" onMouseEnter={changeDisplay} onMouseLeave={changeDisplay}>
                    Meet the team
                </NavLink>
                <img src={Image} className='unicorn-full' style={unicornDisplay}></img>
            </Nav>
        </>
    )
}

const Nav = styled.nav`

    .unicorn-full {
        display: inline-block;
        z-index: 0;
        width: 85%;
        margin-top: 120px;
        margin-left: 60px;
        animation: fadeIn 0.25s;
    }
    
    .link {
        display: inline-block;
        position: fixed;
        text-decoration: none;
        color: white;
        font-size: 18px;
        font-family: 'Courier New', Courier, monospace;
        z-index: 1;
    }

    .about {
        position: fixed;
        margin-top: 90px;
        margin-left: -10px;
    }

    .roadmap {
        position: fixed;
        margin-top: 265px;
        margin-left: -20px;
    }

    .faq {
        position: fixed;
        margin-top: 257px;
        margin-left: 460px;
    }

    .join {
        position: fixed;
        margin-top: 300px;
        margin-left: 205px;
    }

    .design {
        position: fixed;
        margin-top: 390px;
        margin-left: 12px;
    }

    .team {
        position: fixed;
        margin-top: 410px;
        margin-left: 380px;
    }

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`;

export { Navegation };