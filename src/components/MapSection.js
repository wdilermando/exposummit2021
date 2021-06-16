import React, { useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import ModalVideo from 'react-modal-video';
import styled from 'styled-components';
import { HighLightText, MainTitle, SectionInfo } from '../styles/styles';
import map from '../assets/images/map.png';
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
            EXPERIMENTE A PRATICIDADE DA NOSSA PLATAFORMA, {'\n'} NAVEGUE POR
            MÚLTIPLOS AMBIENTES.
            {'\n'}
            <HighLightText size="22px">
              A transformação do mercado imobiliário começa aqui.
            </HighLightText>
          </MainTitle>
        </Container>
        <WrapperVideo onClick={() => setOpen(true)}>
          <Image src={map} alt="event map" fluid />
        </WrapperVideo>
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
