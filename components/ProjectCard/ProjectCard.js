import "./ProjectCard.css";

export const ProjectCard = (pokemon) => `
    <img src="${pokemon.sprites.other.dream_world.front_default}">
    <h2>${(pokemon.name).toUpperCase()}</h2>
    <p>ALTURA: ${pokemon.height*10} cm</p>
    <p>PESO: ${pokemon.weight/10} kg</p>
    

`
