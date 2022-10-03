//Elemento estrutural, organiza os cartoes na mesa
import "./style.css"
import CardGame from "../../components/CardGame";

function BoardGame(amountCards) {
    const $htmlCardGame = CardGame();
    //Utilização do metodo repeat para multiplicar as cartas
    const $htmlContentBoardGame = $htmlCardGame.repeat(amountCards);

    return /*html*/`
        <section class="board-game">
            ${$htmlContentBoardGame}
        </section>
    `;
}
export default BoardGame;