import styled from 'styled-components';
import { theme } from '../../styles';

export const Container = styled.div``;

export const Intro = styled.div`
  display: flex;
  align-items: center;
  height: 90vh;
  justify-content: space-between;
  font-size: 45px;
  img {
    display: flex;
    align-items: end;
    width: 40%;
  }
`;

export const Greeting = styled.div`
  span {
    color: ${theme.colors.purple};
  }
`;

export const Capabilities = styled.div`
  padding-top: 30px;
  color: ${theme.colors.purple};
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  height: 70vh;
  font-size: 35px;
  text-align: justify;
  a {
    color: ${theme.colors.black};
    font-weight: 700;
  }

  img {
    padding-left: 20px;
    display: flex;
    align-items: end;
    width: 30%;
  }
`;
