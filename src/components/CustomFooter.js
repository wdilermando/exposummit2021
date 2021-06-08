import React from 'react';
import {
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Nav,
  Row,
} from 'react-bootstrap';
import styled from 'styled-components';
import Image from 'next/image';
import logo from '../assets/images/logo2.png';
import fbImage from '../assets/images/socials/facebook.png';
import LeadForm from './LeadForm';

const Footer = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  padding-top: 10vh;
  padding-bottom: 10vh;
  color: ${({ theme }) => theme.colors.light};
`;

const InfosSocial = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 14px;

  span {
    white-space: pre-wrap;
  }
`;

const WrapperFormLead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  small {
    text-align: right;
    font-size: 12px;
    margin-right: 5px;
    width: 50%;
  }

  @media screen and (max-width: 450px) {
    flex-direction: column;

    small {
      text-align: center;
      font-size: 12px;
      margin-bottom: 10px;
    }
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 1em;

  a {
    margin-left: 15px;
  }
`;

function CustomFooter() {
  return (
    <Footer id="contact">
      <Container>
        <Row>
          <Col xs="12" sm="6" md="2" lg="2">
            <Image src={logo} alt="logo" width={150} height={80} />
          </Col>
          <Col xs="12" sm="6" md="10" lg="10">
            <Row className="justify-content-md-end">
              <Nav className="links-menu">
                <Nav.Link href="/#schedule" rel="noopener">
                  PROGRAMAÇÃO
                </Nav.Link>
                <Nav.Link href="/#subscription" rel="noopener">
                  INSCRIÇÕES
                </Nav.Link>
                <Nav.Link href="/#contact" rel="noopener">
                  CONTATO
                </Nav.Link>
              </Nav>
            </Row>
            <Row>
              <Col lg="8">
                <WrapperFormLead>
                  <small>
                    Deixe seu email e receba novidades exclusivas do nosso
                    evento
                  </small>
                  <LeadForm />
                </WrapperFormLead>
              </Col>
              <Col lg="4">
                <InfosSocial>
                  <span>INFOS:{'\n'}contato@expoimovel.com</span>
                  <IconsWrapper>
                    <a target="_blank" href="#" rel="noreferrer">
                      <img
                        src={fbImage}
                        alt="facebook link"
                        width={25}
                        height={25}
                      />
                    </a>
                    <a target="_blank" href="#" rel="noreferrer">
                      <img
                        src={fbImage}
                        alt="facebook link"
                        width={25}
                        height={25}
                      />
                    </a>
                    <a target="_blank" href="#" rel="noreferrer">
                      <img
                        src={fbImage}
                        alt="facebook link"
                        width={25}
                        height={25}
                      />
                    </a>
                  </IconsWrapper>
                </InfosSocial>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Footer>
  );
}

export default CustomFooter;
