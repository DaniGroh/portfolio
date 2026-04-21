import styled from 'styled-components';
import { theme } from '../../styles';

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 80px;
  margin-top: 40px;
  border-top: 1px solid ${theme.colors.gray600};

  @media (max-width: 1024px) {
    padding: 24px 40px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 16px;
    padding: 24px 20px;
    text-align: center;
  }
`;

export const FooterText = styled.p`
  font-size: 13px;
  color: ${theme.colors.gray500};
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  a {
    color: ${theme.colors.gray500};
    display: flex;
    align-items: center;
    transition: color 0.2s, transform 0.2s;

    &:hover {
      color: ${theme.colors.accent};
      transform: translateY(-2px);
    }
  }
`;
