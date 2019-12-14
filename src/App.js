import React from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";

const Nav = styled.nav``;

export default function App() {
  return (
    <main>
      <Header />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
      </nav>

      <Route exact path="/" component={WelcomePage}/>

      <Route exact path="/characters" 
          render={(routeProps) => {
            return <CharacterList {...routeProps} />
          }
        }
      />
    </main>
  );
}
