//Elemento estrutural, organiza os cartoes na mesa

import CardGame from "../../components/CardGame";

function BoardGame(amountCards) {
    const $htmlCardGame = CardGame();
    //Utilização do metodo repeat para multiplicar as cartas
    const $htmlBoardGame = $htmlCardGame.repeat(amountCards);

    return $htmlBoardGame;
}
export default BoardGame;