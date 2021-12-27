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

export const getStaticProps = async (context) => {
  const { name } = context.params;

  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
    (res) => res.json()
  );

  return { props: { pokemon: data } };
};

export const getStaticPaths = async () => {
  return {
    paths: [`/pokemon/1`, `/pokemon/bulbasaur`],
    fallback: true,
  };
};
