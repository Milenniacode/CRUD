// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
//router.???('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
//router.???('/???/', productsController.create); 
//router.???('/', productsController.store); 


/*** GET ONE PRODUCT ***/ 
//router.???('/:id/', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
outer.get('/:id', productsController.edit); 
router.put('/:id', productsController.update); 


/*** DELETE ONE PRODUCT***/ 
//router.???('/:id', productsController.destroy); 


module.exports = router;
