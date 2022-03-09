import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--black);
  z-index: 1;

  @media (min-width: 768px) {
    z-index: 5;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;

  padding: 10px;

  font-size: 13px;
  color: var(--white);

  a {
    font-weight: bold;
    color: var(--white);
  }
`;
