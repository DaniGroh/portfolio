import styled from 'styled-components';
import { theme } from '../../styles';

export const Container = styled.div`
  padding-bottom: 60px;
`;

export const DownloadResume = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  padding: 40px 0;

  button {
    padding: 10px 28px;
    border: 1.5px solid ${theme.colors.gray600};
    border-radius: 8px;
    font-size: 15px;
    font-weight: 600;
    color: ${theme.colors.gray400};
    transition: color 0.2s, border-color 0.2s, background-color 0.2s;

    &:hover,
    &.active {
      color: ${theme.colors.accent};
      border-color: ${theme.colors.accent};
      background-color: rgba(129, 140, 248, 0.08);
    }
  }
`;

export const Resume = styled.div`
  height: 100vh;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${theme.colors.gray600};
`;
