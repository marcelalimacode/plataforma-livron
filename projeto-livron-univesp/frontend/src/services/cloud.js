// src/services/cloud.js

// Este arquivo é apenas uma preparação para futuras funcionalidades
// como salvar livros selecionados ou dados do usuário na nuvem.
// Por enquanto, não há integração real.

export const salvarNaNuvem = async (dados) => {
  console.log("Função de salvar na nuvem chamada com:", dados);
  // futuramente aqui você poderá fazer fetch para um backend cloud ou Firebase
  return { sucesso: true };
};

export const buscarNaNuvem = async () => {
  console.log("Função de buscar dados na nuvem chamada");
  // futuramente retornar dados da nuvem
  return [];
};
