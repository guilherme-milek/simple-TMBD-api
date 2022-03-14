import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 30px;
  padding: 0 10px;

  background-color: transparent;
  border: 1px solid var(--blue);
  font-weight: bolder;
  text-transform: uppercase;
  color: var(--blue);
  border-radius: 5px;
`;

export const FirstButton = styled(Button)`
  ${({ activeTab }) =>
    activeTab &&
    css`
      background-color: var(--blue);
      color: var(--white);
    `}
`;

export const SecondButton = styled(Button)`
  ${({ activeTab }) =>
    !activeTab &&
    css`
      background-color: var(--blue);
      color: var(--white);
    `}
`;
