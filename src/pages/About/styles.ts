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

export const ProfileSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  padding: 60px 0;

  @media (max-width: 767px) {
    flex-direction: column;
    padding: 40px 0;
    gap: 32px;
    text-align: center;
  }
`;

export const ProfilePhotoWrapper = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  padding: 3px;
  background: ${theme.colors.accentGradient};
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    display: block;
    background: ${theme.colors.gray900};
  }

  @media (max-width: 767px) {
    width: 180px;
    height: 180px;
  }
`;

export const ProfileContent = styled.div`
  flex: 1;
`;

export const SectionLabel = styled.p`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${theme.colors.accent};
  margin-bottom: 10px;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 700;
  color: ${theme.colors.gray100};
  line-height: 1.2;
  margin-bottom: 20px;
`;

export const Bio = styled.p`
  font-size: 17px;
  line-height: 1.85;
  color: ${theme.colors.gray400};

  strong {
    color: ${theme.colors.gray200};
    font-weight: 600;
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${theme.colors.gray600};
  margin: 48px 0;
`;

export const GridTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.colors.gray100};
  margin-bottom: 28px;
  text-align: center;

  span {
    background: ${theme.colors.accentGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const Icon = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
  margin-bottom: 48px;
`;

export const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 130px;
  width: calc(25% - 11px);
  padding: 16px;
  background: ${theme.colors.gray800};
  border: 1px solid ${theme.colors.gray600};
  border-radius: 12px;
  font-size: 13px;
  font-weight: 500;
  color: ${theme.colors.gray400};
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s, color 0.25s;

  svg {
    transition: transform 0.25s;
  }

  &:hover {
    border-color: ${theme.colors.accent};
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(99, 102, 241, 0.15);
    color: ${theme.colors.gray100};

    svg {
      transform: scale(1.12);
    }
  }

  @media (max-width: 767px) {
    width: calc(50% - 7px);
    height: 110px;
  }
`;
