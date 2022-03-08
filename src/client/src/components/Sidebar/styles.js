import styled from "styled-components";

export const Container = styled.div`
  height: fit-content;
  padding: 30px;
  width: 100%;

  background: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 25px;

  color: black;

  summary {
    width: 100%;

    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }

  button {
    background: transparent;
    color: white;
    font-size: 20px;
    border: none;
  }

  a,
  button {
    color: black;
  }

  @media (min-width: 768px) {
    height: 100%;

    width: 300px;
    padding: 50px 10px 10px 10px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 25px;

    svg {
      display: none;
    }

    summary {
      text-align: start;
      font-size: 17px;
      font-weight: bold;
    }
  }
`;

export const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-left: 20px;

  @media (min-width: 768px) {
    padding-left: 10px;
  }
`;
