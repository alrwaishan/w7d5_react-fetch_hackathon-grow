import { useEffect, useState } from 'react';
import useRandomizer from "../hooks/useRandomizer"

function GetPokemonAvatar(){
    const [pokemon, setpokemon] = useState({});
    const [id, setId] = useState();

    
    const [number, randomize] = useRandomizer();
        // randomize();
        setId(number);
    useEffect(()=>{
        async function fetchPokemon(){
            const result = await fetch(`${process.env.REACT_APP_POKEMONAPI_URL}${id}`);
            const data = await result.json();
            console.log(data)
            setpokemon(data);
        }
       
        console.log(id);
        fetchPokemon();
    },[]);

    // // async function fetchPokemon(){
    // //     const result = await fetch(process.env.REACT_APP_POKEMONAPI_URL+{id});
    // //     const data = await result.json();
    // //     console.log(data);
    // //     setpokemon(data);
    // }


    return (
        <div>
            <img src= {pokemon.sprites?.front_default}></img>
        </div>
    )




}

export default GetPokemonAvatar;
// fetch pokemon inages front and back into object.

