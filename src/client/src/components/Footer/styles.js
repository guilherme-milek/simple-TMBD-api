import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  z-index: 1;

  @media (min-width: 768px) {
    z-index: 5;
  }
`;

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;

  padding: 10px;
  color: white;

  font-size: 13px;

  a {
    color: white;
    font-weight: bold;
  }
`;
