import { Container, DetailsContainer } from "./styles";

import { ImCross } from "react-icons/im";

import SidebarLink from "../SidebarLink";

import sidebar from "../../database/sidebar";
import { Link } from "react-router-dom";

export default function Sidebar({ onClick }) {
  const handleClick = (event) => {
    onClick(event);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container>
      <button onClick={onClick}>
        <ImCross />
      </button>
      <Link to="/" onClick={handleClick}>
        Início
      </Link>
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
