import { Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";
import EndpointInformation from "../pages/EndpointInformation";

import { Container, MainContent, Aside, Background } from "./styles.js";
import { useState } from "react";
import Footer from "../components/Footer";

export default function Routes() {
  const [menuStatus, setMenuStatus] = useState(false);

  const handleClick = () => {
    setMenuStatus(!menuStatus);
  };

  return (
    <Container>
      <Header onClick={handleClick} />
      <Background>
        <main>
          <Aside menuStatus={menuStatus}>
            <Sidebar
              menuStatus={menuStatus}
              setMenuStatus={setMenuStatus}
              onClick={handleClick}
            />
          </Aside>
          <MainContent>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/search/:filter?">
                <EndpointInformation endpoint="search" standard="multi" />
              </Route>
              <Route path="/trending/:filter?">
                <EndpointInformation endpoint="trending" standard="standard" />
              </Route>
            </Switch>
          </MainContent>
        </main>
      </Background>
      <Footer />
    </Container>
  );
}
