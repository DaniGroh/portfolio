import styled from 'styled-components';
import { theme } from '../../styles';

export const Container = styled.div``;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
  padding: 50px 0px;

  span {
    font-weight: 700;
  }
`;

export const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ProjectBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  margin: 20px 10px;
  padding: 20px;
  border: 1px solid ${theme.colors.darkGrey};
  border-radius: 5px;
  transition: transform 0.3s;
  overflow: auto;
  font-size: 20px;

  :hover {
    transform: scale(1.07);
  }
`;

export const Github = styled.a`
  display: flex;
  align-items: center;
  width: fit-content;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  padding: 5px;
  border: 1px solid ${theme.colors.darkGrey};
  border-radius: 5px;
  transition: transform 0.3s;
  color: ${theme.colors.black};
  text-decoration: none;

  :hover {
    transform: scale(1.07);
  }
`;
