import React from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import { HighLightText, MainTitle, SectionInfo } from '../styles/styles';
import map from '../assets/images/map.png';

function MapSection() {
  return (
    <SectionInfo id="map" bg="secondary">
      <Container>
        <Row>
          <Col>
            <MainTitle textTheme="light" textAlign="center">
              Experimente a praticidade da nossa plataforma. {'\n'}
              Navegue por múltiplos ambientes. {'\n'}
              <HighLightText>
                A transformação do mercado imobiliário começa aqui.
              </HighLightText>
            </MainTitle>
            <Image src={map} alt="event map" width={1440} height={847} />
          </Col>
        </Row>
      </Container>
    </SectionInfo>
  );
}

export default MapSection;
