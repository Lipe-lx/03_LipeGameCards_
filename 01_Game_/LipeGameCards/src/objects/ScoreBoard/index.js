import PlayerName from "../../components/PlayerName";

function ScoreBoard(){
    return /*html*/`
        <header class="score-board">
            ${PlayerName()}
            ${PlayerName()}
        </header>
    `;
}
export default ScoreBoard;