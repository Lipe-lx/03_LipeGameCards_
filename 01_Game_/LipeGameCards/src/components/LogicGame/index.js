
const cards = document.querySelectorAll(".card-front-back.-active")

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add("flip");

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
secondCard = this;
hasFlippedCard = false;

checkforMatch();
}

function checkforMatch() {
    if(firstCard.dataset.framework == secondCard.dataset.framework) {
        disableCards();
        return;
    }
unflipCards();
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
    }, 600);
}

cards.forEach(card => card.addEventListener("click", flipCard));