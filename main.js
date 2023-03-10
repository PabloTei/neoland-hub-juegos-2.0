import './style.css';
import { Header } from './components/Header/Header';
import { changeColor } from './components/Button/Button';
import { Login } from './pages/Login/Login';
import { Hub } from './pages/Hub/Hub';
import { PokeApi } from './pages/PokeApi/PokeApi';
import { Footer } from './components/Footer/Footer';
import { RollDice } from './pages/RollDice/RollDice';
import { PiedraPapelTijera } from './pages/PiedraPapelTijera/PiedraPapelTijera';
import { AcariciaMarvel } from './pages/AcariciaMarvel/AcariciaMarvel';


export const initContent = (route) => {
    switch (route) {
        case "Login":
            Login();
            break;
        case "Hub":
            Hub();
            Footer();
            break;
        case "PokeApi":
            PokeApi();
            Footer();
            break;
        case "RollDice":
            RollDice();
            Footer();
            break;
        case "PiedraPapelTijera":
            PiedraPapelTijera();
            Footer();
            break;
        case "AcariciaMarvel":
            AcariciaMarvel();
            Footer();
            break;
    }
}


const header = document.querySelector("header");
header.innerHTML = Header();

//Footer();
changeColor();
initContent("Login");

