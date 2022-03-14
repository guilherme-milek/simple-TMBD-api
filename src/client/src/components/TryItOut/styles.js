import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  &.response-section {
    width: 100%;

    .response {
      width: 100%;
      overflow: auto;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    .info {
      width: 100%;
      gap: 10px;
      display: flex;
      align-items: center;
      color: var(--dark_gray);
      font-style: italic;
      font-size: 14px;

      p {
        overflow: auto;
      }
    }
  }

  button[type="submit"] {
    background: var(--pink);
    font-weight: bolder;
    color: var(--white);
    height: 30px;
    padding: 0 10px;
    border: none;
    border-radius: 5px;

    transition: 300ms background;

    &:hover {
      background: var(--dark-pink);
    }
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  overflow: auto;
  border: 1px solid #eee;
`;

export const Table = styled.div`
  width: 100%;
  min-width: 500px;

  .table-row {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    &:not(:last-child) {
      border-bottom: 1px solid var(--light-gray);

      .table-data:nth-child(2) {
        border-bottom: 1px solid var(--white);
      }
    }

    .table-data {
      padding: 5px 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 100%;
      width: 50%;
      position: relative;

      input {
        background: transparent;
        border: none;
        width: 100%;
        height: 100%;
        margin-right: 5px;
      }
    }

    .table-data:nth-child(2) {
      background: var(--light-gray);
    }
  }
`;
