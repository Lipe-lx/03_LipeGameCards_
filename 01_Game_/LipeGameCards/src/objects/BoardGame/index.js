//Elemento estrutural, organiza os cartoes na mesa
import "./style.css"
import CardFrontBack from "../../components/CardFrontBack";

function BoardGame(amountCards) {
    const $htmlCardFrontBack = CardFrontBack();
    //Utilização do metodo repeat para multiplicar as cartas
    const $htmlContentBoardGame = $htmlCardFrontBack.repeat(amountCards);

    return /*html*/`
        <section class="board-game">
            ${$htmlContentBoardGame}
        </section>
    `;
}
export default BoardGame;