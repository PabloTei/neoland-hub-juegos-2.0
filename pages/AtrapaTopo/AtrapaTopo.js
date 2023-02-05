import "./AtrapaTopo.css";

export const AtrapaTopo = () => {
    const container = document.querySelector("main");
    container.innerHTML = `
    <h1>¡ATRAPA EL TOPO!</h1>
    <h2>Topos atrapados:</h2>
    <h2 id="puntaje">0</h2>
    <h2>Tiempo:</h2>
    <h2 id="tiempo">50</h2>
    <div class="cuadricula"></div>
    `
    meterDivs();
}

const meterDivs = () => {
    const div = document.querySelector(".cuadricula");
    for (let i = 1; i <= 16; i++) {
        const cuadro = document.createElement("div");
        cuadro.innerHTML = `
        <div class="cuadro" id="${i}"></div>
        `
        div.appendChild(cuadro);
    }
}