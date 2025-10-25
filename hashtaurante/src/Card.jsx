const Card = ({ ItemCategoria }) => {
  const { nome, descricao, preco, imagem } = ItemCategoria;

  return (
    <div className="card">
      <div className="card__textos">
        <h2 className="card__nome">{nome}</h2>
        <p>{descricao}</p>
        <p className="card__preco">{preco}</p>
      </div>
      <div className="card__img">
        <img src={imagem} alt={nome} />
      </div>
    </div>
  );
};

export default Card;
