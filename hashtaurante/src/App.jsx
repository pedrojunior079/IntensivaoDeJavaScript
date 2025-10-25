import { useState } from "react";
import "./App.css";
import hashtauranteImg from "./assets/hashtaurante.webp";
import Navegacao from "./navegacao.jsx";
import Cards from "./Cards.jsx";

function App() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);
  return (
    <>
      <div className="container">
        <div className="header">
          <img src={hashtauranteImg} alt="Logo do Hashtaurante" />
        </div>
        <Navegacao
          categoriaSelecionada={categoriaSelecionada}
          setCategoriaSelecionada={setCategoriaSelecionada}
        />
        <Cards categoriaSelecionada={categoriaSelecionada} />
      </div>
    </>
  );
}

export default App;
