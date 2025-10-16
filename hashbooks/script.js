const nomeCapitulo = document.getElementById("capitulo");
const audio = document.getElementById("audio-capitulo"); 
const botaoPlayPause = document.getElementById("play-pause");
const botaoProximoCaptitulo = document.getElementById("proximo");
const botaoCapituloAnterior = document.getElementById("anterior");
const quntidadeTotalDeCapitulos = 10;
const quantidadeCapitulos = 10;
let taTocando = false;
let capitulo = 1;

function tocarFaixa(){
    audio.play();
    taTocando = true;
    botaoPlayPause.classList.add("tocando");
}

botaoPlayPause.addEventListener("click", tocarOuPausarFaixa);

function pausarFaixa(){
    audio.pause();
    taTocando = false;
    botaoPlayPause.classList.remove("tocando");
}

function pausarFaixa(){
    audio.pause();
    taTocando = false;
    botaoPlayPause.classList.remove("tocando");
}

function tocarOuPausarFaixa(){
    if(taTocando === true){
        pausarFaixa();
    }else{
        tocarFaixa();
    }
}

function proximoCapitulo(){
    pausarFaixa();

    if(capitulo < quntidadeCapitulos){
       capitulo = capitulo + 1;
    }else{
        capitulo = 1;
    }

    audio.src = "./audios/" + capitulo + ".mp3";
    nomeCapitulo.innerText = "Capítulo " + capitulo;
}

botaoProximoCaptitulo.addEventListener("click", proximoCapitulo);

function capituloAnterior(){
    pausarFaixa();

    if(capitulo == 1){
        capitulo = quantidadeCapitulos;
    }else{
        capitulo = capitulo - 1;
    }
    
    audio.src = "./audios/" + capitulo + ".mp3";
    nomeCapitulo.innerText = "Capítulo " + capitulo;
}

botaoCapituloAnterior.addEventListener("click", capituloAnterior);
audio.addEventListener("ended", proximoCapitulo);


































