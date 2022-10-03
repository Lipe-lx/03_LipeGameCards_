import PlayerName from "../../components/PlayerName";
import "./style.css";


function ScoreBoard(){
    return /*html*/`
        <header class="score-board">
            ${PlayerName()}
            ${PlayerName()}
        </header>
    `;
}
export default ScoreBoard;