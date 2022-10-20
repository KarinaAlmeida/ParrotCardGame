//primeiro, o jogo pede pro usuario inserir quantas cartas quer jogar, entre 4 e 14
//depois o jogo incia com a quantidade de cartas escolhidas viradas para baixo
//ao clicar nas duas cartas, elas ficam viradas um tempinho e se erradas, desviram.
//se acertar, elas permanecem viradas para cima
//ao finalizar o jogo, devo mostrar com quantas jogadas o jogador ganhou, considerando cada carta clicada, ou a cada duas? verificar.





function beginning () {
    alert ("Está pronto para jogar Parrot? Vamnos nessa! \n\ By HaveUMetKarina")
    cardNumber = prompt ('Com quantas cartas quer jogar?');
    console.log (cardNumber)

   
}
 beginning()
 
function beginGame () {
    if (cardNumber >=4 && cardNumber <=14) {
        //distribuir as cartas e começaro jogo
    }
} 
function comparador() { 
	return Math.random() - 0.5; 
}

const game = document.querySelector(".game");
let cardNumber ;
let cliques = 0; 