import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
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
    <Link href={WHATSAPP_LINK}>
      <a rel="noreferrer" target="_blank">
        <WhatsAppBtn>
          <img src={wpp} alt="whatsapp" width={32} height={32} />
        </WhatsAppBtn>
      </a>
    </Link>
  );
}

export default WhatsAppButton;
