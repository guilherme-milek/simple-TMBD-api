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
`;

export const ExampleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .example {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    .code {
      padding: 5px;
      background: #f3f3f3;
      border-radius: 5px;

      overflow: auto;
    }

    p {
      font-style: italic;
      font-size: 14px;
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
    padding: 5px 15px;

    :nth-child(even) {
      background: #f9f9f9;
    }

    .table-data {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100%;
      flex-wrap: wrap;
      flex: 1;

      .string {
        color: #008080;
      }
      .integer {
        color: #a52a2a;
      }
      .boolean {
        color: #ff69b4;
      }
    }

    .table-data:nth-child(1) {
      flex: 2;
    }
    .table-data:nth-child(3) {
      flex: 2;
    }
  }
`;
