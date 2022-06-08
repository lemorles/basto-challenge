const mongoose = require('mongoose');

const AnimalSchema = mongoose.Schema({
  senasaId: {
    type: String,
    require: true,
    maxLength: 16,
  },
  animalType: {
    type: String,
    require: true,
  },
  weight: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
    maxLength: 200,
  },
  deviceType: {
    type: String,
    require: true,
  },
  deviceId: {
    type: String,
    require: true,
    maxLength: 8,
  },
});

module.exports = mongoose.model('Animal', AnimalSchema);
