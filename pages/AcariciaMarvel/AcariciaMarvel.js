import "./AcariciaMarvel.css";
import { initContent } from "../../main";
import { Hub } from "../Hub/Hub";

export const AcariciaMarvel = () => {
    const container = document.querySelector("main");
    container.innerHTML = `
    <h1 class"titulo-marvel">¡ACARICIA A MARVEL!</h1>
    <h2>CARICIAS:</h2>
    <h2 id="puntuacion">0</h2>
    <h2>Tiempo:</h2>
    <h2 id="tiempo">0</h2>
    <div class="cuadricula"></div>
    `
    meterDivs();
    movMarvel();
    cuentaAtras();
     
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

}

const movMarvel = () => {
    const interval = setInterval(printMarvel, 700)
    setTimeout(() => {
        clearInterval(interval)
    }, 9000);
}

let time = 10;
const cuentaAtras = () => {
    document.getElementById('tiempo').innerHTML = time
    if (time === 0) {
        time = 10;
        alert(`El juego ha terminado, has acariciado ${resultado} veces a Marvel.`);
        resultado = 0;
        initContent("AcariciaMarvel");
    }  else {
        time -=1;
        setTimeout(cuentaAtras, 1000);
    }
}



  








    
















