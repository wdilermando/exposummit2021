import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import wpp from '../assets/images/wpp.png';

const WhatsAppBtn = styled.span`
  background: #25d366;
  border-radius: 50%;
  padding: 15px;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 9;
`;

function WhatsAppButton() {
  return (
    <WhatsAppBtn>
      <img src={wpp} alt="whatsapp" width={32} height={32} />
    </WhatsAppBtn>
  );
}

export default WhatsAppButton;
