import React from 'react';
import { Content } from './Description';
import vector from '../../assets/Vector-Right.svg'

const Description = ({ children, content = {}, link }) => {
  let stylesMain = {}, stylesContainer = {};

  if (content) {
    switch(content.section) {
      case 'about':
        stylesMain = {'width': '80%'}
        stylesContainer = {'width': '90%'}
        break;
      case 'roadmap':
        stylesMain = {'width': '75%'}
        break;
      case 'BehindDesing':
        stylesMain = {'width': '80%'}
        break;
      case 'JoinUs':
        stylesMain = { 'width': '30%', 'margin': '0 auto 0 10em'}
        stylesContainer = { 'margin': '1.25em auto 4.25em auto' }
        break;
    }
  }

  return (
    <Content style={stylesMain}>
      {children}
      <h1 className='title'>{content.title}</h1>
      <div className='container' style={stylesContainer}>
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