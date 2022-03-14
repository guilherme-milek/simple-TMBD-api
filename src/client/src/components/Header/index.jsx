import { Container, Background } from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";

import { useHistory } from "react-router-dom";

export default function Header({ ...rest }) {
  const history = useHistory();

  return (
    <Background>
      <Container>
        <h1 onClick={() => history.push("/")}>Simple TMDB API</h1>
        <button {...rest}>
          <GiHamburgerMenu />
        </button>
      </Container>
    </Background>
  );
}
