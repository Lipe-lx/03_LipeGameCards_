import "./style.css";

function CardGame(icon="Woman_pink", alt="Woman") {
    return /*html*/`            
        <artical class="card-game">
            <img src="images/${icon}.gif" width="130px" height="160px" alt="${alt}">
        </artical>                                 
    `;
}

export default CardGame;