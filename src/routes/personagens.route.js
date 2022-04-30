const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));

const route = require('express').Router();
const controllerPersonagens = require('../controllers/personagens.controller');
const { validId, validObjectBody } = require('../middlewares/personagem.middleware');

route.get('/all-personagens', controllerPersonagens.findAllPersonagensController);
route.get('/one-personagem/:id', validId, controllerPersonagens.findByIdPersonagemController);
route.post('/create-personagem', validObjectBody, controllerPersonagens.createPersonagemController);
route.put('/update-personagem/:id',validId, validObjectBody, controllerPersonagens.updatePersonagemController);
route.delete('/delete-personagem/:id', validId, controllerPersonagens.deletePersonagemController);

module.exports = route;
