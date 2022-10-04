import CardGame from "../CardGame";

function CardFrontBack() {
    return /*html*/`
        <article class="card-front-back">
            ${CardGame()}
            ${CardGame("shark_dancing", "shark_dancing")}
        </article>

    `
}
export default CardFrontBack;