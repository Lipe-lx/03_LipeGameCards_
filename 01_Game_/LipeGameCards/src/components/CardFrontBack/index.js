import CardGame from "../CardGame";
import "./style.css";
import cards from "../../objects/BoardGame/data";

function CardFrontBack(icon, altIcon, data) {
    window.CardFrontBack = {}
    window.CardFrontBack.handleClick = (event) => {
        //event.target coleta o evento de click no component identificando
        const $origin = event.target;
        //.closest onde houver o click no component buscara na classe pai ".card-front-back"
        const $cardFrontBack = $origin.closest(".card-front-back");
        //.toggle adiciona e remove a classe -active (a que mostra uma carta virada)
        //virar as cartas apos duas estiverem viradas, .toglle é funcao especifica para isso
        $cardFrontBack.classList.toggle("-active");


        // LogicaGame //
        // Se virar duas cartas iguais soma-se 01 ponto e troca de jogador
        // Maximo de pontos da partida sao 3
        




    }

    
    return /*html*/`
        <article class="card-front-back" onClick= "CardFrontBack.handleClick(event)">
            <div class="card -front">
                ${CardGame()}
            </div>
            <div class="card -back">
                ${CardGame(icon, altIcon, data)}
            </div>
        </article>
        `
    }

export default CardFrontBack;
