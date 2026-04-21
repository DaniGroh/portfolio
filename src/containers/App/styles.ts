import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  max-height: 100vh;
`;

export const ContentWrapper = styled.div`
  margin-top: 64px;
  padding: 0 80px;

  @media (max-width: 1024px) {
    padding: 0 40px;
  }

  @media (max-width: 767px) {
    padding: 0 20px;
  }
`;
