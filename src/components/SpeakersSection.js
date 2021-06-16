import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { MainTitle, SectionInfo } from '../styles/styles';
import { Silvio, Gustavo, Joao, Saulo, Luiz } from '../assets/images/speakers';

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
      'Membro do CFA Society Brazil desde 2006, exerce atualmente o cargo de CEO da Finacap.',
    id: 6,
    name: 'Luiz Fernando Araújo',
    picture: Luiz,
    subject: 'Futuro Mercado / Mesa Redonda',
  },
];

const GridContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  justify-content: center;
  justify-items: center;

  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

const SpeakerItem = styled.article`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 450px) {
    flex-direction: column;
    align-items: center;
  }

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
      width: 100%;
      height: 150px;
      margin-bottom: 10px;
    }
  }
  div {
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    margin-left: 15px;

    @media screen and (max-width: 450px) {
      margin-left: 0px;
    }
  }
`;

const SmallDescription = styled.small`
  color: white;
  font-size: ${({ size }) => (size ? `${size}px` : null)};
  line-height: 16px;
  @media screen and (max-width: 450px) {
    margin-top: 10px;
  }
`;

const DescriptionTextCustom = styled.p`
  color: ${({ textTheme }) => (textTheme === 'light' ? '#FFFFFF' : '#225C9C')};
  font-size: ${({ fontSize }) => fontSize || '1.1rem'};
  font-weight: 400;
  margin-bottom: 0;
  white-space: pre-wrap;
  width: 80%;
  text-align: ${({ textAlign }) =>
    textAlign === 'center' ? 'center' : textAlign};
  @media screen and (max-width: 450px) {
    margin-bottom: 1vh;
    width: 100%;
  }
`;

function SpeakersSection() {
  return (
    <SectionInfo id="motives" bg="primary">
      <Container>
        <Row>
          <Col>
            <MainTitle textTheme="light" textAlign="center">
              CONHEÇA OS PALESTRANTES DOS PRINCIPAIS PLAYERS {'\n'}
              DO MERCADO QUE ESTÃO CONOSCO NESTA EDIÇÃO.
            </MainTitle>
            <GridContainer>
              {motives.map(item => (
                <SpeakerItem key={item.id}>
                  <span>
                    <img src={item.picture} alt={item.name} />
                  </span>
                  <div>
                    <DescriptionTextCustom textTheme="light">
                      {item.name}
                    </DescriptionTextCustom>
                    <SmallDescription>{item.subject}</SmallDescription>
                    <SmallDescription size={15}>
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
