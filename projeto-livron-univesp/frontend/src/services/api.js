// src/services/api.js
const BASE_URL = 'http://localhost:3001/livros';

// GET todos os livros
export const getLivros = async () => {
  const res = await fetch(BASE_URL);
  return await res.json();
};

// GET livro por id
export const getLivroById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return await res.json();
};

// POST novo livro
export const criarLivro = async (livro) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(livro),
  });
  return await res.json();
};

// PUT atualizar livro
export const atualizarLivro = async (id, livro) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(livro),
  });
  return await res.json();
};

// DELETE livro
export const deletarLivro = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
  return await res.json();
};
