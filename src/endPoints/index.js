import axios from 'axios';

export const getPokemonLIst = async () => {
    const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=100&offset=20`);
    const { data } = response;
    return data;
};


// 


export const getEachPokemon = async (pockNumber) => {
    const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pockNumber}/`);
    const { data } = response;
    return data;
};