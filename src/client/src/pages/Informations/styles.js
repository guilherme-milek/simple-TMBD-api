import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 100%;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  .code {
    padding: 5px;
    background: #f3f3f3;
    border-radius: 5px;

    overflow: auto;
  }

  p {
    overflow: auto;
  }

  .description {
    font-style: italic;
    font-size: 14px;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 0 25px;
  }
`;
