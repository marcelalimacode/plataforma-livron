// backend/database.js
const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

// garante que a pasta db exista
const dbFolder = path.join(__dirname, 'db');
if (!fs.existsSync(dbFolder)) fs.mkdirSync(dbFolder);

const DB_PATH = path.join(dbFolder, 'livron.db');
const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) return console.error('Erro ao abrir banco:', err.message);
  console.log('Conectado ao SQLite em', DB_PATH);
});

db.serialize(() => {
  // cria tabela livros
  db.run(
    `CREATE TABLE IF NOT EXISTS livros (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT NOT NULL,
      autor TEXT,
      genero TEXT,
      ano INTEGER,
      descricao TEXT,
      disponivel INTEGER DEFAULT 1
    );`,
    (err) => {
      if (err) console.error('Erro criando tabela livros:', err.message);
    }
  );

  // insere 6 livros de exemplo somente se a tabela estiver vazia
  db.get('SELECT COUNT(*) AS count FROM livros', (err, row) => {
    if (err) {
      console.error('Erro contando livros:', err.message);
      return;
    }
    if (row.count === 0) {
      const livros = [
        ['Dom Casmurro', 'Machado de Assis', 'Romance', 1899, 'Clássico da literatura brasileira.', 1],
        ['O Hobbit', 'J.R.R. Tolkien', 'Fantasia', 1937, 'Aventuras no mundo da Terra-média.', 1],
        ['1984', 'George Orwell', 'Distopia', 1949, 'Visão sombria de um estado totalitário.', 1],
        ['Cem Anos de Solidão', 'Gabriel García Márquez', 'Realismo Mágico', 1967, 'Saga da família Buendía.', 1],
        ['A Menina que Roubava Livros', 'Markus Zusak', 'Ficção Histórica', 2005, 'História durante a Segunda Guerra Mundial.', 1],
        ['O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 'Infantil/ Filosófico', 1943, 'Uma fábula sobre amizade e vida.', 1],
      ];

      const stmt = db.prepare(
        'INSERT INTO livros (titulo, autor, genero, ano, descricao, disponivel) VALUES (?, ?, ?, ?, ?, ?)'
      );
      livros.forEach((l) => stmt.run(l));
      stmt.finalize(() => console.log('6 livros de exemplo inseridos no banco.'));
    } else {
      console.log(`Banco já contém ${row.count} livro(s). Não inseri dados de exemplo.`);
    }
  });
});

// exporta a conexão para usar nas rotas
module.exports = db;
