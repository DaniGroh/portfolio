import styled from 'styled-components';
import { theme } from '../../styles';

export const Header = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
  flex-wrap: no-wrap;
  margin: auto;

  background-color: rgba(218, 218, 218, 0.7);
`;

export const NavItem = styled.button`
  padding: 10px 16px;
  display: inline-flex;
  align-items: center;
  height: 100%;

  :hover {
    background-color: ${theme.colors.grey};
  }

  svg {
    margin-right: 5px;
    margin-top: -2px;
  }
`;
