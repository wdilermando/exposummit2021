import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { MainTitle, SectionInfo } from '../styles/styles';
import {
  Silvio,
  Gustavo,
  Joao,
  Saulo,
  Luiz,
  Ecio,
} from '../assets/images/speakers';

const motives = [
  {
    description:
      'Silvio Meira é professor extraordinário da Cesar School e o Cientista-Chefe na The Digital Strategy Company. É Professor Emérito do Centro de Informática da UFPE',
    id: 1,
    name: 'Silvio Meira',
    picture: Silvio,
    subject: 'Transformação Digital / Abertura',
  },
  {
    description:
      'Analista e Gestor de Carteiras na Garín Investimentos, sócio da Slice Investimentos',
    id: 2,
    name: 'João Arthur',
    picture: Joao,
    subject: 'Futuro Mercado / Mesa Redonda',
  },
  {
    description: 'CEO da StartUp Molegolar e empreendedor da Engenharia Civil.',
    id: 3,
    name: 'Saulo Suassuna',
    picture: Saulo,
    subject: 'Futuro Mercado / Mesa Redonda',
  },
  {
    description: 'Referência no mercado imobiliário em Marketing e Inovação',
    id: 4,
    name: 'Gustavo Zanotto',
    picture: Gustavo,
    subject: 'Futuro Mercado / Mesa Redonda',
  },
  {
    description:
      'Economista, M.S., Ph.D. e Pós-Doutor em Economia. Professor da UFPE. Colunista da CBN Recife e do Diário de Pernambuco. Consultor com mais de 500 projetos de viabilidade e captações acima de R$ 100 Milhões.',
    id: 5,
    name: 'Ecio Costa',
    picture: Ecio,
    subject: 'Economia e Negócios / Palestrante',
  },
  {
    description: 'CEO da Finacap.',
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
  width: 100%;

  @media screen and (max-width: 450px) {
    flex-direction: column;
    align-items: baseline;
    width: 100%;
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
    justify-content: start;
    margin-left: 15px;
    text-align: left;

    @media screen and (max-width: 450px) {
      margin-left: 0px;
    }
  }
`;

const SmallDescription = styled.small`
  color: white;
  font-size: ${({ size }) => (size ? `${size}px` : null)};
  line-height: 21px;
  margin-bottom: 1vh;
  @media screen and (max-width: 450px) {
    margin-top: 10px;
    font-size: 17px;
  }
`;

const DescriptionTextCustom = styled.p`
  color: ${({ textTheme }) => (textTheme === 'light' ? '#FFFFFF' : '#225C9C')};
  font-size: ${({ fontSize }) => fontSize || '1.3em'};
  font-weight: 700;
  margin-bottom: 0;
  text-align: ${({ textAlign }) =>
    textAlign === 'center' ? 'center' : textAlign};
  @media screen and (max-width: 450px) {
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
