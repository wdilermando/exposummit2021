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
`;

const CustomButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  margin-bottom: 0.5em;
  color: ${({ theme }) => theme.colors.light};
  border-radius: 4px;
  padding: 0.4em 0.8em;
  transition: background-color 0.3s linear;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transition: background-color 0.3s linear;
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
                <Form inline>
                  <WrapperFormLead>
                    <small>
                      Deixe seu email e receba novidades exclusivas do nosso
                      evento
                    </small>
                    <InputGroup className="w-100">
                      <FormControl
                        id="email"
                        placeholder="Seu melhor email"
                        type="email"
                        required
                      />
                      <InputGroup.Append>
                        <CustomButton type="submit">Enviar</CustomButton>
                      </InputGroup.Append>
                    </InputGroup>
                  </WrapperFormLead>
                </Form>
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
