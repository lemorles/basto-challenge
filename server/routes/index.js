const { Router } = require('express');

const router = Router();
const animalRoutes = require('./animal.routes');

router.use('/animals', animalRoutes);

module.exports = router;
