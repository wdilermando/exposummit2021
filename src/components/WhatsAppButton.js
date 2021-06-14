import React from 'react';
import styled from 'styled-components';
import wpp from '../assets/images/wpp.png';
import { WHATSAPP_LINK } from '../utils/constants';

const WhatsAppBtn = styled.span`
  background: #25d366;
  border-radius: 50%;
  padding: 15px;
  position: fixed;
  bottom: 25px;
  right: 30px;
  z-index: 9;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

function WhatsAppButton() {
  return (
    <WhatsAppBtn>
      <a href={WHATSAPP_LINK} rel="noreferrer" target="_blank">
        <img src={wpp} alt="whatsapp" width={32} height={32} />
      </a>
    </WhatsAppBtn>
  );
}

export default WhatsAppButton;
