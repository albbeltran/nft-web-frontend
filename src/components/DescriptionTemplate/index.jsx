import React from 'react';
import { Content } from './Description';
import vector from '../../assets/Vector-Right.svg'

const Description = ({ children, title, description, link, footerTxt, section }) => {
  let widthMain, widthContainer;

  if (section === 'about') {
    widthMain = { 'width': '80%' },
      widthContainer = { 'width': '90%' }
  } else if (section === 'roadmap') {
    widthMain = { 'width': '75%' }
  }

  return (
    <Content style={widthStyle}>
      {children}
      <h1 className='title'>{title}</h1>
      <div className='container' style={widthContainer}>
        <p className='description'>{description}</p>
        {link &&
          <a className='link' href='../../assets/Light_paper.pdf' target='_blank' download>
            <img src={vector} className='vector' alt='arrow'></img>
            White Paper
          </a>}
      </div>
      {footerTxt &&
        <p className='footerTxt'>\\ ABOUT US
          <br></br>
          \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        </p>
      }
    </Content >
  )
}

export { Description };