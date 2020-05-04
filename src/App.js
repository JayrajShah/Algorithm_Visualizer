import React from "react";
import Nav from "./Components/Nav";
import Thebox from "./Components/TheBox";
import { InfoProvider } from "./infoContext";
import ActionBlock from "./Components/ActionBlock";
import Output from "./Components/Output";

function App() {
  return (
    <InfoProvider>
      <div className="App">
        <Nav />
        <ActionBlock />
        <Thebox />
        <Output />
      </div>
    </InfoProvider>
  );
}

export default App;
