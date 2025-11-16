// src/components/LivroForm.jsx
import React, { useState } from 'react';

const LivroForm = ({ onSubmit }) => {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [ano, setAno] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo) return alert('O título é obrigatório');
    onSubmit({ titulo, autor, genero, ano: Number(ano), descricao, disponivel: 1 });
    setTitulo('');
    setAutor('');
    setGenero('');
    setAno('');
    setDescricao('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input placeholder="Título" value={titulo} onChange={e => setTitulo(e.target.value)} />
      <input placeholder="Autor" value={autor} onChange={e => setAutor(e.target.value)} />
      <input placeholder="Gênero" value={genero} onChange={e => setGenero(e.target.value)} />
      <input placeholder="Ano" type="number" value={ano} onChange={e => setAno(e.target.value)} />
      <textarea placeholder="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)} />
      <button type="submit">Adicionar Livro</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    marginBottom: '20px'
  }
};

export default LivroForm;
