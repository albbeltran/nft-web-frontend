import React from 'react';
import { Content } from './Description';
import vector from '../../assets/Vector-Right.svg'

const Description = ({ children, content = {}, link }) => {
  let widthMain, widthContainer;

  if (content) {
    if (content.section === 'about') {
      widthMain = { 'width': '80%' };
      widthContainer = { 'width': '90%' };
    } else if (content.section === 'roadmap') {
      widthMain = { 'width': '75%' };
    }
  }

  return (
    <Content style={widthMain}>
      {children}
      <h1 className='title'>{content.title}</h1>
      <div className='container' style={widthContainer}>
        <p className='description' id='description' dangerouslySetInnerHTML={{__html:content.description}}></p>
        {link &&
          <a className='link' href='../../assets/Light_paper.pdf' target='_blank' download>
            <img src={vector} className='vector' alt='arrow'></img>
            White Paper
          </a>}
      </div>
    </Content >
  )
}

export { Description };