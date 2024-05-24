import styled from 'styled-components';

export const Header = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  z-index: 5;
  padding: 0 40px;
  flex-wrap: no-wrap;

  background-color: rgba(218, 218, 218, 0.7);

  @media (max-width: 767px) {
    display: block;
    height: auto;
    background-color: rgba(218, 218, 218);
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 30px;
  cursor: pointer;
  margin-top: 13px;

  @media (max-width: 767px) {
    margin-top: 11px;
  }
`;

export const Expand = styled.button`
  padding: 10px 16px;

  height: 100%;
  font-size: 30px;

  :hover {
    background-color: rgba(148, 148, 148);
  }
`;

export const Itens = styled.div`
  display: flex;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const NavItem = styled.button`
  padding: 10px 16px;
  display: inline-flex;
  align-items: center;
  height: 100%;
  font-size: 20px;

  :hover {
    background-color: rgba(148, 148, 148, 0.7);
  }

  svg {
    margin-right: 5px;
    margin-top: -2px;
  }
`;
