import styled from 'styled-components';
import { theme } from '../../styles';

export const Container = styled.div``;

export const Description = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: space-between;
  font-size: 35px;

  img {
    width: 30%;
    border-radius: 100%;
  }
`;

export const DescriptionTitle = styled.div`
  span {
    display: flex;
    justify-content: center;
    font-weight: 700;
  }
`;

export const SkillTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  span {
    font-weight: 700;
  }
`;

export const Icon = styled.div`
  display: flex;
`;

export const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 190px;
  width: 25%;
  margin: 20px 10px;
  border: 1px solid ${theme.colors.darkGrey};
  border-radius: 5px;
  transition: transform 0.3s;

  svg {
    display: block;
    align-items: center;
  }

  :hover {
    transform: scale(1.07);
  }
`;
