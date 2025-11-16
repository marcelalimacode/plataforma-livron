const express = require('express');
const router = express.Router();
const db = require('../db/database');

// GET todos os livros
router.get('/', (req, res) => {
  db.all('SELECT * FROM livros', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// GET livro por id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM livros WHERE id = ?', [id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: 'Livro não encontrado' });
    res.json(row);
  });
});

// POST novo livro
router.post('/', (req, res) => {
  const { titulo, autor, genero, ano, descricao, disponivel } = req.body;
  const stmt = db.prepare(
    'INSERT INTO livros (titulo, autor, genero, ano, descricao, disponivel) VALUES (?, ?, ?, ?, ?, ?)'
  );
  stmt.run(titulo, autor, genero, ano, descricao, disponivel || 1, function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: this.lastID });
  });
  stmt.finalize();
});

// PUT atualizar livro
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { titulo, autor, genero, ano, descricao, disponivel } = req.body;
  const stmt = `UPDATE livros SET titulo = ?, autor = ?, genero = ?, ano = ?, descricao = ?, disponivel = ? WHERE id = ?`;
  db.run(stmt, [titulo, autor, genero, ano, descricao, disponivel, id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Livro não encontrado' });
    res.json({ message: 'Livro atualizado com sucesso' });
  });
});

// DELETE livro
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM livros WHERE id = ?', [id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Livro não encontrado' });
    res.json({ message: 'Livro deletado com sucesso' });
  });
});

module.exports = router;
