import ArrowDown from "../../components/ArrowDown";
import PlayerName from "../../components/PlayerName";
import PlayerScore from "../../components/PlayerScore";
import VsPlayer from "../../components/VsPlayer";
import "./style.css";


function ScoreBoard(){
    return /*html*/`
        <header class="score-board">
            ${(ArrowDown())}
            ${PlayerName("Player01")}
            ${PlayerScore()}
            ${VsPlayer()}
            ${PlayerScore()}
            ${PlayerName("Player02")}
        </header>
    `;
}
export default ScoreBoard;