import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Cabecalho from "../../components/Cabecalho";
import Layout from "../../components/Layout";
import Titulo from "../../components/Titulo";

export default function PokemonName() {
  const [pokemon, setPokemon] = useState({});
  const router = useRouter();
  const name = router.query.name
  useEffect(() => {
    const getData = async ()=>{
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res=>res.json())
      console.log(data)
     setPokemon(data)
    }
   getData()
 
  }, [name])

 
  return (
    <>
    <Titulo>Pokémon {pokemon.name}</Titulo>
      <Cabecalho titulo={`pokemon ${pokemon.name}`} />
      <span>{pokemon.name}</span>
      <Layout />
    </>
  );
}
