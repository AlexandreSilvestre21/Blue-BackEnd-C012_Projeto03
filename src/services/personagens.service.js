const Personagem = require('../models/Personagem');

const findAllPersonagensService = async () => {
  const personagem = await Personagem.find();
  return personagem;
};

const findByIdPersonagemService = async (id) => {
  const personagem = await Personagem.findById(id);
  return personagem;
};

const createPersonagemService = async (newPersonagem) => {
  const personagemCriada = await Personagem.create(newPersonagem)
  return personagemCriada;
};

const updatePersonagemService = async (id, personagemEdited) => {
  const personagemAtualizada = await Personagem.findByIdAndUpdate(id, personagemEdited);
  return personagemAtualizada;
};

const deletePersonagemService = async (id) => {
  return await Personagem.findByIdAndDelete(id);
};

module.exports = {
  findAllPersonagensService,
  findByIdPersonagemService,
  createPersonagemService,
  updatePersonagemService,
  deletePersonagemService,
};
