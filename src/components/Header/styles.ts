import styled from 'styled-components';
import { theme } from '../../styles';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  z-index: 5;
`;

export const Header = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 60px;

  align-items: center;
  justify-content: center;
  padding: 0 40px;
  flex-wrap: no-wrap;
  magin: auto;

  background-color: ${theme.colors.white};

  button {
    background-color: ${theme.colors.white};
  }
`;

export const NavItem = styled.button`
  padding: 10px 16px;
  height: 100%;
  :hover {
    background-color: ${theme.colors.grey};
  }
`;
