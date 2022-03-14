import { Container, SectionContainer, Informations } from "./styles";

import endpoints from "../../database/endpoints";
import { useParams } from "react-router-dom";

import ValidValues from "../../components/ValidValues";
import EndpointTabSwitcher from "../../components/EndpointTabSwitcher";

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
            <ValidValues validValues={validValues} title="Valores válidos" />
          </SectionContainer>
        )}
      </Informations>

      <EndpointTabSwitcher
        queryParameters={queryParameters}
        pathParameters={pathParameters}
        examples={examples}
        endpoint={endpoint}
        filter={filter}
      />
    </Container>
  );
}
