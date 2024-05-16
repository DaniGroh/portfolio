import styled from 'styled-components';
import { theme } from '../../styles';

export const Container = styled.div`
  position: absolute;
  width: 100%;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 60px;
  padding: 20px 100px;
  margin-top: 32px;
  text-align: center;
  background-color: ${theme.colors.white};
  color: #8c8c8c;
  border-top: 1px solid ${theme.colors.grey};
`;

export const Author = styled.div``;

export const Copyright = styled.div``;

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
`;
