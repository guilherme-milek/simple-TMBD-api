import { Container } from "./styles";

import Definition from "../../components/Definition";
import TryItOut from "../../components/TryItOut";
import TabSwitchMenu from "../../components/TabSwitchMenu";

import useActiveTab from "../../providers/activeTab";

export default function EndpointTabSwitcher({
  queryParameters,
  pathParameters,
  examples,
  endpoint,
  filter,
}) {
  const { activeTab } = useActiveTab();

  return (
    <Container>
      <TabSwitchMenu />
      {activeTab ? (
        <Definition
          queryParameters={queryParameters}
          pathParameters={pathParameters}
          examples={examples}
        />
      ) : (
        <TryItOut
          queryParameters={queryParameters}
          pathParameters={pathParameters}
          endpoint={endpoint}
          filter={filter}
        />
      )}
    </Container>
  );
}
