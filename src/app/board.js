import LightLogo from "../assets/logo-light.svg";
import { widgetContainer } from "./board-widgets";

function deskTopLogo() {
  const logo = new Image();
  logo.classList.add("logo");
  logo.src = LightLogo;

  return logo;
}

function board() {
  const board = document.createElement("menu"),
    logo = deskTopLogo(),
    widgetbox = widgetContainer();

  board.classList.add("board");
  board.appendChild(logo);
  board.appendChild(widgetbox);

  return board;
}

export { board };
