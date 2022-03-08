import { Link } from "react-router-dom";

import { Container, IconContainer } from "./styles";

export default function SidebarLink({ children, to, type, onClick }) {
  return (
    <Container>
      <IconContainer>{type}</IconContainer>
      <Link to={to} onClick={onClick}>
        {children}
      </Link>
    </Container>
  );
}
