import Image from "next/image";
import Cabecalho from "../../components/Cabecalho";
import Layout from "../../components/Layout";
import Titulo from "../../components/Titulo";
import style from "../../styles/PokemonCard.module.css";

export default function PokemonName({ pokemon }) {
  return (
    <>
      <div className={style.pokemonCard}>
        <Titulo>
          Pokémon{" "}
          {pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.slice(1)}
        </Titulo>
        <section className={style.pokemonCard_cabecalho}>
          <Cabecalho
            titulo={`Pokédex - Pokémon ${
              pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.slice(1)
            }`}
          />
        </section>

        <section className={style.pokemonCard_imagem}>
          <Image
            alt="pokémon image"
            src={`${pokemon?.sprites?.front_default}`}
            width="200px"
            height="200px"
          ></Image>
        </section>
        <article className={style.infosAbout}>
          <p className={style.pokemonCard_nome}>Name: {pokemon?.name}</p>
          <p className={style.pokemonCard_nome}>Weight: {pokemon?.weight}lbs</p>
          <p className={style.pokemonCard_nome}>
            Types: {pokemon?.types?.map((type) => `${type.type.name} `)}
          </p>
          <p className={style.pokemonCard_nome}>
            Moves:{" "}
            {pokemon?.abilities?.map(
              (item, index) => `${index + 1} ${item.ability.name} `
            )}
          </p>
        </article>

        <section className={style.botaoVoltar}>
          <Layout />
        </section>
      </div>
    </>
  );
}

export const getStaticProps = async (context) => {
  const { name } = context.params;

  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
    (res) => res.json()
  );

  return { props: { pokemon: data }, revalidate: 600 };
};

export const getStaticPaths = async () => {
  return {
    paths: [`/pokemon/bulbasaur`],
    fallback: true,
  };
};
