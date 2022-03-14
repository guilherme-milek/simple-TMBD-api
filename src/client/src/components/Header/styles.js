import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  background: var(--transparent-white);
  backdrop-filter: blur(10px);

  position: fixed;

  z-index: 2;

  @media (min-width: 768px) {
    z-index: 3;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: 1024px;
  height: 60px;

  align-items: center;
  padding: 0 10px;

  h1 {
    font-size: 25px;
    cursor: pointer;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    background: transparent;
    border: none;

    width: 30px;
    height: 30px;

    font-size: 20px;
  }

  @media (min-width: 768px) {
    button {
      display: none;
    }
  }
`;
