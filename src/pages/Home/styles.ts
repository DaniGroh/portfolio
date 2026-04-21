import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  animation: ${fadeInUp} 0.55s ease-out;
`;

export const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
  min-height: calc(100vh - 64px);
  padding: 60px 0 40px;

  @media (max-width: 767px) {
    flex-direction: column-reverse;
    min-height: auto;
    padding: 40px 0 32px;
    gap: 32px;
    text-align: center;
  }
`;

export const HeroText = styled.div`
  flex: 1;
  max-width: 580px;
`;

export const HeroImage = styled.div`
  flex: 0 0 auto;

  img {
    width: 380px;

    @media (max-width: 1100px) {
      width: 300px;
    }

    @media (max-width: 767px) {
      width: 200px;
    }
  }
`;

export const Greeting = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${theme.colors.accent};
  letter-spacing: 0.04em;
  margin-bottom: 14px;
`;

export const Name = styled.h1`
  font-size: clamp(40px, 6vw, 68px);
  font-weight: 700;
  line-height: 1.1;
  background: ${theme.colors.accentGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 18px;
`;

export const TypeWrapper = styled.div`
  font-size: clamp(20px, 2.5vw, 28px);
  font-weight: 600;
  color: ${theme.colors.gray100};
  min-height: 44px;
  margin-bottom: 36px;
`;

export const CTARow = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    justify-content: center;
  }
`;

export const CTAPrimary = styled.button`
  padding: 12px 28px;
  font-size: 15px;
  font-weight: 600;
  background: ${theme.colors.accentGradient};
  color: #fff;
  border-radius: 8px;
  transition: opacity 0.2s, transform 0.2s;

  &:hover {
    opacity: 0.88;
    transform: translateY(-2px);
  }
`;

export const CTASecondary = styled.a`
  padding: 11px 28px;
  font-size: 15px;
  font-weight: 600;
  color: ${theme.colors.accent};
  border: 1.5px solid ${theme.colors.accent};
  border-radius: 8px;
  transition: background-color 0.2s, transform 0.2s;
  display: inline-block;

  &:hover {
    background-color: rgba(129, 140, 248, 0.1);
    transform: translateY(-2px);
  }
`;

export const BioSection = styled.section`
  display: flex;
  align-items: center;
  gap: 60px;
  padding: 64px 0;
  border-top: 1px solid ${theme.colors.gray600};

  img {
    width: 260px;
    flex-shrink: 0;

    @media (max-width: 767px) {
      display: none;
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
    padding: 48px 0;
    gap: 24px;
  }
`;

export const BioText = styled.p`
  font-size: 17px;
  line-height: 1.85;
  color: ${theme.colors.gray400};

  strong {
    color: ${theme.colors.gray100};
    font-weight: 600;
  }
`;
