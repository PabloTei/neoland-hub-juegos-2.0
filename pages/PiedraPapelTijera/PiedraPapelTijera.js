import "./PiedraPapelTijera.css";

export const PiedraPapelTijera = () => {
    const container = document.querySelector("main");
    container.innerHTML = `
    <div class="piedra-papel-tijera">
        <div class="jugadores">
            <h2>Jugador 1</h2>
            <h2>Jugador 2</h2>
        </div>
        <div class="marcador">
            <ul class="opciones-jugador-uno">
                <li><button class="piedra1">✊</button></li>
                <li><button class="papel1">🤚</button></li>
                <li><button class="tijera1">✌️</button></li>
            </ul>
            <div class="resultados">
                <div class="resultado-jugador-uno"></div>
                <div class="resultado-jugador-dos"></div>
            </div>
            <ul class="opciones-jugador-dos">
                <li><button class="piedra2">✊</button></li>
                <li><button class="papel2">🤚</button></li>
                <li><button class="tijera2">✌️</button></li>
            </ul>
        </div>
        <div class="resumen-partida">
            <p>/papel gana a piedra</p>
            <p>/gana el jugadorX/</p>
        </div>
    </div>
    `
}

