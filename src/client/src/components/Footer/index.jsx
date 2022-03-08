import { Container, Background } from "./styles";

export default function Footer() {
  return (
    <Background>
      <Container>
        <p>
          Feito com 💙 por{" "}
          <a
            href="https://www.linkedin.com/in/guilhermeprevedamilek/"
            target="_blank"
            rel="noreferrer"
          >
            @guilhermerprevedamilek
          </a>
        </p>
      </Container>
    </Background>
  );
}
