import { Container, DetailsContainer } from "./styles";

import { ImCross } from "react-icons/im";

import SidebarLink from "../SidebarLink";

import sidebar from "../../database/sidebar";
import { Link } from "react-router-dom";

import useResponse from "../../providers/response";
import useInputs from "../../providers/inputs";
import useActiveTab from "../../providers/activeTab";
import usePageSwitchDetector from "../../providers/pageSwitchDetector";

export default function Sidebar({ onClick }) {
  const { clearResponse } = useResponse();
  const { clearInputs } = useInputs();
  const { resetAtiveTab } = useActiveTab();
  const { updatePageChanged } = usePageSwitchDetector();

  const handleClick = (event) => {
    onClick(event);
    window.scrollTo({ top: 0, behavior: "smooth" });
    clearResponse();
    clearInputs();
    resetAtiveTab();
    updatePageChanged();
  };

  return (
    <Container>
      <button onClick={onClick} className="close-button">
        <ImCross />
      </button>

      <Link to="/" onClick={handleClick}>
        Início
      </Link>

      <details>
        <summary>Começando</summary>
        <DetailsContainer>
          {sidebar.comecando.map(({ to, text }, index) => (
            <SidebarLink to={to} onClick={handleClick} key={index}>
              {text}
            </SidebarLink>
          ))}
        </DetailsContainer>
      </details>

      <details>
        <summary>Pesquisar</summary>
        <DetailsContainer>
          {sidebar.search.map(({ to, type, text }, index) => (
            <SidebarLink to={to} type={type} onClick={handleClick} key={index}>
              {text}
            </SidebarLink>
          ))}
        </DetailsContainer>
      </details>

      <details>
        <summary>Tendências</summary>
        <DetailsContainer>
          {sidebar.trending.map(({ to, type, text }, index) => (
            <SidebarLink to={to} type={type} onClick={handleClick} key={index}>
              {text}
            </SidebarLink>
          ))}
        </DetailsContainer>
      </details>
    </Container>
  );
}
