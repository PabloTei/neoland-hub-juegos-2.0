import "./PiedraPapelTijera.css";

export const PiedraPapelTijera = () => {
    const container = document.querySelector("main");
    container.innerHTML = `
    <div class ="ultimate">
        <div class="piedra-papel-tijera">
            <div class="jugadores">
                <h2>PLAYER 1</h2>
                <h2>PLAYER 2</h2>
            </div>
            <div class="marcador">
                <ul class="opciones-jugador-uno">
                    <li><button id="button" class="piedra1">✊</button></li>
                    <li><button class="papel1">🤚</button></li>
                    <li><button class="tijera1">✌️</button></li>
                </ul>
                <div class="resultados">
                    <div class="resultado-jugador-uno"></div>
                    <p class="versus"><img src="https://res.cloudinary.com/depifliz3/image/upload/v1675615888/samples/ecommerce/jcj_n7zjzw.png"/></p>
                    <div class="resultado-jugador-dos"></div>
                </div>
                <ul class="opciones-jugador-dos">
                    <li><button class="piedra2">✊</button></li>
                    <li><button class="papel2">🤚</button></li>
                    <li><button class="tijera2">✌️</button></li>
                </ul>
            </div>
            <div class="resumen-partida">
                <p class="ganador"></p>
            </div>
        </div>
    </div>
    `
    addValueButtons();
}
let valor1;
let valor2;

const addValueButtons = () => {

    const piedra1 = document.querySelector(".piedra1");
    const papel1 = document.querySelector(".papel1");
    const tijera1 = document.querySelector(".tijera1");

    piedra1.addEventListener("click", () => {
        valor1 = 1;
        comparacion();
    })
    papel1.addEventListener("click", () => {
        valor1 = 2;
        comparacion();
    })
    tijera1.addEventListener("click", () => {
        valor1 = 3;
        comparacion();
    })

    const piedra2 = document.querySelector(".piedra2");
    const papel2 = document.querySelector(".papel2");
    const tijera2 = document.querySelector(".tijera2");
    piedra2.addEventListener("click", () => {
        valor2 = 1;
        comparacion();
    })
    papel2.addEventListener("click", () => {
        valor2 = 2;
        comparacion();
    })
    tijera2.addEventListener("click", () => {
        valor2 = 3;
        comparacion();
    })
}


const comparacion = () => {
    const ganador = document.querySelector(".ganador");
    const resultPlayerOne = document.querySelector(".resultado-jugador-uno");
    const resultPlayerTwo = document.querySelector(".resultado-jugador-dos");

    if (valor1 === 1 && valor2 === 1) {
        ganador.innerHTML = `
        Empate.
        `
        resultPlayerOne.innerHTML = `
        ✊
        `
        resultPlayerTwo.innerHTML = `
        ✊
        `
    } else if (valor1 === 1 && valor2 === 2) {
        ganador.innerHTML = `
        GANA JUGADOR 2
        `
        resultPlayerOne.innerHTML = `
        ✊
        `
        resultPlayerTwo.innerHTML = `
        🤚
        `
    } else if (valor1 === 1 && valor2 === 3) {
        ganador.innerHTML = `
        GANA JUGADOR 1
        `
        resultPlayerOne.innerHTML = `
        ✊
        `
        resultPlayerTwo.innerHTML = `
        ✌️
        `
    } else if (valor1 === 2 && valor2 === 1) {
        ganador.innerHTML = `
        GANA JUGADOR 1
        ` 
        resultPlayerOne.innerHTML = `
        🤚
        `
        resultPlayerTwo.innerHTML = `
        ✊
        `
    } else if (valor1 === 2 && valor2 === 3) {
        ganador.innerHTML = `
        GANA JUGADOR 2
        `
        resultPlayerOne.innerHTML = `
        🤚
        `
        resultPlayerTwo.innerHTML = `
        ✌️
        `
    } else if (valor1 === 3 && valor2 === 1) {
        ganador.innerHTML = `
        GANA JUGADOR 2
        `
        resultPlayerOne.innerHTML = `
        ✌️
        `
        resultPlayerTwo.innerHTML = `
        ✊
        `
    } else if (valor1 === 3 && valor2 === 2) {
        ganador.innerHTML = `
        GANA JUGADOR 1
        `
        resultPlayerOne.innerHTML = `
        ✌️
        `
        resultPlayerTwo.innerHTML = `
        🤚
        `
    } else if (valor1 === 2 && valor2 === 2) {
        ganador.innerHTML = `
        Empate.
        `
        resultPlayerOne.innerHTML = `
        🤚
        `
        resultPlayerTwo.innerHTML = `
        🤚
        `
    } else if (valor1 === 3 && valor2 === 3) {
        ganador.innerHTML = `
        Empate.
        `
        resultPlayerOne.innerHTML = `
        ✌️
        `
        resultPlayerTwo.innerHTML = `
        ✌️
        `
    }
}
