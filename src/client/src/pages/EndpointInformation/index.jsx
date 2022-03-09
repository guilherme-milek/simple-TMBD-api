import { Container, SectionContainer, Informations } from "./styles";

import endpoints from "../../database/endpoints";
import { useParams } from "react-router-dom";
import Definition from "../../components/Definition";

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
              <div className="valid-values" key={index}>
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
              </div>
            ))}
          </SectionContainer>
        )}
      </Informations>
      <Definition
        queryParameters={queryParameters}
        pathParameters={pathParameters}
        examples={examples}
      />
    </Container>
  );
}

/*  <Definition
        queryParameters={queryParameters}
        pathParameters={pathParameters}
        examples={examples}
      /> */
