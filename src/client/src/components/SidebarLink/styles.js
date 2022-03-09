import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 10px;

  a {
    color: var(--dark_gray);
    font-size: 16px;

    transition: 200ms color;
  }

  :hover {
    a {
      color: var(--black);
    }

    .icon {
      background: var(--dark-green);
    }
  }

  cursor: pointer;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--green);
  color: var(--white);

  width: 31px;
  height: 17px;
  border-radius: 5px;

  font-size: 11px;
  font-weight: bolder;
  text-transform: uppercase;

  transition: 200ms background, 200ms color;
`;
