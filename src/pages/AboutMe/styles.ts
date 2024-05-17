import styled from 'styled-components';
import { theme } from '../../styles';

export const Container = styled.div``;

export const Intro = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: space-between;
  font-size: 45px;
  img {
    display: flex;
    align-items: end;
    width: 40%;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  height: 80vh;
  text-align: center;
  font-size: 30px;

  a {
    color: ${theme.colors.black};
    font-weight: 700;
  }

  img {
    padding: 0px 20px;
    display: flex;
    align-items: end;
    width: 30%;
  }
`;
