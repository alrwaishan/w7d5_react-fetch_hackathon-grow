import { useEffect, useState } from 'react'

function GetPokemonAvatar(id){
    const [pokemon, setpokemon] = useState({});

    useEffect(()=>{
        fetchPokemon();
    },[id]);

    async function fetchPokemon(){
        const result = await fetch(process.env.REACT_APP_POKEMONAPI_URL+{id});
        const data = await result.json();
        setpokemon(data);
    }


    return (
        <div>
            <img src= {pokemon.sprite.front_default}></img>
        </div>
    )




}

export default GetPokemonAvatar
// fetch pokemon inages front and back into object.

