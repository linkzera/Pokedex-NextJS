import { useState, useEffect } from "react";
import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";
import Titulo from "../components/Titulo";

export default function Index() {
  const [name, setName] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <Titulo>Pokédex Next</Titulo>
      <Cabecalho titulo="Pokédex Next.JS" />
      <input
        type="text"
        defaultValue={""}
        onChange={handleName}
        placeholder="Pokémon name"
      />
      <Layout href={`/pokemon/${name || "1"}`}>Search Pokémon</Layout>
    </>
  );
}
