import { Container, Background } from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header({ ...rest }) {
  return (
    <Background>
      <Container>
        <h1>Simple TMDB API</h1>
        <button {...rest}>
          <GiHamburgerMenu />
        </button>
      </Container>
    </Background>
  );
}
