
function comparador() { 
	return Math.random() - 0.5; 
}

//variáveis globais
const game = document.querySelector(".game");
let cardNumber ;
let click=0; 


alert ("Está pronto para jogar Parrot? Vamos nessa! \n\ By HaveUMetKarina")


//só inicia o jogo se o usuário inserir um numero valido de cartas, pares entre 4 e 14.
function askCardNumber () {
    while (cardNumber <4 || cardNumber >14 || (cardNumber % 2 !==0) ) {
        cardNumber = prompt ('Com quantas cartas quer jogar? \n\ Entre 4 e 14, por favor!');
    }

}
askCardNumber ();

//começo do jogo, criação de cartas e display das mesmas
function beginGame () {
/*gifs aleatorios, pega o número inserido no promot, numcartas, e divide por 2,
assim, se o usuario inserir 4, pega dois gifs para depois duplicar */
 let cardGifs = parrotGif(cardNumber/2);

// criação das 7 cartas individuais
let halfCards = []


for (let i = 0; i < cardNumber/2; i++) {
    halfCards.push( `
    <div class="cards" onclick="selected (this)">
    <div class="face back" >
      <img src="imagens/back.png" alt="">
    </div>
    <div class="face front">
        <img src="${cardGifs[i]}" alt="">
    </div>
</div>`)

}

/*agora vamos duplicar as cartas, com essa variável, eu pego as cartas individuais, halfCards,
meio deck, e concateno com a mesma variável, entao se tenho 2 cartas, bobross e unicorn, elas
se tornam 4, duas bobross e duas unicorn*/
let allCards = halfCards.concat(halfCards)

allCards= allCards.sort(comparador)  //embaralha a array

//aqui, insiro as cartas na div do jogo
for (let i = 0; i < cardNumber; i++){
    game.innerHTML += allCards[i];
}
}

beginGame(); //fim da função begingame


//seleção das cartas

function selected (cards) { //cards ira guardar o this, que é toda a div cards que eu tenho
click =+1;

if (cards.classList.contains ("turn")) { //classe da carta virada, ou seja gif, nada ocorre, é a primiera a ser clicada

}else {
    flipCard (cards)
}
flipped = document.querySelectorAll(".cards.turn.onDisplay").length; //a carta virada está na mesa, está dentro do jogo

if (flipped %2==1) { //se a carta virada for de resto 1, é impar, ou seja, só tem ela virada, nada a comparar ainda
    cards.classList.add("onDisplay") //a adiciono ao jogo
}else { //preciso compará-las
    let fCard = document.querySelector (".cards.turn.onDisplay");
    let sCard= cards 

    if (sameCard(fCard, sCard)){
        fCard.classList.remove ("onDisplay")
    }else{
        
        fCard.classList.remove("onDisplay");
        setTimeout(flipCard, 1000, fCard);
        setTimeout(flipCard, 1000, sCard);
    }


}
}

//virando as cartinhas
function flipCard (elemento) {

    elemento.classList.toggle("turn");
    
    let face1 = elemento.querySelector(".face.back");
    let face2 = elemento.querySelector(".face.front");

    face1.classList.toggle("turn");
    face2.classList.toggle("turn");

}

//aqui vejo se as cartas sao iguais, ao verificar o immerHTML delas, vejo a des
function sameCard (fCard,sCard) {

    let cardOne = fCard.innerHTML;
    let cardTwo = sCard.innerHTML;

    if (cardOne === cardTwo){
        return true;
    } else {
        return false;
    }

}


//aqui os nomes de todos os gifs que temos, para inseri-las nas cartas 
function parrotGif(gifs) {
    let cardGifs = [
    'imagens/bobrossparrot.gif', 
    'imagens/explodyparrot.gif', 
    'imagens/fiestaparrot.gif', 
    'imagens/metalparrot.gif', 
    'imagens/revertitparrot.gif',
    'imagens/tripletsparrot.gif', 
    'imagens/unicornparrot.gif' 
    ]
    cardGifs = cardGifs.sort (comparador);

    let output = [];
    for (let i = 0; i < gifs; i++){
        output.push(cardGifs[i]);
    }

    return (output);

}