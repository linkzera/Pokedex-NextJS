import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Cabecalho from "../../components/Cabecalho";
import Layout from "../../components/Layout";
import Titulo from "../../components/Titulo";

export default function PokemonName({ pokemon }) {
 
  return (
    <>
    <Titulo>Pokémon {pokemon.name}</Titulo>
      <Cabecalho titulo={`pokemon ${pokemon.name}`} />
      <span>{pokemon.name}</span>
      <Layout />
    </>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
  const post = await res.json()

  // Pass post data to the page via props
  return { props: { pokemon } }
}
