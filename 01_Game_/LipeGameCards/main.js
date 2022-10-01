import CardGame from "./src/components/CardGame";

import"./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import"./src/styles/elements/base.css";

//Boa pratica: iniciar variavel com $ quando for uma referencia da tela.
const $root = document.querySelector("#root");
const $htmlCardGame = CardGame();

console.log($htmlCardGame);

$root.insertAdjacentHTML("beforeend", $htmlCardGame);

