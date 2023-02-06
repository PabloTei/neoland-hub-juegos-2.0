import "./AtrapaMarvel.css";

export const AtrapaMarvel = () => {
    const container = document.querySelector("main");
    container.innerHTML = `
    <h1 class"titulo-marvel">¡ATRAPA A MARVEL!</h1>
    <h2>Marvel atrapado:</h2>
    <h2 id="puntaje">0</h2>
    <h2>Tiempo:</h2>
    <h2 id="tiempo">50</h2>
    <div class="cuadricula"></div>
    `
    meterDivs();
    printMarvel();
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

const getRandomNumber = () => {
    const number = Math.floor(Math.random() * (16 - 1 + 1) + 1);
    return number;
}

const printMarvel = () => {
    const allCuadros = document.querySelectorAll(".cuadro");
    const cuadroConcreto = document.getElementById(`${getRandomNumber()}`)
    //console.log(cuadroConcreto);
    cuadroConcreto.innerHTML = `
    <img class="img-marvel" src="https://res.cloudinary.com/depifliz3/image/upload/v1675642653/samples/animals/IMG_1307_jedwjt.png">
    `

}