import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import Main from "./page/Main";
import Game from "./page/Game";
import Form from "./page/entry/Form";
import End from "./page/End";
import List from "./page/entry/List";


function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <Route path="/" component={Main} exact={true} />
          <Route path="/Game" component={Game} />
          <Route path="/entry/input/" component={End} />
          <Route path="/entry/List" component={List} />
          <Route path="/Form" component={Form} />          
        </header>
      </div>
    </div>
  );
}

export default App;
