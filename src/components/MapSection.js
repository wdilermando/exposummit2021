import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import ModalVideo from 'react-modal-video';
import styled from 'styled-components';
import { HighLightText, MainTitle, SectionInfo } from '../styles/styles';
import map from '../assets/images/map2.png';
import video from '../assets/videos/exposummitvideo.mp4';

const WrapperVideo = styled.div`
  cursor: pointer;
`;

function MapSection() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <SectionInfo id="map" bg="secondary">
        <Container fluid>
          <MainTitle textTheme="light" textAlign="center">
            Experimente a praticidade da nossa plataforma. {'\n'}
            Navegue por múltiplos ambientes. {'\n'}
            <HighLightText>
              A transformação do mercado imobiliário começa aqui.
            </HighLightText>
          </MainTitle>
          <WrapperVideo onClick={() => setOpen(true)}>
            <Image
              src={map}
              alt="event map"
              width={1440}
              height={847}
              layout="responsive"
              quality="100"
            />
          </WrapperVideo>
        </Container>
      </SectionInfo>
      <ModalVideo
        channel="custom"
        url={video}
        autoplay
        allowFullScreen
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

export default MapSection;
