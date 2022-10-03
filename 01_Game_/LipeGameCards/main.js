
import"./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import"./src/styles/elements/base.css";
import BoardGame from "./src/objects/BoardGame";
import ScoreBoard from "./src/objects/ScoreBoard";

//Boa pratica: iniciar variavel com $ quando for uma referencia da tela.
const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
    "beforeend", `
    ${ScoreBoard()}
    ${BoardGame(6)}
    `
);

