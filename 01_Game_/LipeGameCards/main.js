
import"./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import"./src/styles/elements/base.css";
import BoardGame from "./src/objects/BoardGame";

//Boa pratica: iniciar variavel com $ quando for uma referencia da tela.
const $root = document.querySelector("#root");
//Parametro BoardGame=> Quantidade de cartas na mesa
const $htmlBoardGame = BoardGame(6);

$root.insertAdjacentHTML("beforeend", $htmlBoardGame);

