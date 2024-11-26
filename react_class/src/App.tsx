import { IoMenu } from "react-icons/io5";
import "./App.css";
import { useState } from "react";
import { TitleMenu } from "./Components/Atoms/TitleMenu";
import { Form } from "./Components/Templates/Form";

function App() {
  const [viewMenu, setviewMenu] = useState<boolean>(false);

  return (
    <div className="App_container">
      <header className="header_app">
        <button onClick={() => setviewMenu(!viewMenu)}>
          <IoMenu className="icono_menu" />
        </button>
      </header>
      <body className="body_app">
        <div className={`contenedor_izquierda ${viewMenu ? "open" : ""}`}>
          <div className="menu_title">Menú</div>
          <TitleMenu title="Crud" />
          <TitleMenu title="Marcar" />
          <TitleMenu title="Color" />
          <TitleMenu title="Categoria" />
        </div>
        <div className="contenedor_derecha">
          <Form />
        </div>
      </body>
    </div>
  );
}

export default App;
