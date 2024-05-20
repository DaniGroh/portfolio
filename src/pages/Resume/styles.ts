import styled from 'styled-components';
import { theme } from '../../styles';

export const Container = styled.div``;

export const DownloadResume = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
  button {
    margin-bottom: 20px;
    margin-right: 20px;
    padding: 5px;
    border: 1px solid ${theme.colors.darkGrey};
    border-radius: 5px;
    transition: transform 0.3s;

    :hover {
      transform: scale(1.1);
    }
  }
`;

export const Resume = styled.div`
  height: 100vh;
`;
