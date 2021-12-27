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
    <div>
      <Titulo>Pokédex Next</Titulo>
      <Cabecalho titulo="Cabeçalho" />
      <input
        type="text"
        defaultValue={""}
        onChange={handleName}
        placeholder="pokémon name"
      />
      <Layout href={`/pokemon/${name || "1"}`}>Search Pokémon</Layout>
    </div>
  );
}
