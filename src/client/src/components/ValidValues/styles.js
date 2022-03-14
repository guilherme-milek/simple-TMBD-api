import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .valid-values {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  table {
    width: 100%;
    border-spacing: 0;
    border: 1px solid #ddd;

    td {
      padding: 5px;
    }

    tr:nth-child(even) {
      background: #fcfcfc;
    }

    tr:not(:last-of-type) {
      td {
        border-bottom: 1px solid #ddd;
      }
    }
    td:not(:last-of-type) {
      border-right: 1px solid #ddd;
    }
  }
`;
