import styled from "styled-components";

export const Container = styled.div`
  height: fit-content;
  padding: 30px;
  width: 100%;

  background: var(--white);

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 25px;

  color: var(--black);

  box-shadow: 0px 0px 15px var(--transparent-black);

  summary {
    width: 100%;

    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }

  button {
    background: transparent;
    color: var(--white);
    font-size: 20px;
    border: none;

    &.close-button {
      color: var(--black);
    }
  }

  a {
    color: var(--dark_gray);
    font-size: 16px;
  }

  a:hover {
    color: var(--black);
  }

  @media (min-width: 768px) {
    height: 100%;

    width: 300px;
    padding: 50px 10px 10px 10px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 25px;

    box-shadow: none;

    svg {
      display: none;
    }

    summary {
      text-align: start;
      font-size: 17px;
      font-weight: bold;

      cursor: pointer;
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
