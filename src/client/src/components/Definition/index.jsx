import {
  Container,
  Table,
  TableContainer,
  ExampleContainer,
  SectionContainer,
} from "./styles";

export default function Definition({
  queryParameters,
  pathParameters,
  examples,
}) {
  return (
    <Container>
      {!!queryParameters.length && (
        <SectionContainer>
          <h3>Parâmetros da URL &#40;Query&#41;</h3>
          <TableContainer>
            <Table>
              {queryParameters.map(
                ({ param, type, description, require }, index) => (
                  <div key={index} className="table-row">
                    <div className="table-data">
                      <p>{param}</p>
                    </div>
                    <div className="table-data">
                      <p className={type}>{type}</p>
                    </div>
                    <div className="table-data">
                      <p>{description}</p>
                    </div>
                    <div className="table-data">
                      <p>
                        {require === "Obrigatório" ? (
                          <strong>{require}</strong>
                        ) : (
                          require
                        )}
                      </p>
                    </div>
                  </div>
                )
              )}
            </Table>
          </TableContainer>
        </SectionContainer>
      )}

      {!!pathParameters.length && (
        <SectionContainer>
          <h3>Parâmetros da URL &#40;PATH&#41;</h3>
          <TableContainer>
            <Table>
              {pathParameters.map(
                ({ param, type, description, require }, index) => (
                  <div key={index} className="table-row">
                    <div className="table-data">
                      <p>{param}</p>
                    </div>
                    <div className="table-data">
                      <p className={type}>{type}</p>
                    </div>
                    <div className="table-data">
                      <p>{description}</p>
                    </div>
                    <div className="table-data">
                      <p>
                        {require === "Obrigatório" ? (
                          <strong>{require}</strong>
                        ) : (
                          require
                        )}
                      </p>
                    </div>
                  </div>
                )
              )}
            </Table>
          </TableContainer>
        </SectionContainer>
      )}

      <ExampleContainer>
        <h3>Exemplos</h3>
        {examples.map(({ link, description, title }, index) => {
          return (
            <div key={index} className="example">
              <h4>{title}</h4>
              <div className="code">
                <code>{link}</code>
              </div>
              <p>{description}</p>
            </div>
          );
        })}
      </ExampleContainer>
    </Container>
  );
}
