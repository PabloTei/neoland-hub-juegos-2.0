import "./Hub.css";
import { initContent } from "../../main";
import { ProjectGame } from "../../components/ProjectGame/ProjectGame";
import { games } from "../../data/games";

export const Hub = () => {
    const main = document.querySelector("main");
    main.innerHTML = `
    <section class="games">
    <div class="text1">
    <h1>¡BIENVENIDX ${localStorage.getItem("user").toUpperCase()}!</h1>
    <p>ESCOGE UN JUEGO</p>
    </div>
    <div class="game-container"></div>
    </section>
    `
    hubGames();
    route();
    routeRollDice();
    routePpt();
    routeAcariciaMarvel();
}


const hubGames = () => {
        const container = document.querySelector(".game-container");
        for (const game of games) {
            const div = document.createElement("div");
            div.innerHTML = ProjectGame(game).toUpperCase();
            container.appendChild(div);
        }
}

const route = () => {
    const routePokeApi = document.querySelector(".POKEAPI-NAME");       
    routePokeApi.addEventListener("click", (ev) => {
       initContent("PokeApi");
    })
}

const routeRollDice = () => {
    const routeRollDice = document.querySelector(".ROLLDICE-NAME");
    routeRollDice.addEventListener("click", () => {
        initContent("RollDice");
    })
}

const routePpt = () => {
    const routePpt = document.querySelector(".PIEDRAPAPELTIJERA-NAME");
    routePpt.addEventListener("click", () => {
        initContent("PiedraPapelTijera");
    })
}

const routeAcariciaMarvel = () => {
    const routeAt = document.querySelector(".ACARICIAMARVEL-NAME");
    routeAt.addEventListener("click", ()=> {
        initContent("AcariciaMarvel");
    })
}