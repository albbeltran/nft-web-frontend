import React from 'react';
import styled from "styled-components";

const Button = ({ text, classBtn }) => {

    return (
        <Link href='#' className={classBtn} >{text}</Link>
    )
}

const Link = styled.a`
    display: inline-block;
    text-decoration: none;
    font-size: 16px;
    color: #fff;
    border: 1px solid #fff;
    padding: 0.5em 1.5em;
    border-radius: 20px;

    &:hover {
        background-color: #fff;
        color: #000;
    }

    position: fixed;
    top:600px;
    left: 350px;
`

export { Button };