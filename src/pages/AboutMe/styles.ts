import styled from 'styled-components';
import { theme } from '../../styles';

export const Container = styled.div``;

export const Intro = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const Greeting = styled.div`
  display: block;
  jutify-content: center;
  align-items: center;
  span {
    font-size: 32px;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  margin-top: 20px;

  a {
    margin-right: 5px;
    color: ${theme.colors.black};
  }

  svg {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ProfileImage = styled.div`
  display: flex;
  justify-content: flex-end;

  img {
    width: 150px;
    max-width: 100%;
    height: auto;
    border-radius: 150px;
  }
`;

export const Info = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 28px;
  text-align: center;
  a {
    color: ${theme.colors.black};
    font-weight: 700;
  }
`;
