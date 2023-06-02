import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./component/menu";
import NavbarKu from "./component/Navbar";
import ButtonReload from "./component/button/buttonReload";

function App() {
  return (
    <div>
      <NavbarKu />
      <Menu />
      <ButtonReload />
    </div>
  );
}

export default App;
