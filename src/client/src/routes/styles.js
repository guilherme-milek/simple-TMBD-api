import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  main {
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 1024px;
    height: 100%;

    > div {
      flex: 1 1 auto;
    }

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
`;

export const Background = styled.div`
  display: flex;
  justify-content: center;

  background: var(--white);

  flex: 1 1 auto;
`;

export const Aside = styled.aside`
  display: flex;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  position: fixed;
  transform: translateY(0%);

  transition: 500ms transform;

  ${({ menuStatus }) =>
    menuStatus &&
    css`
      transform: translateY(-100%);
    `}

  z-index: 2;

  @media (min-width: 768px) {
    border-right: 1px solid var(--light-gray);

    width: 100%;
    max-width: 250px;
    height: 100%;

    position: relative;
    transform: translateY(-100%);
    top: 100%;

    background: var(--white);
    backdrop-filter: none;
  }
`;

export const MainContent = styled.div`
  padding: 70px 10px 10px 10px;
`;
