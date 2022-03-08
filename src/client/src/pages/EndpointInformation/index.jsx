import {
  Container,
  SectionContainer,
  Table,
  TableContainer,
  ExampleContainer,
  Informations,
} from "./styles";

import endpoints from "../../database/endpoints";
import { useParams } from "react-router-dom";

export default function EndpointInformation({ endpoint, standard }) {
  const { filter } = useParams();

  const {
    type,
    title,
    description,
    queryParameters,
    pathParameters,
    validValues,
    examples,
  } = endpoints[endpoint][filter ? filter : standard];

  return (
    <Container>
      <Informations>
        <h2>
          <span className="type">{type}</span>
          {title}
        </h2>
        <p>{description}</p>

        {!!validValues && (
          <SectionContainer>
            <h3>Valores válidos</h3>
            {validValues.map(({ title, values }, index) => (
              <>
                <h4>{title}</h4>
                <table>
                  <tbody>
                    {values.map(({ value, description }, index) => {
                      return (
                        <tr key={index} className="table-row">
                          <td className="table-data">
                            <p>{value}</p>
                          </td>
                          <td className="table-data">
                            <p>{description}</p>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </>
            ))}
          </SectionContainer>
        )}
      </Informations>

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
