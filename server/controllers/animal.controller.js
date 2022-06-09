const Animal = require('../models/animal.model');

const getAnimals = async (req, res) => {
  try {
    const animals = await Animal.find();

    if (!animals.length) return res.status(404).json({ msg: 'Animals not found' });

    return res.json(animals);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err });
  }
};

const getAnimal = async (req, res) => {
  const { id } = req.params;

  try {
    const animal = await Animal.findById(id);

    if (!animal) return res.status(404).json({ msg: 'Animal not found' });

    return res.json(animal);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err });
  }
};

const createAnimal = async (req, res) => {
  try {
    const { senasaId } = req.body;

    const found = await Animal.findOne({ senasaId });
    if (found) return res.status(400).json({ msg: 'Animal already exists' });

    const newAnimal = new Animal(req.body);
    const savedAnimal = await newAnimal.save();

    return res.status(201).json(savedAnimal);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err });
  }
};

const updateAnimal = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) return res.status(400).json({ msg: 'Bad request' });

    const animal = await Animal.findByIdAndUpdate(id, req.body);
    if (!animal) return res.status(404).json({ msg: 'Animal not found' });

    return res.json({ msg: 'Animal updated' });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err });
  }
};

const deleteAnimal = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) return res.status(400).json({ msg: 'Bad request' });

    const animal = await Animal.findByIdAndDelete(id);
    if (!animal) return res.status(404).json({ msg: 'Animal not found' });

    return res.json({ msg: `Animal ${animal.name} deleted` });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err });
  }
};

module.exports = {
  getAnimals,
  getAnimal,
  createAnimal,
  updateAnimal,
  deleteAnimal,
};
