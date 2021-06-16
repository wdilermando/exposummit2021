import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import styled from 'styled-components';
import {
  DescriptionText,
  MainTitle,
  SectionInfo,
  HighLightText,
} from '../styles/styles';
import graph from '../assets/images/graph2.png';

const motives = [
  {
    description:
      'Para entender e aproveitar as melhores oportunidades de investimento em imóveis.',
    id: 1,
  },
  {
    description:
      'Participar de encontros virtuais com palestrantes e profissionais renomados do mercado',
    id: 2,
  },
  {
    description:
      'Rodadas de Negócios exclusivas com importantes construtoras e outros agentes imobiliários',
    id: 3,
  },
  {
    description:
      'Ter acesso à plataforma de transmissão online com navegação simples e propícia para realização de bons negócios e fechar vendas',
    id: 4,
  },
  {
    description:
      'Fazer parte de um grupo diferenciado de profissionais conectados com as transformações digitais do trade imobiliário.',
    id: 5,
  },
];

const MotiveItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;

  span {
    background: ${({ theme }) => theme.colors.primary};
    text-align: center;
    margin-right: 20px;
    min-width: 50px;
    min-height: 50px;
    padding: 10px;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.light};
    font-size: 18px;
  }
`;

const MotiveList = styled.div`
  display: flex;
  flex-direction: column;
`;

function MotivesSection() {
  return (
    <SectionInfo id="motives" bg="secondary">
      <Container fluid>
        <Row>
          <Col xs="12" lg="6" md="6">
            <MainTitle textTheme="light" textAlign="center">
              POR QUE DEVO PARTICIPAR DO {'\n'}
              <HighLightText>EXPOIMOVEL SUMMIT?</HighLightText>
            </MainTitle>
            <MotiveList>
              {motives.map(item => (
                <MotiveItem key={item.id}>
                  <span>{item.id}</span>
                  <DescriptionText textTheme="light">
                    {item.description}
                  </DescriptionText>
                </MotiveItem>
              ))}
            </MotiveList>
          </Col>
          <Col>
            <Image src={graph} alt="feature" fluid />
          </Col>
        </Row>
      </Container>
    </SectionInfo>
  );
}

export default MotivesSection;
