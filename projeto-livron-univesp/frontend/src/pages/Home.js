// src/pages/Home.js
import React, { useState } from "react";
import LivronCard from "../components/LivronCard";
import "./Home.css";

const livrosIniciais = [
  { id: 1, titulo: "Livro A", autor: "Autor 1", codigo: "001" },
  { id: 2, titulo: "Livro B", autor: "Autor 2", codigo: "002" },
  { id: 3, titulo: "Livro C", autor: "Autor 3", codigo: "003" },
  { id: 4, titulo: "Livro D", autor: "Autor 4", codigo: "004" },
  { id: 5, titulo: "Livro E", autor: "Autor 5", codigo: "005" },
  { id: 6, titulo: "Livro F", autor: "Autor 6", codigo: "006" },
];

const Home = () => {
  const [livros, setLivros] = useState(livrosIniciais);
  const [filtro, setFiltro] = useState("");

  const filtrarLivros = livros.filter(
    (livro) =>
      livro.titulo.toLowerCase().includes(filtro.toLowerCase()) ||
      livro.autor.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="home-container">
      <header className="menu-superior">
        <h1>Livron</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Meus Livros</li>
            <li>Filtros</li>
            <li>Perfil</li>
          </ul>
        </nav>
      </header>

      <div className="filtro">
        <input
          type="text"
          placeholder="Buscar por título ou autor..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
      </div>

      <div className="cards-container">
        {filtrarLivros.map((livro) => (
          <LivronCard key={livro.id} livro={livro} />
        ))}
      </div>
    </div>
  );
};

export default Home;
