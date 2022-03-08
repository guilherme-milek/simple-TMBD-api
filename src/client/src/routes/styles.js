import styled from "styled-components";

export const Background = styled.div`
  background: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  main {
    display: flex;
    flex-direction: column;

    width: 100%;

    height: 100%;

    max-width: 1024px;

    @media (min-width: 768px) {
      flex-direction: row;
      min-height: 100%;
    }
  }
`;

export const Aside = styled.aside`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100%;
  left: 100%;

  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);

  ${({ menuStatus }) => menuStatus && `left: 0%;`}

  @media (min-width: 768px) {
    justify-content: flex-start;
    position: relative;
    z-index: 0;
    max-width: 250px;
    left: 0;

    background: white;
    backdrop-filter: none;

    border-right: 1px solid #eee;
  }
`;

export const MainContent = styled.div`
  display: flex;
  padding: 70px 10px 10px 10px;
  width: 100%;
  height: 100%;
`;
