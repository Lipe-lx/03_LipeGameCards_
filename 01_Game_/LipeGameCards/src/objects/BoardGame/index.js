//Elemento estrutural, organiza os cartoes na mesa
import "./style.css"
import CardFrontBack from "../../components/CardFrontBack";
import cards from "./data";

function BoardGame(amountCards) {
    //Utilização do metodo repeat para multiplicar as cartas
    //const $htmlContentBoardGame = $htmlCardFrontBack.repeat(amountCards);
    
    
    //criando um mapa para passarmos por toda a lista de cartas disponiveis
    const $htmlCardsList = cards.map((card) => CardFrontBack(card.icon, card.altIcon));
    const $htmlCards = $htmlCardsList.join("")

    return /*html*/`
        <section class="board-game">
            ${$htmlCards}
        </section>
    `;
}
export default BoardGame;