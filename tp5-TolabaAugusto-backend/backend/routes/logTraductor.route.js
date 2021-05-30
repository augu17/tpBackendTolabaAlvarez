//defino controlador para el manejo de CRUD
const logTraductorCtrl = require('./../controllers/logTraductor.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de log Traductor
router.get('/', logTraductorCtrl.getLogsTraductor);
router.post('/', logTraductorCtrl.createLogTraductor);
router.get('/:id', logTraductorCtrl.getLogTraductor);
router.put('/:id', logTraductorCtrl.editLogTraductor);
router.delete('/:id', logTraductorCtrl.deleteLogTraductor);
//exportamos el modulo de rutas
module.exports = router;
