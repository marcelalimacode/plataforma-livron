// src/components/SelectedBooks.jsx
import React from 'react';

const SelectedBooks = ({ livros }) => {
  if (livros.length === 0) return <p>Nenhum livro selecionado.</p>;

  return (
    <div style={styles.container}>
      {livros.map(livro => (
        <div key={livro.id} style={styles.card}>
          <h4>{livro.titulo}</h4>
          <p>{livro.autor}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  card: {
    border: '1px solid #ccc',
    padding: '5px 10px',
    borderRadius: '5px'
  }
};

export default SelectedBooks;
