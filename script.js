
function comparador() { 
	return Math.random() - 0.5; 
}

//variáveis globais
const game = document.querySelector(".game");
let cardNumber;
let click=0; //numero de cliques que a pessoa deu
let match=0; //contabiliza os pares, os acertos das cartas
let valorGuardado="";


alert ("Está pronto para jogar Parrot? Vamos nessa! \n\ By HaveUMetKarina")


//só inicia o jogo se o usuário inserir um numero valido de cartas, pares entre 4 e 14.
function askCardNumber () {
    while (cardNumber <4 || cardNumber >14 || (cardNumber % 2 !==0) ) {
        cardNumber = prompt ('Com quantas cartas quer jogar? \n\ Entre 4 e 14, por favor!');
    }

}


//começo do jogo, criação de cartas e display das mesmas
function beginGame () {
    askCardNumber(); 


/*gifs aleatorios, pega o número inserido no promot, numcartas, e divide por 2,
assim, se o usuario inserir 4, pega dois gifs para depois duplicar */
 let cardGifs = parrotGif(cardNumber/2);

// criação das 7 cartas individuais
let halfCards = []


for (let i = 0; i < cardNumber/2; i++) {
    halfCards.push( `
    <div class="card" onclick="flip(this)">
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
for (let i = 0; i < allCards.length; i++){
    game.innerHTML += allCards[i];
}
}

beginGame(); //fim da função begingame


//virar as cartas

function flip (card) { 
if (card.classList.contains('turn')===false){ //serve para nao acrescentar valor no valorGuardado, nao comparando com ela mesma
click ++;
card.classList.add ('turn');
card.querySelector(".front").classList.add ('turn');
card.querySelector(".back").classList.add ('turn');


if (valorGuardado !=="") { //so roda se for a segunda carta
setTimeout(selectedCards, 1500,valorGuardado,card); //chamei a função no timeout
     //a primeira carta rodou até o if, nao entrou, e card foi armazenado em valorGuardado.
return valorGuardado=""; //a segunda, vai entrar no if, entao, card ainda vai ser card, nao entra em valorGuardado

}
valorGuardado=card;
}
}

//aqui coloco esses parametros como strings vazias, para preencher dps.



function selectedCards (firstCard, secondCard) {
    let carta1= String(firstCard.children[1].children[0].src);
    let carta2=String(secondCard.children[1].children[0].src);
    

    if (carta1===carta2){
        match++;
        gameOver(); //aqui chamo a função para ver se o jogo temrinou
        
        } 
        else {
            firstCard.classList.remove('turn');
            firstCard.querySelector(".front").classList.remove ('turn');
            firstCard.querySelector(".back").classList.remove ('turn');
            secondCard.classList.remove('turn');
            secondCard.querySelector(".front").classList.remove ('turn');
            secondCard.querySelector(".back").classList.remove ('turn');
            
    }
        
}
    



function gameOver(){
    if(match === cardNumber/2){
        alert(`Você ganhou em ${click} jogadas!`)
    }
}



//aqui os nomes de todos os gifs que temos, para inseri-las nas cartas 
 function parrotGif(number) {//number é o parametro que recebo, que, no caso, é o input do usuario
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

    let listaGif = []
    for (let i=0; i <number; i++) {
        listaGif.push (cardGifs[i])
    }
    return listaGif;
}