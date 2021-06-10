import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { DescriptionText, MainTitle, SectionInfo } from '../styles/styles';
import {
  Silvio,
  Eduardo,
  Gustavo,
  Joao,
  Peixoto,
  Saulo,
} from '../assets/images/speakers';

const motives = [
  {
    description:
      'Cientista, professor e empreendedor brasileiro com atuação na área de engenharia de software e inovação',
    id: 1,
    name: 'Silvio Meira',
    picture: Silvio,
    subject: 'Transformação Digital / Abertura',
  },
  {
    description:
      'Analista e Gestor de Carteiras na Gari Investimentos, sócio da Slice Investimentos.',
    id: 2,
    name: 'João Arthur',
    picture: Joao,
    subject: 'Futuro Mercado / Mesa Redonda',
  },
  {
    description: 'CEO da StartUp Molegolar e empreendedor da engenharia civil.',
    id: 3,
    name: 'Saulo Suassuna',
    picture: Saulo,
    subject: 'Futuro Mercado / Mesa Redonda',
  },
  {
    description: 'Referência no mercado imobiliário em marketing e inovação',
    id: 4,
    name: 'Gustavo Zanotto',
    picture: Gustavo,
    subject: 'Futuro Mercado / Mesa Redonda',
  },
  {
    description:
      'CEO RE/MAX Brasil e Palestrante da área de reestruturação de empresas, startups e franchising.',
    id: 5,
    name: 'Peixoto Accioly',
    picture: Peixoto,
    subject: 'Reestruturação / Mesa Redonda',
  },
  {
    description:
      'CO-Founder & CEO da Yuca e referência no conceito City Living.',
    id: 6,
    name: 'Eduardo Brennand',
    picture: Eduardo,
    subject: 'Futuro Mercado / Mesa Redonda',
  },
];

const GridContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  justify-content: center;
  justify-items: center;
`;

const SpeakerItem = styled.article`
  display: flex;
  flex-direction: row;

  span img {
    -webkit-border-radius: 30px;
    -webkit-border-bottom-left-radius: 0;
    -moz-border-radius: 30px;
    -moz-border-radius-bottomleft: 0;
    border-radius: 30px;
    border-bottom-left-radius: 0;
    object-fit: cover;
    width: 200px;
    height: 100px;
    @media screen and (max-width: 450px) {
      width: 150px;
      height: 80px;
    }
  }
  div {
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    margin-left: 15px;
  }
`;

const SmallDescription = styled.small`
  color: white;
  font-size: ${({ size }) => (size ? `${size}px` : null)};
`;

function SpeakersSection() {
  return (
    <SectionInfo id="motives" bg="primary">
      <Container>
        <Row>
          <Col>
            <MainTitle textTheme="light" textAlign="center">
              Conheça os palestrantes dos principais players{'\n'}do mercado que
              estão conosco nesta edição.
            </MainTitle>
            <GridContainer>
              {motives.map(item => (
                <SpeakerItem key={item.id}>
                  <span>
                    <img src={item.picture} alt={item.name} />
                  </span>
                  <div>
                    <DescriptionText textTheme="light">
                      {item.name}
                    </DescriptionText>
                    <SmallDescription>{item.subject}</SmallDescription>
                    <SmallDescription size={14}>
                      {item.description}
                    </SmallDescription>
                  </div>
                </SpeakerItem>
              ))}
            </GridContainer>
          </Col>
        </Row>
      </Container>
    </SectionInfo>
  );
}

export default SpeakersSection;
