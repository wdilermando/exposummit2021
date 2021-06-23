import React from 'react';
import styled from 'styled-components';
import {
  DescriptionText,
  MainTitle,
  SectionInfo,
  SubtitleText,
  BubbleText,
  HighLightText,
  CustomButton,
} from '../styles/styles';
import logo from '../assets/images/logo1.png';
import bgMain from '../assets/images/bgMain.png';

const HeroWrapper = styled.article`
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
  justify-content: space-evenly;

  @media screen and (max-width: 450px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const WrapperSubtitle = styled.div`
  width: 70%;
  @media screen and (max-width: 450px) {
    width: 90%;
  }
`;

function HeroSection() {
  return (
    <SectionInfo id="main" bg={bgMain} hero>
      <HeroWrapper>
        <img src={logo} alt="logo" width={300} height={170} />
        <BubbleText>04 A 07 DE AGOSTO</BubbleText>
        <DescriptionText textTheme="light" textAlign="center" fontSize="1.3em">
          Quer saber tudo sobre investimento em imóveis?
        </DescriptionText>
        <DescriptionText textTheme="light" textAlign="center" fontSize="1.3em">
          Participe do evento que traz as melhores atualizações e oportunidades
          de rendimentos no mercado imobiliário.
        </DescriptionText>
        <WrapperSubtitle>
          <SubtitleText textAlign="center">
            LIVES / <HighLightText>TALKS</HighLightText> / RODADAS DE NEGÓCIO /
            <br />
            <HighLightText>MESAS REDONDAS</HighLightText> / STAND DE VENDAS
          </SubtitleText>
        </WrapperSubtitle>
        <MainTitle textTheme="light" textAlign="center">
          INVESTIR EM IMÓVEIS É O BOM NEGÓCIO.
        </MainTitle>
        <CustomButton type="button" href="/#subscription" rel="noopener">
          INSCREVA-SE
        </CustomButton>
      </HeroWrapper>
    </SectionInfo>
  );
}

export default HeroSection;
