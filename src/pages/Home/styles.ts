import styled from 'styled-components';
import { theme } from '../../styles';

export const Container = styled.div``;

export const Intro = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 45px;
  padding-top: 50px;
  img {
    display: flex;
    align-items: end;
    width: 40%;
    @media (max-width: 767px) {
      padding-top: 15px;
      width: 90%;
    }
  }

  @media (max-width: 767px) {
    flex-wrap: wrap;
    line-height: 1.6;
    font-size: 35px;
    justify-content: center;
    height: auto;
  }
`;

export const Type = styled.div`
  @media (max-width: 767px) {
    font-size: 25px;
  }
`;

export const Greeting = styled.div`
  span {
    color: ${theme.colors.purple};
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  font-size: 35px;
  text-align: justify;
  padding-top: 100px;
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

  @media (max-width: 767px) {
    flex-wrap: wrap;
    line-height: 1.6;
    font-size: 30px;
    height: auto;
    text-align: center;
    justify-content: center;

    img {
      padding-top: 10px;
      width: 50%;
    }
  }
`;
