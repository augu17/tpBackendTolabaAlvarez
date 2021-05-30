//defino controlador para el manejo de CRUD
const noticiaCtrl = require('./../controllers/noticia.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de noticia
router.get('/', noticiaCtrl.getNoticias);
router.post('/', noticiaCtrl.createNoticia);
router.get('/:id', noticiaCtrl.getNoticia);
router.put('/:id', noticiaCtrl.editNoticia);
router.delete('/:id', noticiaCtrl.deleteNoticia);
//exportamos el modulo de rutas
module.exports = router;
