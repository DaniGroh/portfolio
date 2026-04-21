import styled from 'styled-components';
import { theme } from '../../styles';

export const Header = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  z-index: 100;
  padding: 0 80px;
  background-color: rgba(18, 18, 20, 0.88);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid ${theme.colors.gray600};

  @media (max-width: 1024px) {
    padding: 0 40px;
  }

  @media (max-width: 767px) {
    display: block;
    height: auto;
    padding: 0 20px;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
`;

export const Logo = styled.img`
  height: 28px;
  cursor: pointer;
  opacity: 0.85;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const Expand = styled.button`
  padding: 8px;
  font-size: 28px;
  border-radius: 6px;
  color: ${theme.colors.gray300};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${theme.colors.gray700};
  }
`;

export const Itens = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: stretch;
    padding-bottom: 12px;
  }
`;

export const NavItem = styled.button<{ $active?: boolean }>`
  padding: 8px 14px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
  transition: color 0.2s, background-color 0.2s;
  color: ${({ $active }) =>
    $active ? theme.colors.accent : theme.colors.gray400};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 14px;
    right: 14px;
    height: 2px;
    background: ${theme.colors.accentGradient};
    border-radius: 2px 2px 0 0;
    opacity: ${({ $active }) => ($active ? 1 : 0)};
    transition: opacity 0.2s;
  }

  &:hover {
    color: ${theme.colors.gray100};
    background-color: ${theme.colors.gray800};

    &::after {
      opacity: 0.4;
    }
  }

  svg {
    font-size: 16px;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 12px 16px;
    border-radius: 0;

    &::after {
      display: none;
    }
  }
`;
