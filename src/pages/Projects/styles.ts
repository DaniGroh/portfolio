import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  animation: ${fadeInUp} 0.55s ease-out;
  padding-bottom: 60px;
`;

export const PageHeader = styled.div`
  padding: 60px 0 40px;
  text-align: center;
`;

export const PageLabel = styled.p`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${theme.colors.accent};
  margin-bottom: 12px;
`;

export const Title = styled.h2`
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 700;
  color: ${theme.colors.gray100};
  margin-bottom: 12px;
`;

export const TitleDesc = styled.p`
  font-size: 16px;
  color: ${theme.colors.gray400};
`;

export const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
`;

export const ProjectBox = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.gray800};
  border: 1px solid ${theme.colors.gray600};
  border-radius: 14px;
  overflow: hidden;
  transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45);
    border-color: ${theme.colors.accent};
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 190px;
  object-fit: cover;
  display: block;
`;

export const ProjectBody = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ProjectTitle = styled.h3`
  font-size: 17px;
  font-weight: 700;
  color: ${theme.colors.gray100};
  margin-bottom: 10px;
`;

export const ProjectDescription = styled.p`
  font-size: 14px;
  line-height: 1.7;
  color: ${theme.colors.gray400};
  flex: 1;
  margin-bottom: 16px;
`;

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 18px;
`;

export const Tag = styled.span`
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 20px;
  background: rgba(129, 140, 248, 0.1);
  color: ${theme.colors.accent};
  border: 1px solid rgba(129, 140, 248, 0.2);
`;

export const Github = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 600;
  border: 1.5px solid ${theme.colors.gray600};
  border-radius: 8px;
  color: ${theme.colors.gray300};
  transition: color 0.2s, border-color 0.2s, background-color 0.2s;

  &:hover {
    color: ${theme.colors.accent};
    border-color: ${theme.colors.accent};
    background-color: rgba(129, 140, 248, 0.08);
  }
`;
