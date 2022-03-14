import { Container, FirstButton, SecondButton } from "./styles";

import useActiveTab from "../../providers/activeTab";

export default function TabSwitchMenu() {
  const { activeTab, switchActiveTab } = useActiveTab();

  return (
    <Container>
      <FirstButton onClick={() => switchActiveTab(true)} activeTab={activeTab}>
        Definição
      </FirstButton>
      <SecondButton
        onClick={() => switchActiveTab(false)}
        activeTab={activeTab}
      >
        Teste agora
      </SecondButton>
    </Container>
  );
}
