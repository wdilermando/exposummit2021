import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const SectionInfo = styled.div`
  background: ${({ bg, theme }) =>
    bg === 'primary'
      ? theme.colors.primary
      : bg === 'secondary'
      ? theme.colors.secondary
      : theme.colors.light};
  background-image: url(${({ bg }) => bg || null});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: ${({ hero }) => (hero ? '100vh' : 'auto')};
  padding: 10vh 10vh;

  @media screen and (max-width: 991px) {
    padding: 10vh 2.5vh;
    height: ${({ hero }) => (hero ? 'auto' : 'auto')};
  }
`;

export const DescriptionText = styled.p`
  color: ${({ textTheme }) => (textTheme === 'light' ? '#FFFFFF' : '#225C9C')};
  font-size: ${({ fontSize }) => fontSize || '1.1rem'};
  font-weight: 400;
  margin-bottom: 0;
  white-space: pre-wrap;
  width: 80%;
  text-align: ${({ textAlign }) =>
    textAlign === 'center' ? 'center' : textAlign};
  @media screen and (max-width: 450px) {
    margin-bottom: 3vh;
    width: 100%;
  }
`;

export const SubtitleText = styled.h5`
  text-transform: uppercase;
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  text-align: ${({ textAlign }) => (textAlign === 'center' ? 'center' : null)};
`;

export const MainTitle = styled.h2`
  text-transform: uppercase;
  color: ${({ textTheme, theme }) =>
    textTheme === 'primary'
      ? theme.colors.primary
      : textTheme === 'secondary'
      ? theme.colors.secondary
      : theme.colors.light};
  font-size: 26px;
  font-weight: 700;
  text-align: ${({ textAlign }) =>
    textAlign === 'center' ? 'center' : textAlign};
  width: 100%;
  white-space: pre-wrap;
  margin-bottom: 35px;
`;

export const HighLightText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ size }) => size || ''};
`;

export const BubbleText = styled.span`
  font-size: 22px;
  font-weight: 700;
  margin-top: 20px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  -webkit-border-radius: 30px;
  -webkit-border-bottom-right-radius: 0;
  -moz-border-radius: 30px;
  -moz-border-radius-bottomright: 0;
  border-radius: 30px;
  border-bottom-right-radius: 0;
  padding: 15px;
  @media screen and (max-width: 991px) {
    margin-bottom: 3vh;
  }
`;

export const CustomButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  margin-bottom: 0.5em;
  margin-top: 1em;
  color: ${({ theme }) => theme.colors.light};
  border-radius: 25px;
  padding: 0.4em 0.8em;
  transition: background-color 0.3s linear;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transition: background-color 0.3s linear;
  }
`;
