const navegacao = ({ setCategoriaSelecionada, categoriaSelecionada }) => {
  const categorias = ["Pratos Principais ", "Sobremesas", "Bebidas"];
  console.log(categoriaSelecionada);
  return (
    <div className="categorias">
      {categorias.map((categoria, index) => (
        <div
          key={index}
          className={`categoria${
            index === categoriaSelecionada ? " categoria--selecionada" : ""
          }`}
          onClick={() => setCategoriaSelecionada(index)}
        >
          {categoria}
        </div>
      ))}
    </div>
  );
};

export default navegacao;
