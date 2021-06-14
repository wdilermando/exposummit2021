import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { DescriptionText, SectionInfo, MainTitle } from '../styles/styles';
import sketch from '../assets/images/sketch.png';
import bubble from '../assets/images/bubble1.png';
import SubscriptionForm from './SubscriptionForm';

function FormSection() {
  return (
    <SectionInfo id="subscription">
      <Container>
        <Row>
          <Col xs="12" lg="6" md="6">
            <span>
              <img src={bubble} alt="apresentacao" width={143} height={80} />
            </span>
            <Image src={sketch} alt="feature" fluid />
            <br />
            <br />
            <br />
            <DescriptionText textAlign="justify">
              Somos a grande oportunidade digital de transformação do mercado
              imobiliário. Conectamos o seu negócio com os principais
              investidores do país.
            </DescriptionText>
            <br />
            <DescriptionText textAlign="justify">
              Uma programação completa com Lives de importantes construtoras,
              Talks com consultores em investimentos e referências do mercado
              imobiliário e de tecnologia, além de Stands Virtuais com Rodadas
              de Negócio voltadas para o fechamento da venda.
            </DescriptionText>
            <br />
            <DescriptionText textAlign="justify">
              Bem-vindos a Expoimóvel Summit 2021 e faça o seu imóvel valer
              mais.
            </DescriptionText>
          </Col>
          <Col>
            <div className="mt-5">
              <MainTitle textTheme="primary" textAlign="center">
                INSCREVA-SE GRATUITAMENTE
              </MainTitle>
              <SubscriptionForm />
            </div>
          </Col>
        </Row>
      </Container>
    </SectionInfo>
  );
}

export default FormSection;
