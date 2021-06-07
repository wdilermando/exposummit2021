import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { DescriptionText, MainTitle, SectionInfo } from '../styles/styles';
import silvio from '../assets/images/speakers/silvio.jpg';

const motives = [
  {
    description:
      'Cientista, professor e empreendedor brasileiro com atuação na área de engenharia de software e inovação',
    id: 1,
    name: 'Silvio Meira',
    picture: silvio,
    subject: 'Transformação Digital / Abertura',
  },
  {
    description:
      'Cientista, professor e empreendedor brasileiro com atuação na área de engenharia de software e inovação',
    id: 2,
    name: 'Silvio Meira',
    picture: silvio,
    subject: 'Transformação Digital / Abertura',
  },
  {
    description:
      'Cientista, professor e empreendedor brasileiro com atuação na área de engenharia de software e inovação',
    id: 3,
    name: 'Silvio Meira',
    picture: silvio,
    subject: 'Transformação Digital / Abertura',
  },
  {
    description:
      'Cientista, professor e empreendedor brasileiro com atuação na área de engenharia de software e inovação',
    id: 4,
    name: 'Silvio Meira',
    picture: silvio,
    subject: 'Transformação Digital / Abertura',
  },
  {
    description:
      'Cientista, professor e empreendedor brasileiro com atuação na área de engenharia de software e inovação',
    id: 5,
    name: 'Silvio Meira',
    picture: silvio,
    subject: 'Transformação Digital / Abertura',
  },
  {
    description:
      'Cientista, professor e empreendedor brasileiro com atuação na área de engenharia de software e inovação',
    id: 6,
    name: 'Silvio Meira',
    picture: silvio,
    subject: 'Transformação Digital / Abertura',
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
                    <img
                      src={item.picture}
                      alt={item.name}
                      width={200}
                      height={100}
                    />
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
