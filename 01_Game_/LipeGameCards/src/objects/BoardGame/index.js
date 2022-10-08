//Elemento estrutural, organiza os cartoes na mesa
import "./style.css"
import CardFrontBack from "../../components/CardFrontBack";
import cards from "./data";

function BoardGame() {
    window.boardGame = {};
    window.boardGame.handleClick = () => {
        const $boardGame = document.querySelector(".board-game");
        //setinha indicativa do player
        const $arrowDown = document.querySelector(".arrow-down");
        const $cardsActive = $boardGame.querySelectorAll(".card-front-back.-active");
        
        //Aplicação da regra:Quando tivermos duas cartas active (viradas) as mesmas sao desativadas, espera de 1000ms = 1s.
        if ($cardsActive.length == 2) {
            setTimeout(() => {
                const currentPlayer = $arrowDown.getAttribute("data-currentPlayer")
                //Esconde as cartas
                $cardsActive.forEach((card) => card.classList.remove("-active"));
                //Mudanca de jogador: se currentPlayer for igual a 1 entao muda para 2 se nao muda para 1
                $arrowDown.setAttribute("data-currentPlayer", currentPlayer == 1 ? 2 : 1);
            }, 600);
        }
    }
    //criando um mapa para passarmos por toda a lista de cartas disponiveis
    const $htmlCardsList = cards.map((card) => CardFrontBack(card.icon, card.altIcon, card.data));
    const $htmlCards = $htmlCardsList.join("")

    return /*html*/`
        <section class="board-game" onClick="boardGame.handleClick()">
            ${$htmlCards}
        </section>
    `;
}
export default BoardGame;