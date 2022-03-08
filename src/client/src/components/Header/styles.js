import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: rgba(240, 240, 240, 0.8);
  backdrop-filter: blur(10px);
  position: fixed;

  z-index: 2;

  @media (min-width: 768px) {
    z-index: 3;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  max-width: 1024px;

  h1 {
    font-size: 25px;
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
