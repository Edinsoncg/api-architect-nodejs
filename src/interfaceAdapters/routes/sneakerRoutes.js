const express = require('express');
const SequelizeSneakerRepository = require('../../infraestructure/database/sequelizeSneakerRepository');
const sneakerController = require('../controllers/SneakerController');
const validateData= require('../../utils/validateData');

const router = express.Router();
const sneakerRepository = new SequelizeSneakerRepository();
const controller = sneakerController(sneakerRepository);

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/',validateData, controller.create);
router.put('/:id',validateData, controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
