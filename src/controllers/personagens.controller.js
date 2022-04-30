const personagensService = require('../services/personagens.service');

const findAllPersonagensController = async (req, res) => {
  const allPersonagens = await persoangensService.findAllPersonagensService();
  if (allPersonagens.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum personagem cadastrado!' });
  }
  res.send(allPersonagens);
};

const findByIdPersonagemController = async (req, res) => {
  const idParam = req.params.id;
  const chosenPersonagem = await personagensService.findByIdPersonagemService(idParam);
  if (!chosenPersonagem) {
    return res.status(404).send({ message: 'Personagem não encontrado!' });
  }
  res.send(chosenPersonagem);
};

const createPersonagemController = async (req, res) => {
  const personagem = req.body;
  const newPersonagem = await personagensService.createPersonagemService(personagem);
  res.status(201).send(newPersonagem);
};

const updatePersonagemController = async (req, res) => {
  const idParam = req.params.id;
  const editPersonagem = req.body;
  const updatedPersonagem = await personagensService.updatePersonagemService(
    idParam,
    editPersonagem,
  );
  res.send(updatedPersonagem);
};

const deletePersonagemController = async (req, res) => {
  const idParam = req.params.id;
  await personagensService.deletePersonagemService(idParam);
  res.send({ message: 'Personagem deletado com sucesso!' });
};

module.exports = {
  findAllPersonagensController,
  findByIdPersonagemController,
  createPersonagemController,
  updatePersonagemController,
  deletePersonagemController,
};