import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./component/menu";

import ButtonReload from "./component/button/buttonReload";

function App() {
  return (
    <div>
      <Menu />
      <ButtonReload />
    </div>
  );
}

export default App;
