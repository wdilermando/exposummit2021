import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import useSWR from 'swr';
import { ALL_SPEAKERS } from '../lib/queries';
import { fetcher } from '../lib/api';
import { MainTitle, SectionInfo } from '../styles/styles';

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
  const { data, error } = useSWR(ALL_SPEAKERS, fetcher);

  if (error) {
    return (
      <div>
        <pre>
          Não foi possível carregar a lista de PALESTRANTES, volte novamente
          mais tarde :(
        </pre>
      </div>
    );
  }

  if (data) {
    return (
      <SectionInfo id="speakers" bg="primary">
        <Container>
          <Row>
            <Col>
              <MainTitle textTheme="light" textAlign="center">
                CONHEÇA OS PALESTRANTES DOS PRINCIPAIS PLAYERS {'\n'}
                DO MERCADO QUE ESTÃO CONOSCO NESTA EDIÇÃO.
              </MainTitle>
              <GridContainer>
                {data.allSpeakers.map((item) => (
                  <SpeakerItem key={item.id}>
                    <span>
                      <img src={item.picture.url} alt={item.name} />
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

  return (
    <div>
      <span>Loading...</span>
    </div>
  );
}

export default SpeakersSection;
