const { Router } = require('express');

const router = Router();
const animalCtrl = require('../controllers/animal.controller');

// get all animals
router.get('/', animalCtrl.getAnimals);

// get one animal
router.get('/:id', animalCtrl.getAnimal);

// create animal
router.post('/', animalCtrl.createAnimal);

// update animal
router.put('/:id', animalCtrl.updateAnimal);

// delete animal
router.delete('/:id', animalCtrl.deleteAnimal);

module.exports = router;
