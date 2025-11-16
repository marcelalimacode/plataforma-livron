// src/components/LivronCard.js
import React from "react";
import "./LivronCard.css";

const LivronCard = ({ livro }) => {
  return (
    <div className="livron-card">
      <div className="livro-imagem">
        <img src={`https://picsum.photos/200/300?random=${livro.id}`} alt={livro.titulo} />
      </div>
      <h3>{livro.titulo}</h3>
      <p>{livro.autor}</p>
      <p>Código: {livro.codigo}</p>
      <button>Detalhes</button>
      <button>Adicionar à lista</button>
    </div>
  );
};

export default LivronCard;
