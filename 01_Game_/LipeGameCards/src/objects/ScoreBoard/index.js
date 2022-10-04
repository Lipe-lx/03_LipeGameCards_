import PlayerName from "../../components/PlayerName";
import VsPlayer from "../../components/VsPlayer";
import "./style.css";


function ScoreBoard(){
    return /*html*/`
        <header class="score-board">
            ${PlayerName()}
            ${VsPlayer()}
            ${PlayerName()}
        </header>
    `;
}
export default ScoreBoard;