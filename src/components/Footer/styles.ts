import styled from 'styled-components';
import { theme } from '../../styles';

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 60px;
  padding: 20px 100px;
  margin-top: 32px;
  text-align: center;
  background-color: ${theme.colors.gray800};

  @media (max-width: 767px) {
    height: auto;
    display: grid;
    padding: 20px 20px;
    justify-content: center;
  }
`;

export const SocialMedia = styled.div`
  display: flex;

  a {
    margin-right: 5px;
    margin-top: -2px;
    color: ${theme.colors.darkGrey};
  }

  svg {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 767px) {
    padding-top: 5px;
    justify-content: center;
  }
`;
