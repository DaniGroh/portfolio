import styled from 'styled-components';
import { theme } from '../../styles';

export const Container = styled.div``;

export const Skills = styled.div`
  display: flex;
`;

export const SkillBox = styled.div`
  display: block;
  margin-bottom: 20px;
  margin-right: 20px;
  padding: 5px;
  border: 1px solid ${theme.colors.darkGrey};
  border-radius: 5px;
  transition: transform 0.3s;

  :hover {
    transform: scale(1.1);
  }
`;
