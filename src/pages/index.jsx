import Image from "next/image";
import { useState, useEffect } from "react";
import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";
import Titulo from "../components/Titulo";

export default function Index() {
  const [name, setName] = useState("");
  const handleName = (e) => {
    setName(e.target.value.toLowerCase());
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Titulo>Pokédex Next</Titulo>
      <section style={{ backgroundColor: "#f5db13" }}>
        <Cabecalho titulo="Pokédex Next.JS" />
      </section>
      <section style={{ textAlign: "center", margin: "50px 0" }}>
        <Image
          alt="pokémon image"
          src="https://raw.githubusercontent.com/sleduardo20/pokedex/0671af442dff1d8f7141e49eb83b438885bbc9e9/public/img/logo.svg"
          width="500px"
          height="250px"
        ></Image>
      </section>
      <section style={{ textAlign: "center" }}>
        {" "}
        <input
          style={{
            width: "300px",
            height: "50px",
            padding: "20px",
            fontSize: "20px",
            margin: "20px",
            border: "1px solid gray",
            borderRadius: "20px",
            textAlign: "center",
          }}
          type="text"
          defaultValue={""}
          onChange={handleName}
          placeholder="Bulbasaur"
        />
        <Layout href={`/pokemon/${name || "1"}`}>Search Pokémon</Layout>
      </section>
    </div>
  );
}
