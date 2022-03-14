import { Container, SectionContainer } from "./styles.js";

export default function Home() {
  return (
    <Container>
      <SectionContainer>
        <h2>Informações importantes</h2>
        <p>
          Desde 16 de dezembro de 2019, a limitação da taxa da API do TMDB foi
          removida.
        </p>
        <p>
          Se ainda existir alguma outra dúvida sobre isso, acesse o{" "}
          <a href="https://www.themoviedb.org/talk/category/5047958519c29526b50017d6">
            fórum de suporte da API original
          </a>
          .
        </p>
      </SectionContainer>
    </Container>
  );
}
