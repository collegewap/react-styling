import React from "react";

import { Routes, Route, Link } from "react-router-dom";
import CssModules from "./CssModules";
import Emotion from "./Emotion";
import GlobalStyle from "./GlobalStyle";

import InlineStyle from "./InlineStyle";
import InPageStyle from "./InPageStyle";
import StyledComponents from "./StyledComponents";
import Sass from "./Sass";

const App = () => {
  return (
    <div className="App">
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/inline-style">Inline Style</Link>
            </li>
            <li>
              <Link to="/inpage-style">In Page Style</Link>
            </li>
            <li>
              <Link to="/global-style">Global Style</Link>
            </li>
            <li>
              <Link to="/css-modules">CSS Modules</Link>
            </li>
            <li>
              <Link to="/styled-components">Styled Components</Link>
            </li>
            <li>
              <Link to="/emotion">Emotion</Link>
            </li>
            <li>
              <Link to="/using-scss">SASS</Link>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/inline-style" element={<InlineStyle />}></Route>
            <Route path="/inpage-style" element={<InPageStyle />}></Route>
            <Route path="/global-style" element={<GlobalStyle />}></Route>
            <Route path="/css-modules" element={<CssModules />}></Route>
            <Route
              path="/styled-components"
              element={<StyledComponents />}
            ></Route>
            <Route path="/emotion" element={<Emotion />}></Route>
            <Route path="/using-scss" element={<Sass />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
