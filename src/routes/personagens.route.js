const route = require('express').Router();
const controllerPersonagens = require('../controllers/personagens.controller');
const { validId, validObjectBody } = require('../middlewares/personagem.middleware');

route.get('/all-personagens', controllerPersonagens.findAllPersonagensController);
route.get('/one-personagem/:id', validId, controllerPersonagens.findByIdPersonagemController);
route.post('/create-personagem', validObjectBody, controllerPersonagens.createPersonagemController);
route.put('/update-personagem/:id',validId, validObjectBody, controllerPersonagens.updatePersonagemController);
route.delete('/delete-personagem/:id', validId, controllerPersonagens.deletePersonagemController);

module.exports = route;
