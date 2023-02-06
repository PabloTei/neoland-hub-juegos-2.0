import "./AtrapaMarvel.css";
import { initContent } from "../../main";
import { Hub } from "../Hub/Hub";

export const AtrapaMarvel = () => {
    const container = document.querySelector("main");
    container.innerHTML = `
    <h1 class"titulo-marvel">¡ATRAPA A MARVEL!</h1>
    <h2>PUNTOS:</h2>
    <h2 id="puntuacion">0</h2>
    <h2>Tiempo:</h2>
    <h2 id="tiempo"></h2>
    <div class="cuadricula"></div>
    `
    meterDivs();
    movMarvel();
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

const posicionRandom = () => {
    const cuadroConcreto = document.getElementById(`${getRandomNumber()}`)
    return cuadroConcreto;
}


let resultado = 0;
let time = 5;

const printMarvel = () => {
    const puntuacion = document.querySelector("#puntuacion");
    const remove = document.querySelectorAll(".cuadro");
    for (const item of remove) {
        item.innerHTML = "";
    }
    const imagen = document.createElement("img");
    imagen.setAttribute("src", "https://res.cloudinary.com/depifliz3/image/upload/v1675642653/samples/animals/IMG_1307_jedwjt.png");
    imagen.setAttribute("class", "img-marvel")
    posicionRandom().appendChild(imagen);
    imagen.addEventListener("click", () => {
        resultado ++;
        puntuacion.innerHTML = `
        ${resultado}
        `
    })
    document.getElementById('tiempo').innerHTML = time
    if (time === 0) {
        alert(`El juego ha terminado, has acariciado ${resultado} veces a Marvel.`)
        time = 5;
    }  else {
        time -=1;
        setTimeout(time, 1000);
    }
}

const movMarvel = () => {
    const tiempoMarvel = setInterval(printMarvel, 700);
    return tiempoMarvel;
}





  








    
















