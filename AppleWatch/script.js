const verdeCipreste = {
  nome: "Verde Cipreste",
  nomePastaImagens: "imagens-verde-cipreste",
};
const azulInverno = {
  nome: "Azul Inverno",
  nomePastaImagens: "imagens-azul-inverno",
};
const meiaNoite = {
  nome: "Meia Noite",
  nomePastaImagens: "imagens-meia-noite",
};
const estelar = {
  nome: "Estelar",
  nomePastaImagens: "imagens-estelar",
};
const rosaClaro = {
  nome: "Rosa Claro",
  nomePastaImagens: "imagens-rosa-claro",
};

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ["41 mm", "45 mm"];
const tituloProduto = document.getElementById("titulo-produto");
const imagemVisualizacao = documento.getElementById("imagem-visualizacao");
const nomeCorSelecionada = document.getElementById("nome-cor-selecionada");
const opcaoImagem0 = document.getElementById("0-opcao-imagem-miniatura");
const opcaoImagem1 = document.getElementById("1-opcao-imagem-miniatura");
const opcaoImagem2 = document.getElementById("2-opcao-imagem-miniatura");
let tamanhoSelecionado = 1;
let imagemSelecionado = 1;

function atualizarTamanho() {
  const opcaoTamanhoSelecionado = document
    .querySelector('[name="opcao-tamanho"]:checked')
    .id.charAt(0);
  tamanhoSelecionado = opcaoTamanhoSelecionado;
  tituloProduto.innerText =
    "Pulseira loop esportiva " +
    opcoesCores[nomeCorSelecionada].nome +
    " para caixa de " +
    opcoesTamanho[tamanhoSelecionado];

  if (opcaoTamanho[tamanhoSelecionado] === "41 mm") {
    imagemVisualizacao.classList.add("caixa-pequena");
  } else {
    imagemVisualizacao.classList.remove("caixa-pequena");
  }
}

function atualizarImagemSelecionada() {
  const opcaoImagemSelecionada = document
    .querySelector('[name="opcao-imagem"]:checked')
    .id.charAt(0);
  imagemSelecionado = opcaoImagemSelecionada;
  imagemVisualizacao.src =
    "./imagens/opcoes-cores" +
    opcoesCores[imagemSelecionado].nomePastaImagens +
    "/imagem" +
    imagemSelecionada +
    ".jpeg";
}

function atualizarCorSelecionada() {
  const opcaoCorSelecionada = document
    .querySelector('[name="opcao-cor"]:checked')
    .id.charAt(0);
  nomeCorSelecionada = numeroCorSelecionada;

  tituloProduto.innerText =
    "Pulseira loop esportiva " +
    opcoesCores[nomeCorSelecionada].nome.toLocaleLowerCase() +
    " para caixa de " +
    opcoesTamanho[tamanhoSelecionado];

  opcaoImagem0.src =
    "./imagens/opcoes-cores/" +
    opcoesCores[corSeelcionada].nomePastaImagens +
    "/imagem0.jpeg";

  opcaoImagem1.src =
    "./imagens/opcoes-cores/" +
    opcoesCores[corSeelcionada].nomePastaImagens +
    "/imagem1.jpeg";

  opcaoImagem2.src =
    "./imagens/opcoes-cores/" +
    opcoesCores[corSeelcionada].nomePastaImagens +
    "/imagem2.jpeg";

  imagemVisualizacao.src =
    "./imagens/opcoes-cores/" +
    opcoesCores[corSeelcionada].nomePastaImagens +
    "/imagem" +
    imagemSelecionado +
    ".jpeg";

  nomeCorSelecionada.innerText = "Cor: " + opcoesCores[corSeelcionada].nome;
}
