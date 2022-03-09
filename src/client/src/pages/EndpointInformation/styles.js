import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  h2 {
    display: flex;
    gap: 15px;

    .type {
      font-weight: bolder;
      text-transform: uppercase;
      color: rgb(39, 174, 96);
    }
  }
`;

export const Informations = styled.div`
  background: #f9fafc;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 70px 10px 20px 10px;
  margin-bottom: -60px;
  width: calc(100% + 20px);
  position: relative;
  left: -10px;
  top: -70px;

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

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;
